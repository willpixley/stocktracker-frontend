<script lang="ts">
	import { formatDate } from '../../utils/lib';
	export let data: any;
	const { trends } = data;
	console.log(trends);
</script>

<div class="flex min-h-full w-full flex-col items-center gap-8 bg-gray-300">
	<h1 class="mb-1 mt-6 text-2xl font-bold">Recent Trends</h1>
	<div class="grid w-[80%] grid-cols-5 rounded-md bg-gray-100 p-3 shadow-md">
		<p class="col-span-1 mb-3 text-center font-bold">Past Month</p>
		<p class="col-span-1 mb-3 text-center font-bold">Volume Bought</p>
		<p class="col-span-1 mb-3 text-center font-bold">Volume Sold</p>
		<p class="col-span-1 mb-3 text-center font-bold">Most Bought Sector</p>
		<p class="col-span-1 mb-3 text-center font-bold">Most Sold Sector</p>
		<p class="col-span-1 text-center">{formatDate(trends.since)}</p>
		<p class="col-span-1 text-center">~${trends.volume_bought.toLocaleString()}</p>
		<p class="col-span-1 text-center">~${trends.volume_sold.toLocaleString()}</p>
		<p class="col-span-1 text-center">{trends.max_sector_bought.sector_name}</p>
		<p class="col-span-1 text-center">{trends.max_sector_sold.sector_name}</p>
	</div>

	<div class="flex h-[20%] w-[80%] justify-evenly rounded-md bg-gray-100 px-3 shadow-md">
		<div class="flex h-full items-center justify-center gap-3">
			<p class=" text-center font-bold">Standout Stocks</p>
		</div>
		<div class="h-full w-px bg-gray-300"></div>
		<div class="flex flex-col items-center py-4">
			<p>Hot Buy:</p>
			<p>Coming soon</p>
		</div>
		<div class="mx-4 h-full w-px bg-gray-300"></div>
		<div class="flex flex-col items-center py-4">
			<p>Selling:</p>
			<p>Coming soon</p>
		</div>
	</div>
</div>
