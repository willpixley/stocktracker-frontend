<script lang="ts">
	import * as d3 from 'd3';
	import { onMount, afterUpdate } from 'svelte';

	export let dates: string[] = [];
	export let prices: number[] = [];

	let chartEl: HTMLDivElement;

	function drawChart() {
		if (!dates.length || !prices.length) return;

		// clear previous chart
		d3.select(chartEl).selectAll('*').remove();

		const data = dates.map((d, i) => ({
			x: new Date(d),
			y: prices[i]
		}));

		const margin = { top: 20, right: 30, bottom: 40, left: 60 };
		const width = chartEl.clientWidth - margin.left - margin.right;
		const height = chartEl.clientHeight - margin.top - margin.bottom;

		const svg = d3
			.select(chartEl)
			.append('svg')
			.attr('width', width + margin.left + margin.right)
			.attr('height', height + margin.top + margin.bottom)
			.append('g')
			.attr('transform', `translate(${margin.left},${margin.top})`);

		// x axis (time scale)
		const x = d3
			.scaleTime()
			.domain(d3.extent(data, (d) => d.x) as [Date, Date])
			.range([0, width]);

		svg
			.append('g')
			.attr('transform', `translate(0,${height})`)
			.call(d3.axisBottom(x).tickFormat(d3.timeFormat('%b %d') as any));

		// y axis (linear scale)
		const y = d3
			.scaleLinear()
			.domain([d3.min(data, (d) => d.y)! * 0.95, d3.max(data, (d) => d.y)! * 1.05])
			.nice()
			.range([height, 0]);

		svg.append('g').call(d3.axisLeft(y));

		// bisector
		const bisect = d3.bisector<{ x: Date; y: number }, Date>((d) => d.x).left;

		// line
		svg
			.append('path')
			.datum(data)
			.attr('fill', 'none')
			.attr('stroke', 'steelblue')
			.attr('stroke-width', 1.5)
			.attr(
				'd',
				d3
					.line<{ x: Date; y: number }>()
					.x((d) => x(d.x))
					.y((d) => y(d.y))
			);

		// focus circle
		const focus = svg
			.append('g')
			.append('circle')
			.style('fill', 'none')
			.attr('stroke', 'black')
			.attr('r', 5)
			.style('opacity', 0);

		// focus text
		const focusText = svg
			.append('g')
			.append('text')
			.style('opacity', 0)
			.attr('text-anchor', 'left')
			.attr('alignment-baseline', 'middle');

		// overlay rect for capturing mouse
		svg
			.append('rect')
			.style('fill', 'none')
			.style('pointer-events', 'all')
			.attr('width', width)
			.attr('height', height)
			.on('mouseover', () => {
				focus.style('opacity', 1);
				focusText.style('opacity', 1);
			})
			.on('mouseout', () => {
				focus.style('opacity', 0);
				focusText.style('opacity', 0);
			})
			.on('mousemove', function (event) {
				const x0 = x.invert(d3.pointer(event, this)[0]);
				const i = bisect(data, x0, 1);
				const d0 = data[i - 1];
				const d1 = data[i] || d0;
				const d = x0.getTime() - d0.x.getTime() > d1.x.getTime() - x0.getTime() ? d1 : d0;

				focus.attr('cx', x(d.x)).attr('cy', y(d.y));

				// fixed position in top-right corner
				const padding = 10;
				const tooltipX = width - padding; // right edge minus padding
				const tooltipY = padding; // distance from top

				focusText
					.html(`${d3.timeFormat('%b %d, %Y')(d.x)} — $${d.y.toFixed(2)}`)
					.attr('x', tooltipX)
					.attr('y', tooltipY)
					.attr('text-anchor', 'end'); // align text to the right
			});
	}

	onMount(drawChart);
	afterUpdate(drawChart);
</script>

<div bind:this={chartEl} class="h-96 w-full rounded-lg bg-white p-4 shadow"></div>
