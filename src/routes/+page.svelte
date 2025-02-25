<script lang='ts'>    
    import {formatDate} from '../utils/lib'
    import TradeList from '../components/TradeList.svelte';
    export let data:any;
    const trades = data.trades

</script>
<div class="flex flex-col justify-center w-full  bg-gray-100">
    <h1 class="text-3xl font-bold mt-8 mb-20 text-center">Recent Trades</h1>
    <TradeList trades={trades}/>
</div>