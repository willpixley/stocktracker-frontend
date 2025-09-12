import { z as ensure_array_like, F as attr, x as escape_html, G as attr_class, y as bind_props, v as pop, t as push } from "../../../../chunks/index.js";
import { g as getPctChange, f as formatDate } from "../../../../chunks/lib.js";
function _page($$payload, $$props) {
  push();
  let data = $$props["data"];
  const { trades, member, history } = data;
  const each_array = ensure_array_like([
    {
      label: "Total Trade Volume",
      value: `~${history.volume.toLocaleString()}`
    },
    { label: "Purchases", value: history.purchases },
    { label: "Sales", value: history.sales },
    {
      label: "Weighted Returns",
      value: `${Number(history.weighted_return).toFixed(2)}%`
    },
    {
      label: "Weighted Returns (Flagged)",
      value: Number(history.weighted_flagged_return) === 0 ? "N/A" : `${Number(history.weighted_flagged_return).toFixed(2)}%`
    }
  ]);
  $$payload.out.push(`<div class="w-full bg-gray-100 px-4 sm:px-8"><div class="my-8 flex flex-col gap-4 rounded-2xl bg-white p-4 shadow-lg md:flex-row md:items-stretch md:justify-between md:p-6"><div class="flex flex-1 flex-col items-center rounded-md border-2 border-gray-100 p-4"><div class="relative h-32 w-32 overflow-hidden rounded-full"><img${attr("src", member.depiction.imageUrl)}${attr("alt", member.directOrderName)} class="h-full w-full object-cover object-top"/></div> <p class="mt-2 text-center text-xl font-bold">${escape_html(member.directOrderName)}</p> <p class="text-center font-semibold text-gray-500">${escape_html(member.partyHistory.at(-1).partyAbbreviation)} | ${escape_html(member.state)}</p></div> <div class="grid w-full grid-cols-2 gap-4 md:flex md:flex-1 md:gap-5"><!--[-->`);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let stat = each_array[$$index];
    $$payload.out.push(`<div class="flex flex-1 flex-col items-center justify-center gap-2 rounded-md border-2 border-gray-100 bg-gray-50 p-3"><p class="text-center text-sm font-bold sm:text-base">${escape_html(stat.label)}</p> <p class="text-center text-sm sm:text-base">${escape_html(stat.value)}</p></div>`);
  }
  $$payload.out.push(`<!--]--></div></div> `);
  if (trades?.length) {
    $$payload.out.push("<!--[-->");
    const each_array_1 = ensure_array_like(trades);
    const each_array_2 = ensure_array_like(trades);
    $$payload.out.push(`<div class="flex w-full flex-col items-center pb-10 text-gray-800"><h1 class="mb-4 text-center text-3xl font-bold">All Trades</h1> <div class="flex w-full flex-col gap-3 md:hidden"><!--[-->`);
    for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
      let trade = each_array_1[$$index_1];
      $$payload.out.push(`<div${attr_class(`flex flex-col rounded-lg  p-4 shadow-md ${trade.flagged ? "bg-red-300" : "bg-gray-200"}`)}><div class="mb-2 flex items-center justify-between"><a${attr("href", `/stocks/${trade.stock.ticker}`)} class="font-bold text-blue-600 hover:underline">${escape_html(trade.stock.ticker)}</a> <p${attr_class(`rounded-lg px-2 py-1 text-sm text-white ${getPctChange(trade.price_at_trade, trade.current_price) > 0 && trade.type == "b" || getPctChange(trade.price_at_trade, trade.current_price) < 0 && trade.type == "s" ? "bg-green-500" : "bg-red-500"}`)}>${escape_html(getPctChange(trade.price_at_trade, trade.current_price) > 0 ? "+" : "")}${escape_html(getPctChange(trade.price_at_trade, trade.current_price).toFixed(1))}%</p></div> <p><span class="font-semibold">Type:</span> ${escape_html(trade.type == "b" ? "Buy" : "Sell")}</p> <p><span class="font-semibold">Amount:</span> ~$${escape_html(trade.amount.toLocaleString())}</p> <p><span class="font-semibold">Date:</span> ${escape_html(formatDate(trade.date))}</p> <p><span class="font-semibold">Traded By:</span> ${escape_html(trade.traded_by)}</p> <a${attr("href", `/trades/${trade.id}`)} class="mt-2 text-center text-blue-600 hover:underline">More</a></div>`);
    }
    $$payload.out.push(`<!--]--></div> <div class="hidden w-full grid-cols-7 gap-2 pb-10 md:grid"><p class="rounded-xl bg-slate-800 py-2 text-center font-bold text-slate-200">Stock</p> <p class="rounded-xl bg-slate-800 py-2 text-center font-bold text-slate-200">Type</p> <p class="rounded-xl bg-slate-800 py-2 text-center font-bold text-slate-200">Amount</p> <p class="rounded-xl bg-slate-800 py-2 text-center font-bold text-slate-200">Date</p> <p class="rounded-xl bg-slate-800 py-2 text-center font-bold text-slate-200">Traded By</p> <p class="rounded-xl bg-slate-800 py-2 text-center font-bold text-slate-200">Performance</p> <p class="rounded-xl bg-slate-800 py-2 text-center font-bold text-slate-200">More</p> <!--[-->`);
    for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
      let trade = each_array_2[$$index_2];
      $$payload.out.push(`<div class="col-span-7 grid grid-cols-7 items-center justify-center rounded-md bg-gray-200 py-3 shadow-md"><a${attr("href", `/stocks/${trade.stock.ticker}`)}${attr_class(`col-span-1 text-center text-blue-600 hover:underline ${trade.flagged ? "mx-2 bg-red-600" : ""}`)}>${escape_html(trade.stock.ticker)}</a> <p class="col-span-1 text-center">${escape_html(trade.type == "b" ? "Buy" : "Sell")}</p> <p class="col-span-1 text-center">~$${escape_html(trade.amount.toLocaleString())}</p> <p class="col-span-1 text-center">${escape_html(formatDate(trade.date))}</p> <p class="col-span-1 text-center">${escape_html(trade.traded_by)}</p> <p${attr_class(`col-span-1 rounded-lg text-center ${getPctChange(trade.price_at_trade, trade.current_price) > 0 && trade.type == "b" || getPctChange(trade.price_at_trade, trade.current_price) < 0 && trade.type == "s" ? "bg-green-500" : "bg-red-500"}`)}>${escape_html(getPctChange(trade.price_at_trade, trade.current_price) > 0 ? "+" : "")}${escape_html(getPctChange(trade.price_at_trade, trade.current_price).toFixed(1))}%</p> <a class="col-span-1 text-center text-blue-600 hover:underline"${attr("href", `/trades/${trade.id}`)}>More</a></div>`);
    }
    $$payload.out.push(`<!--]--></div></div>`);
  } else {
    $$payload.out.push("<!--[!-->");
    $$payload.out.push(`<p class="mt-4 text-center">No trades on file for this member</p>`);
  }
  $$payload.out.push(`<!--]--></div>`);
  bind_props($$props, { data });
  pop();
}
export {
  _page as default
};
