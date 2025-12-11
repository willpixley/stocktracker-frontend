<script lang="ts">
	import * as d3 from 'd3';
	import { onMount, onDestroy, createEventDispatcher } from 'svelte';

	export let dates: string[] = [];
	export let prices: number[] = [];
	export let tradeDate: string | null = null;

	let chartEl: HTMLDivElement;
	let resizeObserver: ResizeObserver;
	const dispatch = createEventDispatcher();

	function drawChart() {
		if (!dates.length || !prices.length || !chartEl) return;

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

		const x = d3
			.scaleTime()
			.domain(d3.extent(data, (d) => d.x) as [Date, Date])
			.range([0, width]);

		const y = d3
			.scaleLinear()
			.domain([d3.min(data, (d) => d.y)! * 0.95, d3.max(data, (d) => d.y)! * 1.05])
			.nice()
			.range([height, 0]);

		svg
			.append('g')
			.attr('transform', `translate(0,${height})`)
			.call(d3.axisBottom(x).tickFormat(d3.timeFormat('%b %d') as any));

		svg.append('g').call(d3.axisLeft(y));

		const lineGenerator = d3
			.line<{ x: Date; y: number }>()
			.x((d) => x(d.x))
			.y((d) => y(d.y));

		svg
			.append('path')
			.datum(data)
			.attr('fill', 'none')
			.attr('stroke', 'steelblue')
			.attr('stroke-width', 1.5)
			.attr('d', lineGenerator);

		// Vertical trade line
		if (tradeDate) {
			const tx = new Date(tradeDate);
			if (!isNaN(tx.getTime())) {
				const lineX = x(tx);
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

		// Brush
		const brush = d3
			.brushX()
			.extent([
				[0, 0],
				[width, height]
			])
			.on('end', (event: any) => {
				if (!event.selection) return;
				const [x0, x1] = event.selection;
				const startDate = x.invert(x0);
				const endDate = x.invert(x1);
				dispatch('brush', { start: startDate, end: endDate });
			});

		svg.append('g').attr('class', 'brush').call(brush);
	}

	onMount(() => {
		drawChart();
		resizeObserver = new ResizeObserver(() => drawChart());
		resizeObserver.observe(chartEl);
	});

	onDestroy(() => {
		if (resizeObserver) resizeObserver.disconnect();
	});
</script>

<div bind:this={chartEl} class="h-64 w-full rounded-lg bg-white shadow sm:h-80 md:h-96"></div>
