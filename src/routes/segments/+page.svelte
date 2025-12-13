<script>
	import Select from '../../components/Select.svelte';
	import Pagination from '../../components/Pagination.svelte';
	import { goto } from '$app/navigation';
	import { formatDate } from '$lib/utils';
	import { page } from '$app/stores';
	let data = $derived($page.data);

	let segments = $derived(data.segments);
	let pageData = $derived(data.pageData);
	let flagged = $state($page.url.searchParams.get('flagged') ?? 'all');
	let closed = $state($page.url.searchParams.get('closed') ?? 'all');
	let pageSize = $state(Number($page.data.pageData.page_size) || 25);

	const flaggedOptions = [
		{ label: 'All', value: 'all' },
		{ label: 'Flagged', value: 'true' },
		{ label: 'Not Flagged', value: 'false' }
	];

	const closedOptions = [
		{ label: 'All', value: 'all' },
		{ label: 'Closed', value: 'true' },
		{ label: 'Open', value: 'false' }
	];

	const pageOptions = [
		{ label: 25, value: 25 },
		{ label: 50, value: 50 },
		{ label: 100, value: 100 }
	];

	function changePage(p) {
		goto(`?page=${p}&page_size=${pageSize}&flagged=${flagged}&closed=${closed}`);
	}

	function handleFilterChange() {
		goto(`?page=1&page_size=${pageSize}&flagged=${flagged}&closed=${closed}`);
	}

	function handlePageSizeChange() {
		goto(`?page=1&page_size=${pageSize}&flagged=${flagged}&closed=${closed}`);
	}
</script>

<div class="flex flex-col gap-6 p-4 md:p-6">
	<!-- Filters -->
	<div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
		<div class="flex min-w-64 flex-col gap-3 sm:flex-row">
			<Select
				options={flaggedOptions}
				bind:value={flagged}
				placeholder="Flag Status"
				on:change={handleFilterChange}
				class="w-full sm:w-48"
			/>
			<Select
				options={closedOptions}
				bind:value={closed}
				placeholder="Segment Status"
				on:change={handleFilterChange}
				class="w-full sm:w-48"
			/>
		</div>

		<div class="flex items-center gap-2">
			<p class="hidden text-sm text-gray-600 sm:block">Page Size:</p>
			<Select
				options={pageOptions}
				bind:value={pageSize}
				placeholder="Page Size"
				on:change={handlePageSizeChange}
				class="w-24"
			/>
		</div>
	</div>

	<!-- Segments Grid -->
	<div class="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
		{#each segments as segment}
			<!-- svelte-ignore a11y_click_events_have_key_events -->
			<div
				type="button"
				role="button"
				tabindex="0"
				class=" flex cursor-pointer flex-col justify-between rounded-xl bg-white p-4 shadow transition hover:shadow-lg"
				onclick={() => {
					goto(`/segments/${segment.id}`);
				}}
			>
				<div class="flex items-start justify-between">
					<div class="flex flex-col gap-1">
						<p class="font-semibold text-gray-700">
							{segment.member.first_name}
							{segment.member.last_name}
							{#if segment.segment.flagged}
								🚩
							{/if}
						</p>

						<a
							href={`/stocks/${segment.stock.ticker}`}
							class="font-medium text-blue-600 hover:underline"
						>
							{segment.stock.ticker}
						</a>
						<p class="text-sm text-gray-500">
							{formatDate(segment.buy_trade.date)} &rarr; {segment.sell_trade
								? formatDate(segment.sell_trade.date)
								: 'Current'}
						</p>
						<p
							class={`w-fit rounded-3xl px-2 py-1 text-sm text-gray-100 ${segment.closed ? (Number(segment.buy_trade.price_at_trade) > Number(segment.sell_trade.price_at_trade) ? 'bg-green-500' : 'bg-red-400') : Number(segment.buy_trade.price_at_trade) > Number(segment.buy_trade.current_price) ? 'bg-green-500' : 'bg-red-400'}`}
						>
							${Number(segment.buy_trade.price_at_trade).toLocaleString()} &rarr; ${segment.sell_trade
								? Number(segment.sell_trade.price_at_trade).toLocaleString()
								: Number(segment.buy_trade.current_price).toLocaleString()}
						</p>
					</div>
					<div class="text-right">
						<p
							class={`rounded-full px-2 py-1 text-sm font-semibold ${segment.closed ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}
						>
							{segment.closed ? 'Closed' : 'Open'}
						</p>
						<a
							href={`/segments/${segment.id}`}
							class="mt-2 block text-lg text-gray-400 hover:text-gray-600">&rsaquo;</a
						>
					</div>
				</div>
			</div>
		{/each}
	</div>

	<!-- Pagination -->
	<div class="mt-3 flex w-full items-center justify-center pb-10">
		<Pagination page={pageData.page} total_pages={pageData.total_pages} onChange={changePage} />
	</div>
</div>
