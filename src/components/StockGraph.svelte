<script>
	import { draw } from 'svelte/transition';

	import { extent } from 'd3-array';
	import { scaleLinear } from 'd3-scale';
	import { line, curveBasis } from 'd3-shape';

	// props
	export let data = [
		{ age: 24, temp: 37.2 },
		{ age: 24.1, temp: 37.1 },
		{ age: 24.2, temp: 36.8 },
		{ age: 24.3, temp: 37.0 },
		{ age: 24.4, temp: 36.7 },
		{ age: 24.5, temp: 37.2 },
		{ age: 24.6, temp: 36.5 },
		{ age: 24.7, temp: 36.9 }
	];
	export let show;

	// scales
	const xScale = scaleLinear()
		.domain(extent(data.map((d) => d.age)))
		.range([5, 95]);

	const yScale = scaleLinear()
		.domain(extent(data.map((d) => d.temp)))
		.range([5, 75]);

	// the path generator
	const pathLine = line()
		.x((d) => xScale(d.age))
		.y((d) => yScale(d.temp))
		.curve(curveBasis);
</script>

<svg viewBox="0 0 100 100">
	{#if show}
		<path transition:draw={{ duration: 2000 }} d={pathLine(data)} />
	{/if}
</svg>

<style>
	path {
		stroke: purple;
		stroke-width: 2;
		fill: none;
		stroke-linecap: round;
	}
</style>
