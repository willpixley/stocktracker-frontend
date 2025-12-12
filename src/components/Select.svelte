<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte';

	export let options: { label: string; value: any }[] = [];
	export let placeholder: string = 'Select...';
	export let value: any = null;

	const dispatch = createEventDispatcher();
	let open = false;
	let container: HTMLDivElement;

	function toggle() {
		open = !open;
	}

	function selectOption(option) {
		value = option.value;
		open = false;
		dispatch('change', option.value);
	}

	onMount(() => {
		const handleClick = (e: Event) => {
			if (!container.contains(e.target as Node)) open = false;
		};
		document.addEventListener('click', handleClick);
		return () => document.removeEventListener('click', handleClick);
	});
</script>

<div bind:this={container} class="relative w-full">
	<!-- Input Box -->
	<div
		class="flex cursor-pointer items-center justify-between rounded-lg border bg-white px-3 py-2 shadow-sm transition hover:border-gray-400"
		on:click={toggle}
	>
		<span class="text-gray-700">
			{value ? options.find((o) => o.value === value)?.label : placeholder}
		</span>

		<svg
			class={`h-4 w-4 transition ${open ? 'rotate-180' : ''}`}
			fill="none"
			stroke="currentColor"
			viewBox="0 0 24 24"
		>
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
		</svg>
	</div>

	<!-- Dropdown -->
	{#if open}
		<div
			class="absolute z-10 mt-1 max-h-60 w-full overflow-y-auto rounded-lg border bg-white shadow-lg"
		>
			{#each options as option}
				<div
					class="cursor-pointer px-4 py-2 hover:bg-gray-100"
					on:click={() => selectOption(option)}
				>
					{option.label}
				</div>
			{/each}
		</div>
	{/if}
</div>

<style>
	/* Make dropdown scroll smooth and responsive */
	::-webkit-scrollbar {
		width: 6px;
	}
	::-webkit-scrollbar-thumb {
		background: #d1d5db;
		border-radius: 4px;
	}
</style>
