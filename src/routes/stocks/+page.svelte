<script lang='ts'>
    import axios from "axios";
    interface StockResponse {
        ticker: string;
        name: string;
        sector: number;
    }

    let results = $state<StockResponse[]>([])
    let loading = $state(false)
    let query = $state('')

    async function searchStocks(){
        query = query.trim()
        console.log(query)
        if (query != ''){
            const response = await axios.get('http://127.0.0.1:8000/stock', {
                params: {
                    search: query
                }
            })
            results = response.data.data
            console.log("Results", results)
        }
        
    }
    function handleKeyDown(event:any) {
    if (event.key === "Enter") {
      searchStocks()
    }
  }
</script>


<main class="flex flex-col items-center min-h-screen bg-gray-100 p-6">
  <h1 class="text-3xl font-bold text-center mb-6 text-gray-800">Search Page</h1>

  <!-- Search Form -->
  <div class="flex space-x-2 w-full max-w-md">
    <!-- Search Input -->
    <input
      type="text"
      placeholder="Search by company name"
      onkeydown={handleKeyDown}
      bind:value={query}
      class="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
    />
    
    <!-- Search Button -->
    <button
      class="p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        onclick={searchStocks}
      >
      Search
    </button>
  </div>

  <!-- Results -->
  {#if results.length > 0}
    <div class="w-full flex flex-col items-center">
      {#each results as result}
        <a href={`/stocks/${result.ticker}`} class="w-full items-center flex flex-col">
        <div  class="w-[50%] h-20 bg-white shadow-lg rounded-lg my-5 p-3 flex justify-between items-center">
            <p><strong>{result.ticker}</strong></p>
            <p>{result.name}</p>
        </div>
        </a>
    
      {/each}
    </div>
  {/if}
</main>
<style>
  main {
    min-height: 100%; /* Ensures the background is applied to the full height */
  }
</style>