<script lang="ts">
	import type { CompanyInfo, CompanyNews } from '../../../types/types';
	import BrushableStockChart from '../../../components/BrushableStockChart.svelte';
	import { formatDate } from '../../../utils/lib';

	export let data;
	const { segment, news, stockHistory } = data;
	const purchasePrice = segment.buy_trade.price_at_trade;
	const salePrice = segment.sell_trade.price_at_trade;
	const profit = salePrice - purchasePrice;

	// Filtered news based on brush
	let filteredNews = news;

	// Default brush range is segment start → end
	let brushStart = new Date(segment.buy_trade.date);
	let brushEnd = new Date(segment.sell_trade.date);

	$: filteredNews = news.filter((article) => {
		const articleDate = new Date(article.datetime * 1000);
		return articleDate >= brushStart && articleDate <= brushEnd;
	});

	function handleBrush(event: CustomEvent) {
		brushStart = event.detail.start;
		brushEnd = event.detail.end;
	}
</script>

<div class="flex w-full flex-col items-center justify-center bg-gray-100">
	<!-- Profile + Chart -->
	<div class="flex w-full flex-col gap-4 p-4 md:flex-row md:justify-evenly">
		<div class="w-full rounded-2xl bg-white p-6 shadow-lg md:w-[35%]">
			<div>
				<p>{segment.member.first_name} {segment.member.last_name} | {segment.member.party}</p>
				<p>{segment.stock.name} ({segment.stock.ticker})</p>
				<p>{formatDate(segment.buy_trade.date)} &rarr; {formatDate(segment.sell_trade.date)}</p>
				<p class={`${profit > 0 ? 'bg-green-500' : 'bg-red-500'} w-fit rounded-full px-3 py-1`}>
					${segment.buy_trade.price_at_trade} &rarr; ${segment.sell_trade.price_at_trade}
				</p>
			</div>
		</div>
		<div class="w-full rounded-2xl bg-white p-6 shadow-lg md:w-[60%]">
			<h1 class="mb-3 text-center font-bold">Stock Performance over the Segment</h1>
			<BrushableStockChart
				on:brush={handleBrush}
				dates={stockHistory.dates}
				prices={stockHistory.prices}
			/>
		</div>
	</div>

	<!-- News -->
	<h1 class="py-5 text-center text-2xl font-extrabold md:text-3xl">
		Between the purchase and sale:
	</h1>
	<div class="grid w-full gap-5 p-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
		{#each filteredNews as article}
			<div class="rounded-2xl bg-white p-4 shadow-lg">
				<a href={article.url} target="_blank" class="block">
					<h2 class="text-lg font-bold text-blue-600">{article.headline}</h2>
				</a>
				<p class="text-sm text-gray-500">
					{new Date(article.datetime * 1000).toLocaleDateString()}
				</p>
				<p class="mt-2 line-clamp-4 text-gray-700">{article.summary}</p>
				{#if article.image}
					<div class="mt-4">
						<img src={article.image} alt="News" class="h-auto w-full rounded-md object-cover" />
					</div>
				{/if}
				<p class="mt-2 text-sm text-gray-600">Source: {article.source}</p>
			</div>
		{/each}
	</div>
</div>
