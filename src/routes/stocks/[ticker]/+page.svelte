<script lang="ts">
	import type { CompanyInfo, CompanyNews } from '../../../types/types';
	import StockProfile from '../../../components/StockProfile.svelte';
	import StockGraph from '../../../components/StockGraph.svelte';

	export let data;
	const { company, news } = data;
	function convertToReadableAmount(number: number) {
		if (number >= 1_000_000) {
			return (number / 1_000_000).toFixed(1) + ' T';
		} else if (number >= 1_000) {
			// If the number is in billions
			return (number / 1_000).toFixed(1) + ' B';
		} else if (number >= 1) {
			// If the number is in millions
			return number.toFixed(1) + ' M';
		} else {
			// If the number is less than a million
			return number.toFixed(1) + ' M'; // Can adjust as needed
		}
	}
</script>

<div class="grid h-full w-full grid-cols-5 items-center justify-center gap-5 bg-gray-100 p-4">
	<StockProfile {company} />

	{#each news as article}
		<div class="col-span-1 h-full w-full rounded-2xl bg-white p-4 shadow-lg">
			<a href={article.url} target="_blank" class="block">
				<h2 class="text-lg font-bold text-blue-600">{article.headline}</h2>
			</a>
			<p class="text-sm text-gray-500">{new Date(article.datetime * 1000).toLocaleDateString()}</p>
			<p class="mt-2 text-gray-700">{article.summary}</p>
			<div class="mt-4">
				<img src={article.image} alt="News" class="h-auto w-full rounded-md" />
			</div>
			<p class="mt-2 text-sm text-gray-600">Source: {article.source}</p>
		</div>
	{/each}
</div>
