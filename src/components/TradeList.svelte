<script lang='ts'>
    import {convertToReadableAmount, formatDate, getPctChange} from '../utils/lib'
    let {trades} = $props()
    const tableHeading = "col-span-1 text-center font-bold bg-slate-800 text-slate-200 rounded-xl mx-2 py-2"
</script>

<div class='flex flex-col items-center w-full h-full bg-inherit text-gray-800 px-8'>


    <div class="w-full grid grid-cols-8 pb-20">
    <p class={tableHeading}>Stock</p>
    <p class={tableHeading}>Member</p>
    <p class={tableHeading}>Type</p>
    <p class={tableHeading}>Amount</p>
    <p class={tableHeading}>Date</p>
    <p class={tableHeading}>Traded By</p>
    <p class={tableHeading}>Performance</p>
    <p class={tableHeading}>More</p>

    {#each trades as trade}
    <div class="grid grid-cols-8 col-span-8 my-2 bg-gray-200 shadow-md rounded-md py-3">
    
        <a href={`/stocks/${trade.stock__ticker}`} class="col-span-1 text-center text-blue-600 hover:underline">{trade.stock__ticker}</a>
        <p class="col-span-1 text-center">{trade.member__first_name} {trade.member__last_name} </p>
        <p class="col-span-1 text-center">{trade.type == 'B' ? 'Buy' : 'Sell'}</p>
        <p class="col-span-1 text-center">~${trade.amount.toLocaleString()}</p>
        <p class="col-span-1 text-center">{formatDate(trade.date)}</p>
        <p class="col-span-1 text-center">{trade.traded_by}</p>
        <p class={`col-span-1 text-center rounded-lg ${(getPctChange(trade.price_at_trade, trade.current_price) > 0 && trade.type == 'B') || (getPctChange(trade.price_at_trade, trade.current_price) < 0 && trade.type == 'S') ? 'bg-green-500':'bg-red-500'}`}>{getPctChange(trade.price_at_trade, trade.current_price) > 0 ? '+':''}{getPctChange(trade.price_at_trade, trade.current_price).toFixed(1)}%</p>
        <a class="col-span-1 text-center text-blue-600 hover:underline" href={`/trades/${trade.id}`}>More</a>
    </div>
  {/each}
  </div>

</div>