<script lang="ts">
	import type { CompanyInfo, CompanyNews } from '../../../types/types';
	import StockProfile from '../../../components/StockProfile.svelte';
	import StockChart from '../../../components/StockChart.svelte';
	export let data;
	const { company, news, stockHistory } = data;
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

<div class="bg-gray-100">
	<div class="flex h-fit w-full justify-evenly p-4">
		<div class="w-[30%]">
			<StockProfile {company} />
		</div>
		<div class="h-full w-[64%] rounded-2xl bg-white p-6 shadow-lg">
			<StockChart dates={stockHistory.dates} prices={stockHistory.prices} />
		</div>
	</div>
	<h1 class="py-5 text-center text-3xl font-extrabold">Recent News</h1>
	<div class="grid h-full w-full grid-cols-5 items-center justify-center gap-5 p-4">
		{#each news as article}
			<div class="col-span-1 h-full w-full rounded-2xl bg-white p-4 shadow-lg">
				<a href={article.url} target="_blank" class="block">
					<h2 class="text-lg font-bold text-blue-600">{article.headline}</h2>
				</a>
				<p class="text-sm text-gray-500">
					{new Date(article.datetime * 1000).toLocaleDateString()}
				</p>
				<p class="mt-2 line-clamp-4 text-gray-700">{article.summary}</p>
				<div class="mt-4">
					<img src={article.image} alt="News" class="h-auto w-full rounded-md" />
				</div>
				<p class="mt-2 text-sm text-gray-600">Source: {article.source}</p>
			</div>
		{/each}
	</div>
</div>
