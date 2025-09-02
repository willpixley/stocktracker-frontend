import { d as bind_props, c as pop, p as push } from './index-26b49bda.js';
import { S as StockProfile } from './StockProfile-84092c8f.js';
import { f as formatDate } from './lib-158d996e.js';
import { a as attr } from './attributes-d6d8e872.js';
import { e as escape_html } from './escaping-50f17e07.js';

function _page($$payload, $$props) {
  push();
  let data = $$props["data"];
  const { trade, stock, member } = data;
  $$payload.out += `<div class="flex h-full w-full justify-evenly bg-gray-100 p-6 pt-[5%]"><div class="h-fit w-[30%]">`;
  StockProfile($$payload, { company: stock });
  $$payload.out += `<!----></div> <div class="flex h-fit w-[60%] items-center rounded-2xl bg-white p-6 shadow-lg"><div class="mr-5 h-full w-fit rounded-md border-2 border-gray-100 p-5"><div class="relative h-32 w-32 overflow-hidden rounded-full"><img${attr("src", member.depiction.imageUrl)}${attr("alt", member.directOrderName)} class="h-full w-full object-cover object-top"></div> <p class="text-center text-xl font-bold">${escape_html(member.directOrderName)}</p> <p class="text-md text-center font-semibold text-gray-500">${escape_html(trade.member.party)} | ${escape_html(member.state)}</p></div> <div class="mr-10 flex h-full w-full justify-between rounded-md border-2 border-gray-100 p-5"><div><p class="text-center font-bold">Ticker</p> <p class="text-center">${escape_html(trade.stock.ticker)}</p></div> <div><p class="text-center font-bold">Sector</p> <p class="text-center">${escape_html(trade.sector.sector_name)}</p></div> <div><p class="text-center font-bold">Type</p> <p class="text-center">${escape_html(trade.type == "B" ? "Buy" : "Sell")}</p></div> <div><p class="text-center font-bold">Amount</p> <p class="text-center">$${escape_html(trade.amount.toLocaleString())}</p></div> <div><p class="text-center font-bold">Bought At</p> <p class="text-center">$${escape_html(trade.price_at_trade.toLocaleString())}</p></div> <div><p class="text-center font-bold">Current Price</p> <p class="text-center">$${escape_html(trade.current_price.toLocaleString())}</p></div> <div><p class="text-center font-bold">Date</p> <p class="text-center">${escape_html(formatDate(trade.date))}</p></div> <div><p class="text-center font-bold">Traded By</p> <p class="text-center">${escape_html(trade.traded_by)}</p></div></div></div></div>`;
  bind_props($$props, { data });
  pop();
}

export { _page as default };
//# sourceMappingURL=_page.svelte-60a4579d.js.map
