<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<div class="">
	<nav
		class="flex h-20 w-full items-center justify-end gap-5 border-b-2 border-slate-900 bg-slate-800 pr-5 text-slate-300 shadow-lg"
	>
		<a href="/">Home</a>
		<a href="/trades">Trades</a>
		<a href="/stocks">Stocks</a>
		<a href="/about">About</a>
	</nav>
</div>
{@render children()}
