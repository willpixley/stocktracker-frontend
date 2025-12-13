<script>
	import BrushableStockChart from '../../../components/BrushableStockChart.svelte';
	import { formatDate } from '../../../utils/lib';

	export let data;
	const { segment, news, stockHistory, member } = data;

	const purchasePrice = segment.buy_trade.price_at_trade;
	const salePrice = segment.sell_trade
		? segment.sell_trade.price_at_trade
		: segment.buy_trade.current_price;
	const profit = salePrice - purchasePrice;

	// Default brush range
	let brushStart = new Date(segment.buy_trade.date);
	let brushEnd = segment.sell_trade ? new Date(segment.sell_trade.date) : new Date();

	// Filtered news based on brush
	$: filteredNews = news.filter((article) => {
		const articleDate = new Date(article.datetime * 1000);
		return articleDate >= brushStart && articleDate <= brushEnd;
	});

	function handleBrush(event) {
		brushStart = event.detail.start;
		brushEnd = event.detail.end;
	}
</script>

<div class="flex w-full flex-col items-center justify-center bg-gray-100">
	<!-- Profile + Chart -->
	<div class="flex w-full flex-col gap-4 p-4 md:flex-row md:justify-evenly">
		<div class="w-full rounded-2xl bg-white p-5 shadow-md sm:p-6 md:w-[35%]">
			<!-- Header -->
			<div class="mb-4 flex flex-col gap-1">
				<p class="text-lg font-semibold text-gray-900">
					{member.first_name}
					{member.last_name}
					<span class="ml-2 text-sm font-medium text-gray-500">{member.party}</span>
				</p>

				<p class="text-sm font-medium text-gray-600">
					{segment.stock.name}
					<span class="text-gray-400">({segment.stock.ticker})</span>
					<span class="text-gray-400">({segment.stock.sector.sector_name})</span>
				</p>
			</div>

			<!-- Dates -->
			<p class="mb-4 text-sm text-gray-500">
				{formatDate(segment.buy_trade.date)}
				<span class="mx-1">→</span>
				{segment.sell_trade ? formatDate(segment.sell_trade.date) : 'Current'}
			</p>

			<!-- Prices / Profit -->
			<div class="mb-5 flex flex-wrap items-center gap-3">
				<span
					class={`w-fit rounded-full px-4 py-1 text-sm font-semibold text-white
					${profit >= 0 ? 'bg-green-500' : 'bg-red-500'}`}
				>
					${purchasePrice}
					<span class="mx-1">→</span>
					${segment.sell_trade
						? segment.sell_trade.price_at_trade
						: segment.buy_trade.current_price}
				</span>

				<p class="text-sm text-gray-600">
					Profit / share:
					<span class={profit >= 0 ? 'text-green-600' : 'text-red-600'}>
						${profit.toFixed(2)}
					</span>
				</p>

				<p class="text-sm text-gray-600">
					Volume:
					<span class="font-medium text-gray-800">
						~{Number(segment.segment.amount).toLocaleString()}
					</span>
				</p>
			</div>

			<!-- Committees -->
			{#if member.committees?.length}
				<div>
					<p class="mb-3 text-sm font-medium uppercase tracking-wide text-gray-600">
						Committee Assignments
					</p>

					<div class="flex flex-wrap gap-2">
						{#each member.committees as c}
							<span class="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
								{c.committee.committee_name}
								<span class="text-gray-400">• {c.committee.sector.sector_name}</span>
							</span>
						{/each}
					</div>
				</div>
			{/if}
		</div>

		<div class="w-full rounded-2xl bg-white p-6 shadow-lg md:w-[60%]">
			<h1 class="mb-3 text-center font-bold">
				{segment.stock.ticker} Performance 1 Week Before Purchase &rarr; 1 Week After Sale
			</h1>
			<BrushableStockChart
				on:brush={handleBrush}
				dates={stockHistory.dates}
				prices={stockHistory.prices}
				tradeDate={segment.buy_trade.date}
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
