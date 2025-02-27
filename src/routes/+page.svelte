<script lang="ts">
	import { formatDate } from '../utils/lib';
	import TradeList from '../components/TradeList.svelte';
	export let data: any;
	const trades = data.trades;
	console.log(trades);
</script>

<div class="flex w-full flex-col justify-center bg-gray-100">
	<h1 class="mb-20 mt-8 text-center text-3xl font-bold">Recent Trades</h1>
	<TradeList {trades} />
</div>
