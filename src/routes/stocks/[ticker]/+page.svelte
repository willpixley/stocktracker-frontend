<script lang='ts'>
    import type { CompanyInfo, CompanyNews } from '../../../types/types'
    import StockProfile from '../../../components/StockProfile.svelte';
 
    export let data;
    const {company, news} = data
    function convertToReadableAmount(number: number) {
    if (number >= 1_000_000) {
      return (number / 1_000_000).toFixed(1) + " T";
    }
    else if (number >= 1_000) {
      // If the number is in billions
      return (number / 1_000).toFixed(1) + " B";
    } else if (number >= 1) {
      // If the number is in millions
      return number.toFixed(1) + " M";
    } else {
      // If the number is less than a million
      return number.toFixed(1) + " M"; // Can adjust as needed
    }
  }
</script>


<div class="grid grid-cols-5 justify-center items-center w-full h-full bg-gray-100 p-4 gap-5 ">
<StockProfile company={company}/>
    {#each news as article}
    <div class="bg-white shadow-lg w-full h-full rounded-2xl   p-4 col-span-1">
      <a href={article.url} target="_blank" class="block">
        <h2 class="text-lg font-bold text-blue-600">{article.headline}</h2>
      </a>
      <p class="text-sm text-gray-500">{new Date(article.datetime * 1000).toLocaleDateString()}</p>
      <p class="text-gray-700 mt-2">{article.summary}</p>
      <div class="mt-4">
        <img src={article.image} alt="News" class="w-full h-auto rounded-md" />
      </div>
      <p class="text-sm text-gray-600 mt-2">Source: {article.source}</p>
    </div>
  {/each}
</div>

