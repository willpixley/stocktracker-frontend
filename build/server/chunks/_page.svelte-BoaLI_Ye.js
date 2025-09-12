import { t as push, G as attr, x as escape_html, z as bind_props, v as pop } from './index-BOcfbo5H.js';
import { S as StockProfile } from './StockProfile-BSFzz-fm.js';
import { f as formatDate } from './lib-CxAu2hj2.js';

function _page($$payload, $$props) {
  push();
  let data = $$props["data"];
  const { trade, stock, member } = data;
  $$payload.out.push(`<div class="flex h-full w-full justify-evenly bg-gray-100 p-6 pt-[5%]"><div class="h-[70%] w-[30%]">`);
  StockProfile($$payload, { company: stock });
  $$payload.out.push(`<!----></div> <div class="flex h-[70%] w-[60%] items-center rounded-2xl bg-white p-6 shadow-lg"><div class="mr-5 flex h-full w-fit flex-col items-center justify-center gap-[10%] rounded-md border-2 border-gray-100 p-5"><div class="relative h-32 w-32 overflow-hidden rounded-full"><img${attr("src", member.depiction.imageUrl)}${attr("alt", member.directOrderName)} class="h-full w-full object-cover object-top"/></div> <div><p class="text-center text-xl font-bold">${escape_html(member.directOrderName)}</p> <p class="text-md text-center font-semibold text-gray-500">${escape_html(trade.member.party)} | ${escape_html(member.state)}</p></div></div> <div class="grid h-full w-full grid-cols-4 grid-rows-2 rounded-md border-2 border-gray-100 p-5"><div class="col-span-1 row-span-1 flex flex-col items-center justify-center gap-2"><p class="text-center font-bold">Ticker</p> <p class="text-center">${escape_html(trade.stock.ticker)}</p></div> <div class="col-span-1 row-span-1 flex flex-col items-center justify-center gap-2"><p class="text-center font-bold">Sector</p> <p class="text-center">${escape_html(trade.sector.sector_name)}</p></div> <div class="col-span-1 row-span-1 flex flex-col items-center justify-center gap-2"><p class="text-center font-bold">Type</p> <p class="text-center">${escape_html(trade.type == "B" ? "Buy" : "Sell")}</p></div> <div class="col-span-1 row-span-1 flex flex-col items-center justify-center gap-2"><p class="text-center font-bold">Amount</p> <p class="text-center">$${escape_html(trade.amount.toLocaleString())}</p></div> <div class="col-span-1 row-span-1 flex flex-col items-center justify-center gap-2"><p class="text-center font-bold">Bought At</p> <p class="text-center">$${escape_html(trade.price_at_trade.toLocaleString())}</p></div> <div class="col-span-1 row-span-1 flex flex-col items-center justify-center gap-2"><p class="text-center font-bold">Current Price</p> <p class="text-center">$${escape_html(trade.current_price.toLocaleString())}</p> <p class="absolute pt-[5%] text-center text-xs italic text-gray-600">${escape_html(`Updated on ${formatDate(trade.updated_at)}`)}</p></div> <div class="col-span-1 row-span-1 flex flex-col items-center justify-center gap-2"><p class="text-center font-bold">Date</p> <p class="text-center">${escape_html(formatDate(trade.date))}</p></div> <div class="col-span-1 row-span-1 flex flex-col items-center justify-center gap-2"><p class="text-center font-bold">Traded By</p> <p class="text-center">${escape_html(trade.traded_by)}</p></div></div></div></div>`);
  bind_props($$props, { data });
  pop();
}

export { _page as default };
//# sourceMappingURL=_page.svelte-BoaLI_Ye.js.map
