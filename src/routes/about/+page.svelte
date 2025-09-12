<script lang="ts">
	const faqs: { [key: string]: string } = {
		"What does a trade's perfomance mean?":
			"The numerical performance of the trade is simply the stock price's change (in percentage) from when the trade was made to today. A trade is classified as good if either: they purchased the stock, then the price went up, or they sold the stock then price went down. The opposite is true when classifying a trade as bad.",
		'What is a weighted return percentage?': 'An average return percentage ',
		"Why is this stock's ticker highlight red": "Don't worry about it",
		'What does it mean for a trade to be flagged? ':
			"A trade is flagged for insider trading when the member trades a stock that's in the same sector as the committees they are members of."
	};
</script>

<div class="min-h-full w-full bg-gray-100 p-5">
	<div class="">
		<h1 class="w-full text-center text-3xl font-bold">FAQs</h1>
	</div>
	<div class="grid grid-cols-3 gap-3">
		{#each Object.keys(faqs) as question}
			<div
				class="col-span-1 my-3 w-full rounded-md border-2 border-gray-300 bg-white p-3 shadow-md"
			>
				<h2 class="mb-3 text-xl font-bold">{question}</h2>
				<p class="indent-4">{faqs[question]}</p>
			</div>
		{/each}
	</div>
</div>
