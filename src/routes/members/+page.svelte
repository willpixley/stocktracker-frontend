<script lang="ts">
	interface Member {
		bio_guide_id: string;
		first_name: string;
		middle_initial: string;
		last_name: string;
		chamber: string;
		party: string;
		state: string;
		term: number;
	}

	interface MemberData {
		volume: number;
		purchases: number;
		sales: number;
		weighted_return: number;
		weighted_flagged_return: number;
		member: Member;
	}

	interface Data {
		members: MemberData[];
	}
	export let data: Data;
	const { members } = data;
	let loading = true;

	// Set loading to false when data is available
	$: if (data) {
		loading = false;
	}
</script>

{#if loading}
	<p>Loading</p>
{:else}
	<div class="flex w-full flex-col items-center bg-gray-100">
		<h1 class="my-8 text-2xl font-bold">Members by Returns</h1>
		<div
			class="my-2 grid w-[80%] grid-cols-3 items-center rounded-md border-2 border-gray-300 bg-white p-2 font-bold"
		>
			<p class="col-span-1 text-center">Name | Party</p>
			<p class="col-span-1 text-center">Trade Volume</p>
			<p class="col-span-1 text-center">Weighted Return</p>
		</div>
		{#each members as member}
			<div
				class="my-2 grid w-[80%] grid-cols-3 items-center justify-center rounded-md border-2 border-gray-300 bg-white p-2"
			>
				<a
					class="col-span-1 text-center text-blue-600 underline"
					href={`/members/${member.member.bio_guide_id}`}
					>{member.member.first_name} {member.member.last_name} | {member.member.party}</a
				>
				<p class="col-span-1 text-center">${member.volume.toLocaleString()}</p>
				<p class="col-span-1 text-center">{Number(member.weighted_return).toFixed(2)}%</p>
			</div>
		{/each}
	</div>
{/if}
