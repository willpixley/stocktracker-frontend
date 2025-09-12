import { t as push, F as ensure_array_like, J as attr_class, G as attr, x as escape_html, v as pop, K as clsx } from './index-BOcfbo5H.js';
import { f as formatDate, g as getPctChange } from './lib-CxAu2hj2.js';

function TradeList($$payload, $$props) {
  push();
  let { trades } = $$props;
  const tableHeading = "col-span-1 text-center font-bold bg-slate-800 text-slate-200 rounded-xl mx-2 py-2";
  const each_array = ensure_array_like(trades);
  $$payload.out.push(`<div class="flex h-full w-full flex-col items-center bg-inherit px-8 text-gray-800"><div class="grid w-full grid-cols-8 pb-20"><p${attr_class(clsx(tableHeading))}>Stock</p> <p${attr_class(clsx(tableHeading))}>Member</p> <p${attr_class(clsx(tableHeading))}>Type</p> <p${attr_class(clsx(tableHeading))}>Amount</p> <p${attr_class(clsx(tableHeading))}>Date</p> <p${attr_class(clsx(tableHeading))}>Traded By</p> <p${attr_class(clsx(tableHeading))}>Performance</p> <p${attr_class(clsx(tableHeading))}>More</p> <!--[-->`);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let trade = each_array[$$index];
    $$payload.out.push(`<div class="col-span-8 my-2 grid grid-cols-8 rounded-md bg-gray-200 py-3 shadow-md"><a${attr("href", `/stocks/${trade.stock__ticker}`)} class="col-span-1 flex items-center justify-center text-center text-blue-600 hover:underline">${escape_html(trade.stock__ticker)}</a> <a${attr("href", `/members/${trade.member__bio_guide_id}`)} class="col-span-1 flex items-center justify-center text-center text-blue-600 hover:underline">${escape_html(trade.member__first_name)} ${escape_html(trade.member__last_name)} | ${escape_html(trade.member__party)}</a> <p class="col-span-1 flex items-center justify-center text-center">${escape_html(trade.type == "b" ? "Buy" : "Sell")}</p> <p class="col-span-1 flex items-center justify-center text-center">~$${escape_html(trade.amount.toLocaleString())}</p> <p class="col-span-1 flex items-center justify-center text-center">${escape_html(formatDate(trade.date))}</p> <p class="col-span-1 flex items-center justify-center text-center">${escape_html(trade.traded_by)}</p> <p${attr_class(`col-span-1 flex items-center justify-center rounded-lg text-center ${getPctChange(trade.price_at_trade, trade.current_price) > 0 && trade.type == "b" || getPctChange(trade.price_at_trade, trade.current_price) < 0 && trade.type == "s" ? "bg-green-500" : "bg-red-500"}`)}>${escape_html(getPctChange(trade.price_at_trade, trade.current_price) > 0 ? "+" : "")}${escape_html(getPctChange(trade.price_at_trade, trade.current_price).toFixed(1))}%</p> <a class="col-span-1 flex items-center justify-center text-center text-blue-600 hover:underline"${attr("href", `/trades/${trade.id}`)}>More</a></div>`);
  }
  $$payload.out.push(`<!--]--></div></div>`);
  pop();
}
function MobileTradeList($$payload, $$props) {
  push();
  let { trades } = $$props;
  const each_array = ensure_array_like(trades);
  $$payload.out.push(`<div class="flex w-full flex-col space-y-4 px-4 sm:px-8"><!--[-->`);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let trade = each_array[$$index];
    $$payload.out.push(`<div class="flex flex-col rounded-lg bg-gray-200 p-4 shadow-md"><div class="mb-2 flex items-center justify-between"><a${attr("href", `/stocks/${trade.stock__ticker}`)} class="text-lg font-bold text-blue-600 hover:underline">${escape_html(trade.stock__ticker)}</a> <a${attr("href", `/members/${trade.member__bio_guide_id}`)} class="text-sm text-blue-600 hover:underline">${escape_html(trade.member__first_name)} ${escape_html(trade.member__last_name)} | ${escape_html(trade.member__party)}</a></div> <div class="grid grid-cols-2 gap-2 text-sm"><p><span class="font-semibold">Type:</span> ${escape_html(trade.type == "b" ? "Buy" : "Sell")}</p> <p><span class="font-semibold">Amount:</span> ~$${escape_html(trade.amount.toLocaleString())}</p> <p><span class="font-semibold">Date:</span> ${escape_html(formatDate(trade.date))}</p> <p><span class="font-semibold">Traded By:</span> ${escape_html(trade.traded_by)}</p> <p class="col-span-2"><span class="font-semibold">Performance:</span> <span${attr_class(`rounded-lg px-2 py-1 text-white ${getPctChange(trade.price_at_trade, trade.current_price) > 0 && trade.type == "b" || getPctChange(trade.price_at_trade, trade.current_price) < 0 && trade.type == "s" ? "bg-green-500" : "bg-red-500"}`)}>${escape_html(getPctChange(trade.price_at_trade, trade.current_price) > 0 ? "+" : "")}${escape_html(getPctChange(trade.price_at_trade, trade.current_price).toFixed(1))}%</span></p> <a${attr("href", `/trades/${trade.id}`)} class="col-span-2 mt-2 text-center text-blue-600 hover:underline">More Details</a></div></div>`);
  }
  $$payload.out.push(`<!--]--></div>`);
  pop();
}

export { MobileTradeList as M, TradeList as T };
//# sourceMappingURL=MobileTradeList-bTsWewQF.js.map
