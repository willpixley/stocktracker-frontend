<script lang="ts">
	import StockProfile from '../../../components/StockProfile.svelte';
	import { formatDate } from '../../../utils/lib';
	let regionNames = new Intl.DisplayNames(['en'], { type: 'region' });

	export let data: any;
	const { trade, stock, member } = data;
</script>

<div class="flex h-full w-full justify-evenly bg-gray-100 p-6 pt-[5%]">
	<div class="h-[70%] w-[30%]">
		<StockProfile company={stock} />
	</div>

	<div class="flex h-[70%] w-[60%] items-center rounded-2xl bg-white p-6 shadow-lg">
		<div
			class="mr-5 flex h-full w-fit flex-col items-center justify-center gap-[10%] rounded-md border-2 border-gray-100 p-5"
		>
			<div class="relative h-32 w-32 overflow-hidden rounded-full">
				<img
					src={member.depiction.imageUrl}
					alt={member.directOrderName}
					class="h-full w-full object-cover object-top"
				/>
			</div>
			<div>
				<p class="text-center text-xl font-bold">{member.directOrderName}</p>
				<p class="text-md text-center font-semibold text-gray-500">
					{trade.member.party} | {member.state}
				</p>
			</div>
		</div>
		<div class="grid h-full w-full grid-cols-4 grid-rows-2 rounded-md border-2 border-gray-100 p-5">
			<div class="col-span-1 row-span-1 flex flex-col items-center justify-center gap-2">
				<p class="text-center font-bold">Ticker</p>
				<p class="text-center">{trade.stock.ticker}</p>
			</div>
			<div class="col-span-1 row-span-1 flex flex-col items-center justify-center gap-2">
				<p class="text-center font-bold">Sector</p>
				<p class="text-center">{trade.sector.sector_name}</p>
			</div>
			<div class="col-span-1 row-span-1 flex flex-col items-center justify-center gap-2">
				<p class="text-center font-bold">Type</p>
				<p class="text-center">{trade.type == 'B' ? 'Buy' : 'Sell'}</p>
			</div>

			<div class="col-span-1 row-span-1 flex flex-col items-center justify-center gap-2">
				<p class="text-center font-bold">Amount</p>
				<p class="text-center">${trade.amount.toLocaleString()}</p>
			</div>
			<div class="col-span-1 row-span-1 flex flex-col items-center justify-center gap-2">
				<p class="text-center font-bold">Bought At</p>
				<p class="text-center">${trade.price_at_trade.toLocaleString()}</p>
			</div>
			<div class="col-span-1 row-span-1 flex flex-col items-center justify-center gap-2">
				<p class="text-center font-bold">Current Price</p>
				<p class="text-center">${trade.current_price.toLocaleString()}</p>
				<p class="absolute pt-[5%] text-center text-xs italic text-gray-600">
					{`Updated on ${formatDate(trade.updated_at)}`}
				</p>
			</div>
			<div class="col-span-1 row-span-1 flex flex-col items-center justify-center gap-2">
				<p class="text-center font-bold">Date</p>
				<p class="text-center">{formatDate(trade.date)}</p>
			</div>
			<div class="col-span-1 row-span-1 flex flex-col items-center justify-center gap-2">
				<p class="text-center font-bold">Traded By</p>
				<p class="text-center">{trade.traded_by}</p>
			</div>
		</div>
	</div>
</div>
