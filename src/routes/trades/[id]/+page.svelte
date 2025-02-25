<script lang='ts'>
  import StockProfile from "../../../components/StockProfile.svelte";
  import {formatDate} from '../../../utils/lib'
    let regionNames = new Intl.DisplayNames(['en'], {type: 'region'});
    
    

    export let data : any;
    const {trade, stock, member} = data
    
</script>
<div class="bg-gray-100 flex  w-full h-full p-6 justify-evenly pt-[5%]">
    <div class="w-[30%] h-fit">
      <StockProfile company={stock}/>
    </div>


  <div class="bg-white shadow-lg rounded-2xl p-6 flex w-[60%] h-fit items-center">
    <div class="p-5 border-2 rounded-md border-gray-100 h-full mr-5 w-fit">
        <div class="relative w-32 h-32 overflow-hidden rounded-full ">
        <img src="{member.depiction.imageUrl}" alt="{member.directOrderName}" class="object-top object-cover w-full h-full">
        </div>
        <p class="text-xl font-bold text-center">{member.directOrderName}</p>
        <p class="text-md font-semibold text-gray-500 text-center">{trade.member.party} | {member.state}</p>
    </div>
    <div class="w-full h-full mr-10 p-5 border-2 rounded-md border-gray-100 flex justify-between">
        <div>
            <p class="font-bold text-center">Ticker</p>
            <p class="text-center">{trade.stock.ticker}</p>
        </div>
        <div>
            <p class="font-bold text-center">Sector</p>
            <p class="text-center">{trade.sector.sector_name}</p>
        </div>
        <div>
            <p class="font-bold text-center ">Type</p>
            <p class="text-center">{trade.type == 'B' ? 'Buy' : 'Sell'}</p>
        </div>
        
        <div>
            <p class="font-bold text-center">Amount</p>
            <p class="text-center">${trade.amount.toLocaleString()}</p>
        </div>
        <div>
            <p class="font-bold text-center">Bought At</p>
            <p class="text-center">${trade.price_at_trade.toLocaleString()}</p>
        </div>
        <div>
            <p class="font-bold text-center">Current Price</p>
            <p class="text-center">${trade.current_price.toLocaleString()}</p>
        </div>
        <div>
            <p class="font-bold text-center">Date</p>
            <p class="text-center">{formatDate(trade.date)}</p>
        </div>
        <div>
            <p class="font-bold text-center">Traded By</p>
            <p class="text-center">{trade.traded_by}</p>
        </div>

    </div>
  </div>
</div>


