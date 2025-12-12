<script>
	import BrushableStockChart from '../../../components/BrushableStockChart.svelte';
	import { formatDate } from '../../../utils/lib';

	export let data;
	const { segment, news, stockHistory, member } = data;
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

	function handleBrush(event) {
		brushStart = event.detail.start;
		brushEnd = event.detail.end;
	}
	console.log(segment);
</script>

<div class="flex w-full flex-col items-center justify-center bg-gray-100">
	<!-- Profile + Chart -->
	<div class="flex w-full flex-col gap-4 p-4 md:flex-row md:justify-evenly">
		<div class="w-full rounded-2xl bg-white p-6 shadow-lg md:w-[35%]">
			<!-- Member -->
			<div class="mb-6">
				<p class="text-xl font-semibold text-gray-900">
					{member.first_name}
					{member.last_name}
					<span class="ml-2 text-sm font-medium text-gray-500">
						{member.party}
					</span>
				</p>
			</div>

			<!-- Stock -->
			<div class="mb-6 border-l-4 border-blue-500 pl-4">
				<p class="text-base font-medium text-gray-900">
					{segment.stock.name}
					<span class="ml-1 text-gray-500">
						({segment.stock.ticker})
					</span>
				</p>

				<p class="mt-1 text-sm text-gray-500">
					Sector: {segment.stock.sector.sector_name}
				</p>
			</div>

			<div class="mb-6">
				<p class="text-sm font-medium text-gray-700">Holding period</p>
				<p class="mt-1 text-sm text-gray-500">
					{formatDate(segment.buy_trade.date)}
					<span class="mx-2">→</span>
					{formatDate(segment.sell_trade.date)}
				</p>
			</div>

			<!-- Financials -->
			<div class="mb-8">
				<p class="mb-2 text-sm font-medium text-gray-700">Trade details</p>

				<div class="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
					<span
						class={`w-fit rounded-full px-4 py-1 text-sm font-semibold text-white
				${profit > 0 ? 'bg-green-500' : 'bg-red-500'}`}
					>
						${segment.buy_trade.price_at_trade}
						<span class="mx-1">→</span>
						${segment.sell_trade.price_at_trade}
					</span>

					<p class="text-sm text-gray-600">
						Profit / share:
						<span class={profit > 0 ? 'text-green-600' : 'text-red-600'}>
							${profit.toFixed(2)}
						</span>
					</p>

					<p class="text-sm text-gray-600">
						Volume:
						<span class="font-medium text-gray-800">
							~${Number(segment.segment.amount).toLocaleString()}
						</span>
					</p>
				</div>
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
								<span class="text-gray-400">
									• {c.committee.sector.sector_name}
								</span>
							</span>
						{/each}
					</div>
				</div>
			{/if}
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
