<script>
	import * as d3 from 'd3';
	import { onMount, onDestroy, createEventDispatcher } from 'svelte';

	export let dates = [];
	export let prices = [];
	export let tradeDate = null;
	export let segments = null;

	let chartEl;
	let resizeObserver;
	const dispatch = createEventDispatcher();

	// Tooltip for segments
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

		// --- Price line ---
		const lineGenerator = d3
			.line()
			.x((d) => x(d.x))
			.y((d) => y(d.y));

		const linePath = svg
			.append('path')
			.datum(data)
			.attr('fill', 'none')
			.attr('stroke', 'steelblue')
			.attr('stroke-width', 2)
			.attr('d', lineGenerator);

		// Tooltip for price line
		const priceTooltip = d3
			.select(chartEl.parentElement)
			.append('div')
			.style('position', 'absolute')
			.style('pointer-events', 'none')
			.style('background', 'white')
			.style('border', '1px solid #ccc')
			.style('padding', '4px 8px')
			.style('font-size', '12px')
			.style('border-radius', '4px')
			.style('opacity', 0);

		// Create invisible path for hover detection
		svg
			.append('path')
			.datum(data)
			.attr('fill', 'none')
			.attr('stroke', 'transparent')
			.attr('stroke-width', 8) // easier hover
			.attr('d', lineGenerator)
			.on('mouseover', () => priceTooltip.style('opacity', 1))
			.on('mouseout', () => priceTooltip.style('opacity', 0))
			.on('mousemove', (event) => {
				const [mx] = d3.pointer(event);
				const bisect = d3.bisector((d) => d.x).left;
				const x0 = x.invert(mx);
				const i = bisect(data, x0, 1);
				const d0 = data[i - 1];
				const d1 = data[i] || d0;
				const d = x0.getTime() - d0.x.getTime() > d1.x.getTime() - x0.getTime() ? d1 : d0;

				priceTooltip
					.style('left', event.pageX + 10 + 'px')
					.style('top', event.pageY + 10 + 'px')
					.html(`${d3.timeFormat('%b %d, %Y')(d.x)} — $${d.y.toFixed(2)}`);
			});

		// --- Vertical trade line ---
		if (tradeDate) {
			const tradeX = new Date(tradeDate);
			if (!isNaN(tradeX.getTime())) {
				const lineX = x(tradeX);
				svg
					.append('line')
					.attr('x1', lineX)
					.attr('x2', lineX)
					.attr('y1', 0)
					.attr('y2', height)
					.attr('stroke', 'red')
					.attr('stroke-width', 2)
					.attr('stroke-dasharray', '4 2');
			}
		}

		// --- Assign lanes to segments to avoid overlap ---
		if (segments && Array.isArray(segments)) {
			const lanes = []; // keep track of last sell in each lane

			segments.forEach((seg) => {
				const buy = new Date(seg.buy_trade.date);
				const sell = new Date(seg.sell_trade.date);
				if (!buy || !sell) {
					seg._lane = 0;
					return;
				}

				let lane = 0;
				while (true) {
					if (!lanes[lane] || buy > lanes[lane]) {
						// This lane is free
						seg._lane = lane;
						lanes[lane] = sell; // update last sell date in this lane
						break;
					}
					lane++;
				}
			});
		}

		// --- Segment tooltip ---
		if (!segmentTooltip) {
			segmentTooltip = document.createElement('div');
			segmentTooltip.style.position = 'absolute';
			segmentTooltip.style.pointerEvents = 'none';
			segmentTooltip.style.background = 'white';
			segmentTooltip.style.border = '1px solid #ccc';
			segmentTooltip.style.padding = '4px 8px';
			segmentTooltip.style.fontSize = '12px';
			segmentTooltip.style.borderRadius = '4px';
			segmentTooltip.style.opacity = '0';
			document.body.appendChild(segmentTooltip);
		}

		// --- Draw segments ---
		const segmentLayer = svg.append('g').attr('class', 'segments');
		if (segments && Array.isArray(segments)) {
			segments.forEach((seg) => {
				const buy = seg.buy_trade;
				const sell = seg.sell_trade;
				if (!buy || !sell) return;

				const x1 = x(new Date(buy.date));
				const x2 = x(new Date(sell.date));
				const yLine = height * 0.8 + seg._lane * 16;

				const g = segmentLayer.append('g');

				// Segment line
				// Segment line
				g.append('line')
					.attr('x1', x1)
					.attr('x2', x2)
					.attr('y1', yLine)
					.attr('y2', yLine)
					.attr('stroke', seg.segment?.flagged ? 'red' : '#444') // <-- change color if flagged
					.attr('stroke-width', 6)
					.attr('stroke-linecap', 'round')
					.style('cursor', 'pointer')
					.style('pointer-events', 'all')
					.on('mouseover', (event) => {
						const buyDate = new Date(seg.buy_trade.date);
						const sellDate = new Date(seg.sell_trade.date);
						const memberName = `${seg.member?.first_name ?? ''} ${seg.member?.last_name ?? ''}`;
						const amount = seg.segment?.amount ?? '';
						const purchasePrice = seg.buy_trade?.price_at_trade ?? '';
						const salePrice = seg.sell_trade?.price_at_trade ?? '';

						segmentTooltip.style.opacity = '1';
						segmentTooltip.innerHTML = `
                            <strong>Start:</strong> ${d3.timeFormat('%b %d, %Y')(buyDate)}<br/>
                            <strong>End:</strong> ${d3.timeFormat('%b %d, %Y')(sellDate)}<br/>
                            <strong>Purchase Price:</strong> $${purchasePrice}<br/>
                            <strong>Sale Price:</strong> $${salePrice}<br/>
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
					.on('click', () => {
						const segmentId = seg.id;
						window.location.href = `/segments/${segmentId}`;
					});

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
