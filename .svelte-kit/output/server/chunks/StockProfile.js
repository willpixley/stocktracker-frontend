import { a as attr } from "./attributes.js";
import { e as escape_html } from "./escaping.js";
import { c as pop, p as push } from "./index.js";
import { c as convertToReadableAmount, f as formatDate } from "./lib.js";
function StockProfile($$payload, $$props) {
  push();
  let { company } = $$props;
  $$payload.out += `<div class="h-full w-full rounded-2xl bg-white p-6 shadow-lg"><div class="flex justify-center"><img${attr("src", company.logo)}${attr("alt", company.name)} class="h-20 w-20 rounded-md object-contain"></div> <h2 class="mt-4 text-center text-2xl font-bold">${escape_html(company.name)}</h2> <p class="text-center text-gray-500">${escape_html(company.ticker)} - ${escape_html(company.exchange)}</p> <div class="mt-4 space-y-2"><p><strong>Industry:</strong> ${escape_html(company.finnhubIndustry)}</p> <p><strong>Market Cap:</strong> ${escape_html(convertToReadableAmount(company.marketCapitalization))}</p> <p><strong>IPO Date:</strong> ${escape_html(formatDate(company.ipo))}</p> <p><strong>Country:</strong> ${escape_html(company.country)}</p> <p><strong>Currency:</strong> ${escape_html(company.currency)}</p> <p><strong>Shares Outstanding:</strong> ${escape_html(convertToReadableAmount(company.shareOutstanding))}</p></div> <div class="mt-4 text-center"><a${attr("href", company.weburl)} target="_blank" class="text-blue-500 hover:underline">Visit Website</a></div></div>`;
  pop();
}
export {
  StockProfile as S
};
