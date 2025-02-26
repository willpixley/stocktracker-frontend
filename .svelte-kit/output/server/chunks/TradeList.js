import { e as ensure_array_like, c as pop, p as push } from "./index.js";
import { f as formatDate, g as getPctChange } from "./lib.js";
import { a as attr, c as clsx } from "./attributes.js";
import { e as escape_html } from "./escaping.js";
function TradeList($$payload, $$props) {
  push();
  let { trades } = $$props;
  const tableHeading = "col-span-1 text-center font-bold bg-slate-800 text-slate-200 rounded-xl mx-2 py-2";
  const each_array = ensure_array_like(trades);
  $$payload.out += `<div class="flex flex-col items-center w-full h-full bg-inherit text-gray-800 px-8"><div class="w-full grid grid-cols-8 pb-20"><p${attr("class", clsx(tableHeading))}>Stock</p> <p${attr("class", clsx(tableHeading))}>Member</p> <p${attr("class", clsx(tableHeading))}>Type</p> <p${attr("class", clsx(tableHeading))}>Amount</p> <p${attr("class", clsx(tableHeading))}>Date</p> <p${attr("class", clsx(tableHeading))}>Traded By</p> <p${attr("class", clsx(tableHeading))}>Performance</p> <p${attr("class", clsx(tableHeading))}>More</p> <!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let trade = each_array[$$index];
    $$payload.out += `<div class="grid grid-cols-8 col-span-8 my-2 bg-gray-200 shadow-md rounded-md py-3"><a${attr("href", `/stocks/${trade.stock__ticker}`)} class="col-span-1 text-center text-blue-600 hover:underline">${escape_html(trade.stock__ticker)}</a> <p class="col-span-1 text-center">${escape_html(trade.member__first_name)} ${escape_html(trade.member__last_name)}</p> <p class="col-span-1 text-center">${escape_html(trade.type == "B" ? "Buy" : "Sell")}</p> <p class="col-span-1 text-center">~$${escape_html(trade.amount.toLocaleString())}</p> <p class="col-span-1 text-center">${escape_html(formatDate(trade.date))}</p> <p class="col-span-1 text-center">${escape_html(trade.traded_by)}</p> <p${attr("class", `col-span-1 text-center rounded-lg ${getPctChange(trade.price_at_trade, trade.current_price) > 0 && trade.type == "B" || getPctChange(trade.price_at_trade, trade.current_price) < 0 && trade.type == "S" ? "bg-green-500" : "bg-red-500"}`)}>${escape_html(getPctChange(trade.price_at_trade, trade.current_price) > 0 ? "+" : "")}${escape_html(getPctChange(trade.price_at_trade, trade.current_price).toFixed(1))}%</p> <a class="col-span-1 text-center text-blue-600 hover:underline"${attr("href", `/trades/${trade.id}`)}>More</a></div>`;
  }
  $$payload.out += `<!--]--></div></div>`;
  pop();
}
export {
  TradeList as T
};
