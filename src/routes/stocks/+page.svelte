<script lang="ts">
	import axios from 'axios';
	interface StockResponse {
		ticker: string;
		name: string;
		sector: number;
	}
	const BASE_URL = import.meta.env.VITE_BACKEND_API_URL;

	let results = $state<StockResponse[]>([]);
	let loading = $state(false);
	let query = $state('');

	async function searchStocks() {
		query = query.trim();
		console.log(query);
		if (query != '') {
			const response = await axios.get(`${BASE_URL}/stock`, {
				params: {
					search: query
				}
			});
			results = response.data.data;
			console.log('Results', results);
		}
	}
	function handleKeyDown(event: any) {
		if (event.key === 'Enter') {
			searchStocks();
		}
	}
</script>

<main class="flex min-h-screen flex-col items-center bg-gray-100 p-6">
	<h1 class="mb-6 text-center text-3xl font-bold text-gray-800">Search Page</h1>

	<!-- Search Form -->
	<div class="flex w-full max-w-md space-x-2">
		<!-- Search Input -->
		<input
			type="text"
			placeholder="Search by company name"
			onkeydown={handleKeyDown}
			bind:value={query}
			class="w-full rounded-md border border-gray-300 p-3 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
		/>

		<!-- Search Button -->
		<button
			class="rounded-md bg-blue-500 p-3 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
			onclick={searchStocks}
		>
			Search
		</button>
	</div>

	<!-- Results -->
	{#if results.length > 0}
		<div class="flex w-full flex-col items-center">
			{#each results as result}
				<a href={`/stocks/${result.ticker}`} class="flex w-full flex-col items-center">
					<div
						class="my-5 flex h-20 w-[50%] items-center justify-between rounded-lg bg-white p-3 shadow-lg"
					>
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
