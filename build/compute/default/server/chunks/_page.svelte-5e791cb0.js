import { e as ensure_array_like, d as bind_props, c as pop, p as push } from './index-26b49bda.js';
import { f as formatDate, g as getPctChange } from './lib-158d996e.js';
import { a as attr, c as clsx } from './attributes-d6d8e872.js';
import { e as escape_html } from './escaping-50f17e07.js';

function _page($$payload, $$props) {
  push();
  let data = $$props["data"];
  const { trades, member, history } = data;
  const tableHeading = "col-span-1 text-center font-bold bg-slate-800 text-slate-200 rounded-xl mx-2 py-2";
  $$payload.out += `<div class="w-full bg-gray-100 px-8"><div class="my-10 flex h-auto w-full items-stretch justify-between rounded-2xl bg-white p-6 shadow-lg"><div class="mr-5 flex flex-1 flex-col items-center rounded-md border-2 border-gray-100 p-5"><div class="relative h-32 w-32 overflow-hidden rounded-full"><img${attr("src", member.depiction.imageUrl)}${attr("alt", member.directOrderName)} class="h-full w-full object-cover object-top"></div> <p class="text-center text-xl font-bold">${escape_html(member.directOrderName)}</p> <p class="text-md text-center font-semibold text-gray-500">${escape_html(member.partyHistory.at(-1).partyAbbreviation)} | ${escape_html(member.state)}</p></div> <div class="mr-5 flex flex-1 flex-col items-center rounded-md border-2 border-gray-100 p-5"><p class="text-center font-bold">Total Trade Volume</p> <p>~$${escape_html(history.volume.toLocaleString())}</p></div> <div class="mr-5 flex flex-1 flex-col items-center rounded-md border-2 border-gray-100 p-5"><p class="text-center font-bold">Purchases</p> <p>${escape_html(history.purchases)}</p></div> <div class="mr-5 flex flex-1 flex-col items-center rounded-md border-2 border-gray-100 p-5"><p class="text-center font-bold">Sales</p> <p>${escape_html(history.sales)}</p></div> <div class="mr-5 flex flex-1 flex-col items-center rounded-md border-2 border-gray-100 p-5"><p class="text-center font-bold">Weighted Returns</p> <p>${escape_html(Number(history.weighted_return).toFixed(2))}%</p></div> <div class="mr-5 flex flex-1 flex-col items-center rounded-md border-2 border-gray-100 p-5"><p class="text-center font-bold">Weighted Returns (Flagged only)</p> <p>${escape_html(Number(history.weighted_flagged_return) == 0 ? "N/A" : `${Number(history.weighted_flagged_return).toFixed(2)}%`)}</p></div></div> `;
  if (trades) {
    $$payload.out += "<!--[-->";
    const each_array = ensure_array_like(trades);
    $$payload.out += `<div class="flex w-full flex-col items-center bg-inherit text-gray-800"><div class="grid w-full grid-cols-7 pb-20"><p${attr("class", clsx(tableHeading))}>Stock</p> <p${attr("class", clsx(tableHeading))}>Type</p> <p${attr("class", clsx(tableHeading))}>Amount</p> <p${attr("class", clsx(tableHeading))}>Date</p> <p${attr("class", clsx(tableHeading))}>Traded By</p> <p${attr("class", clsx(tableHeading))}>Performance</p> <p${attr("class", clsx(tableHeading))}>More</p> <!--[-->`;
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let trade = each_array[$$index];
      $$payload.out += `<div class="col-span-7 my-2 grid grid-cols-7 items-center justify-center rounded-md bg-gray-200 py-3 shadow-md"><a${attr("href", `/stocks/${trade.stock.ticker}`)}${attr("class", `col-span-1 rounded-md text-center text-blue-600 hover:underline ${trade.flagged ? "mx-2 bg-red-600" : ""}`)}>${escape_html(trade.stock.ticker)}</a> <p class="col-span-1 text-center">${escape_html(trade.type == "b" ? "Buy" : "Sell")}</p> <p class="col-span-1 text-center">~$${escape_html(trade.amount.toLocaleString())}</p> <p class="col-span-1 text-center">${escape_html(formatDate(trade.date))}</p> <p class="col-span-1 text-center">${escape_html(trade.traded_by)}</p> <p${attr("class", `col-span-1 rounded-lg text-center ${getPctChange(trade.price_at_trade, trade.current_price) > 0 && trade.type == "b" || getPctChange(trade.price_at_trade, trade.current_price) < 0 && trade.type == "s" ? "bg-green-500" : "bg-red-500"}`)}>${escape_html(getPctChange(trade.price_at_trade, trade.current_price) > 0 ? "+" : "")}${escape_html(getPctChange(trade.price_at_trade, trade.current_price).toFixed(1))}%</p> <a class="col-span-1 text-center text-blue-600 hover:underline"${attr("href", `/trades/${trade.id}`)}>More</a></div>`;
    }
    $$payload.out += `<!--]--></div></div>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<p>No trades on file for this member</p>`;
  }
  $$payload.out += `<!--]--></div>`;
  bind_props($$props, { data });
  pop();
}

export { _page as default };
//# sourceMappingURL=_page.svelte-5e791cb0.js.map
