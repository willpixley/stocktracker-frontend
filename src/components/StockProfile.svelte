<script lang='ts'>
    import {convertToReadableAmount, formatDate} from '../utils/lib'
    let {company} = $props()
</script>
<div class="bg-white shadow-lg rounded-2xl  h-full w-full p-6">
    <div class="flex justify-center">
      <img src={company.logo} alt={company.name} class="h-20 w-20 object-contain rounded-md" />
    </div>
    <h2 class="text-2xl font-bold text-center mt-4">{company.name}</h2>
    <p class="text-gray-500 text-center">{company.ticker} - {company.exchange}</p>
    <div class="mt-4 space-y-2">
      <p><strong>Industry:</strong> {company.finnhubIndustry}</p>
      <p><strong>Market Cap:</strong> {convertToReadableAmount(company.marketCapitalization)}</p>
      <p><strong>IPO Date:</strong> {formatDate(company.ipo)}</p>
      <p><strong>Country:</strong> {company.country}</p>
      <p><strong>Currency:</strong> {company.currency}</p>
      <p><strong>Shares Outstanding:</strong> {convertToReadableAmount(company.shareOutstanding)}</p>
    </div>
    <div class="mt-4 text-center">
      <a href={company.weburl} target="_blank" class="text-blue-500 hover:underline">Visit Website</a>
    </div>
</div>