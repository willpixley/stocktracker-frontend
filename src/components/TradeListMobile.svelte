<script lang="ts">
	import { convertToReadableAmount, formatDate, getPctChange } from '../utils/lib';

	let { trades } = $props();

	const tableHeading =
		'col-span-1 text-center font-bold text-md bg-slate-800 text-slate-200 rounded-xl mx-2 p-2 w-full items-center flex justify-center';
</script>

<div class=" flex h-full w-full flex-col items-center bg-inherit px-8 text-gray-800">
	<div class="grid w-full grid-cols-4 gap-2 pb-20">
		<p class={tableHeading}>Stock</p>
		<p class={tableHeading}>Member</p>
		<p class={tableHeading}>Type</p>
		<p class={tableHeading}>More</p>

		{#each trades as trade}
			<div
				class="col-span-4 my-2 grid grid-cols-4 items-center justify-center gap-2 rounded-md bg-gray-200 py-3 shadow-md"
			>
				<a
					href={`/stocks/${trade.stock__ticker}`}
					class="col-span-1 text-center text-blue-600 hover:underline">{trade.stock__ticker}</a
				>
				<p class="col-span-1 text-center">{trade.member__first_name} {trade.member__last_name}</p>
				<p class="col-span-1 text-center">{trade.type == 'b' ? 'Buy' : 'Sell'}</p>
				<a class="col-span-1 text-center text-blue-600 hover:underline" href={`/trades/${trade.id}`}
					>More</a
				>
			</div>
		{/each}
	</div>
</div>
