<script>
	const { page: initialPage = 1, total_pages = 1, onChange = () => {} } = $props();

	// local reactive state
	let page = $state(initialPage);

	function getPages() {
		const pages = [];
		const maxVisible = 3;

		if (total_pages <= maxVisible + 2) {
			return Array.from({ length: total_pages }, (_, i) => i + 1);
		}

		pages.push(1);

		if (page > maxVisible) pages.push('...');

		const start = Math.max(2, page - 1);
		const end = Math.min(total_pages - 1, page + 1);

		for (let p = start; p <= end; p++) pages.push(p);

		if (end < total_pages - 1) pages.push('...');

		pages.push(total_pages);

		return pages;
	}

	function go(p) {
		if (p === '...' || p < 1 || p > total_pages) return;
		page = p;
		onChange(p);
	}
</script>

<nav class="flex items-center gap-2">
	<button class="px-2 text-3xl font-bold" on:click={() => go(page - 1)} disabled={page === 1}>
		&lsaquo;
	</button>

	{#each getPages() as p}
		<button
			class={`${p !== '...' && 'border-b-2 '} ${page == p ? 'border-black font-bold' : 'border-gray-300'} px-2`}
			disabled={p === '...'}
			on:click={() => go(p)}
		>
			{p}
		</button>
	{/each}

	<button
		class="px-2 text-3xl font-bold"
		on:click={() => go(page + 1)}
		disabled={page === total_pages}
	>
		&rsaquo;
	</button>
</nav>
