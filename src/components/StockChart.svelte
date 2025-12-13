<script>
	import * as d3 from 'd3';
	import { onMount, onDestroy } from 'svelte';

	export let dates = [];
	export let prices = [];
	export let tradeDate = null;
	export let segments = [];

	let chartEl;
	let resizeObserver;
	let segmentTooltip;

	function drawChart() {
		if (!dates.length || !prices.length || !chartEl) return;

		// Clear previous chart
		d3.select(chartEl).selectAll('*').remove();

		const data = dates.map((d, i) => ({
			x: new Date(d),
			y: prices[i]
		}));

		const margin = { top: 20, right: 30, bottom: 40, left: 60 };
		const width = chartEl.offsetWidth - margin.left - margin.right;
		const height = chartEl.offsetHeight - margin.top - margin.bottom;

		const svg = d3
			.select(chartEl)
			.append('svg')
			.attr('width', width + margin.left + margin.right)
			.attr('height', height + margin.top + margin.bottom)
			.append('g')
			.attr('transform', `translate(${margin.left},${margin.top})`);

		// Scales
		const x = d3
			.scaleTime()
			.domain(d3.extent(data, (d) => d.x))
			.range([0, width]);
		const y = d3
			.scaleLinear()
			.domain([d3.min(data, (d) => d.y) * 0.95, d3.max(data, (d) => d.y) * 1.05])
			.nice()
			.range([height, 0]);

		// Axes
		svg
			.append('g')
			.attr('transform', `translate(0,${height})`)
			.call(d3.axisBottom(x).tickFormat(d3.timeFormat('%b %d')));
		svg.append('g').call(d3.axisLeft(y));

		// Price line
		const lineGenerator = d3
			.line()
			.x((d) => x(d.x))
			.y((d) => y(d.y));

		svg
			.append('path')
			.datum(data)
			.attr('fill', 'none')
			.attr('stroke', 'steelblue')
			.attr('stroke-width', 2)
			.attr('d', lineGenerator);

		// Vertical trade line
		if (tradeDate) {
			const tradeX = new Date(tradeDate);
			if (!isNaN(tradeX.getTime())) {
				svg
					.append('line')
					.attr('x1', x(tradeX))
					.attr('x2', x(tradeX))
					.attr('y1', 0)
					.attr('y2', height)
					.attr('stroke', 'red')
					.attr('stroke-width', 2)
					.attr('stroke-dasharray', '4 2');
			}
		}

		// Segment tooltip
		if (!segmentTooltip) {
			segmentTooltip = document.createElement('div');
			Object.assign(segmentTooltip.style, {
				position: 'absolute',
				pointerEvents: 'none',
				background: 'white',
				border: '1px solid #ccc',
				padding: '4px 8px',
				fontSize: '12px',
				borderRadius: '4px',
				opacity: '0'
			});
			document.body.appendChild(segmentTooltip);
		}

		// Assign lanes to avoid overlap
		if (segments.length) {
			const lanes = [];
			segments.forEach((seg) => {
				const buy = new Date(seg.buy_trade.date);
				const sell = seg.sell_trade
					? new Date(seg.sell_trade.date)
					: new Date(dates[dates.length - 1]);
				let lane = 0;
				while (true) {
					if (!lanes[lane] || buy > lanes[lane]) {
						seg._lane = lane;
						lanes[lane] = sell;
						break;
					}
					lane++;
				}
			});
		}

		// Draw segments
		const segmentLayer = svg.append('g').attr('class', 'segments');
		segments.forEach((seg) => {
			const buy = seg.buy_trade;
			const sell = seg.sell_trade;
			if (!buy) return;

			const x1 = x(new Date(buy.date));
			const x2 = x(sell ? new Date(sell.date) : new Date(dates[dates.length - 1]));
			const yLine = height * 0.6 + (seg._lane || 0) * 16;

			const g = segmentLayer.append('g');

			// Segment line
			g.append('line')
				.attr('x1', x1)
				.attr('x2', x2)
				.attr('y1', yLine)
				.attr('y2', yLine)
				.attr('stroke', seg.segment?.flagged ? 'red' : '#444')
				.attr('stroke-width', 6)
				.attr('stroke-linecap', 'round')
				.attr('stroke-dasharray', sell ? '0' : '6 4') // dashed if open
				.style('opacity', sell ? 1 : 0.6)
				.style('cursor', 'pointer')
				.on('mouseover', (event) => {
					const buyDate = new Date(seg.buy_trade.date);
					const sellDate = sell ? new Date(seg.sell_trade.date) : null;
					const memberName = `${seg.member?.first_name ?? ''} ${seg.member?.last_name ?? ''}`;
					const amount = seg.segment?.amount ?? '';
					const purchasePrice = seg.buy_trade?.price_at_trade ?? '';
					const salePrice = sell ? seg.sell_trade?.price_at_trade : 'Open';

					segmentTooltip.style.opacity = '1';
					segmentTooltip.innerHTML = `
						<strong>Start:</strong> ${d3.timeFormat('%b %d, %Y')(buyDate)}<br/>
						<strong>End:</strong> ${sellDate ? d3.timeFormat('%b %d, %Y')(sellDate) : 'Open'}<br/>
						<strong>Purchase Price:</strong> $${purchasePrice}<br/>
						<strong>Sale Price:</strong> ${salePrice}<br/>
						<strong>Member:</strong> ${memberName}<br/>
						<strong>Amount:</strong> $${amount.toLocaleString()}
					`;
				})
				.on('mousemove', (event) => {
					segmentTooltip.style.left = event.pageX + 10 + 'px';
					segmentTooltip.style.top = event.pageY + 10 + 'px';
				})
				.on('mouseout', () => {
					segmentTooltip.style.opacity = '0';
				})
				.on('click', () => (window.location.href = `/segments/${seg.id}`));

			// End caps
			g.append('line')
				.attr('x1', x1)
				.attr('x2', x1)
				.attr('y1', yLine - 6)
				.attr('y2', yLine + 6)
				.attr('stroke', '#444');

			g.append('line')
				.attr('x1', x2)
				.attr('x2', x2)
				.attr('y1', yLine - 6)
				.attr('y2', yLine + 6)
				.attr('stroke', '#444');
		});
	}

	onMount(() => {
		drawChart();
		resizeObserver = new ResizeObserver(() => drawChart());
		resizeObserver.observe(chartEl);
	});

	onDestroy(() => {
		if (resizeObserver) resizeObserver.disconnect();
		if (segmentTooltip) document.body.removeChild(segmentTooltip);
	});
</script>

<div bind:this={chartEl} class="h-64 w-full rounded-lg bg-white shadow sm:h-80 md:h-96"></div>
