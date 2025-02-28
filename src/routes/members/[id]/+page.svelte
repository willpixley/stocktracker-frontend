<script lang="ts">
	import { convertToReadableAmount, formatDate, getPctChange } from '../../../utils/lib';
	export let data: any;
	const { trades, member, history } = data;

	const tableHeading =
		'col-span-1 text-center font-bold bg-slate-800 text-slate-200 rounded-xl mx-2 py-2';
</script>

<div class="w-full bg-gray-100 px-8">
	<div
		class="my-10 flex h-auto w-full items-stretch justify-between rounded-2xl bg-white p-6 shadow-lg"
	>
		<div class="mr-5 flex flex-1 flex-col items-center rounded-md border-2 border-gray-100 p-5">
			<div class="relative h-32 w-32 overflow-hidden rounded-full">
				<img
					src={member.depiction.imageUrl}
					alt={member.directOrderName}
					class="h-full w-full object-cover object-top"
				/>
			</div>
			<p class="text-center text-xl font-bold">{member.directOrderName}</p>
			<p class="text-md text-center font-semibold text-gray-500">
				{member.partyHistory.at(-1).partyAbbreviation} | {member.state}
			</p>
		</div>
		<div class="mr-5 flex flex-1 flex-col items-center rounded-md border-2 border-gray-100 p-5">
			<p class="text-center font-bold">Total Trade Volume</p>
			<p>~${history.volume.toLocaleString()}</p>
		</div>
		<div class="mr-5 flex flex-1 flex-col items-center rounded-md border-2 border-gray-100 p-5">
			<p class="text-center font-bold">Purchases</p>
			<p>{history.purchases}</p>
		</div>
		<div class="mr-5 flex flex-1 flex-col items-center rounded-md border-2 border-gray-100 p-5">
			<p class="text-center font-bold">Sales</p>
			<p>{history.sales}</p>
		</div>
		<div class="mr-5 flex flex-1 flex-col items-center rounded-md border-2 border-gray-100 p-5">
			<p class="text-center font-bold">Weighted Returns</p>
			<p>{Number(history.weighted_return).toFixed(2)}%</p>
		</div>
		<div class="mr-5 flex flex-1 flex-col items-center rounded-md border-2 border-gray-100 p-5">
			<p class="text-center font-bold">Weighted Returns (Flagged only)</p>
			<p>
				{Number(history.weighted_flagged_return) == 0
					? 'N/A'
					: `${Number(history.weighted_flagged_return).toFixed(2)}%`}
			</p>
		</div>
	</div>

	<!-- trade display -->
	{#if trades}
		<div class="flex w-full flex-col items-center bg-inherit text-gray-800">
			<div class="grid w-full grid-cols-7 pb-20">
				<p class={tableHeading}>Stock</p>
				<p class={tableHeading}>Type</p>
				<p class={tableHeading}>Amount</p>
				<p class={tableHeading}>Date</p>
				<p class={tableHeading}>Traded By</p>
				<p class={tableHeading}>Performance</p>
				<p class={tableHeading}>More</p>

				{#each trades as trade}
					<div
						class="col-span-7 my-2 grid grid-cols-7 items-center justify-center rounded-md bg-gray-200 py-3 shadow-md"
					>
						<a
							href={`/stocks/${trade.stock.ticker}`}
							class={`col-span-1 rounded-md text-center text-blue-600 hover:underline ${trade.flagged ? 'mx-2 bg-red-600' : ''}`}
							>{trade.stock.ticker}</a
						>
						<p class="col-span-1 text-center">{trade.type == 'b' ? 'Buy' : 'Sell'}</p>
						<p class="col-span-1 text-center">~${trade.amount.toLocaleString()}</p>
						<p class="col-span-1 text-center">{formatDate(trade.date)}</p>
						<p class="col-span-1 text-center">{trade.traded_by}</p>
						<p
							class={`col-span-1 rounded-lg text-center ${(getPctChange(trade.price_at_trade, trade.current_price) > 0 && trade.type == 'b') || (getPctChange(trade.price_at_trade, trade.current_price) < 0 && trade.type == 's') ? 'bg-green-500' : 'bg-red-500'}`}
						>
							{getPctChange(trade.price_at_trade, trade.current_price) > 0 ? '+' : ''}{getPctChange(
								trade.price_at_trade,
								trade.current_price
							).toFixed(1)}%
						</p>
						<a
							class="col-span-1 text-center text-blue-600 hover:underline"
							href={`/trades/${trade.id}`}>More</a
						>
					</div>
				{/each}
			</div>
		</div>
	{:else}
		<p>No trades on file for this member</p>
	{/if}
</div>
