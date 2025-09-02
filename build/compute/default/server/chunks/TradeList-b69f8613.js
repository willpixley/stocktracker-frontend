import { e as ensure_array_like, c as pop, p as push } from './index-26b49bda.js';
import { f as formatDate, g as getPctChange } from './lib-158d996e.js';
import { a as attr, c as clsx } from './attributes-d6d8e872.js';
import { e as escape_html } from './escaping-50f17e07.js';

function TradeList($$payload, $$props) {
  push();
  let { trades } = $$props;
  const tableHeading = "col-span-1 text-center font-bold bg-slate-800 text-slate-200 rounded-xl mx-2 py-2";
  const each_array = ensure_array_like(trades);
  $$payload.out += `<div class="flex h-full w-full flex-col items-center bg-inherit px-8 text-gray-800"><div class="grid w-full grid-cols-8 pb-20"><p${attr("class", clsx(tableHeading))}>Stock</p> <p${attr("class", clsx(tableHeading))}>Member</p> <p${attr("class", clsx(tableHeading))}>Type</p> <p${attr("class", clsx(tableHeading))}>Amount</p> <p${attr("class", clsx(tableHeading))}>Date</p> <p${attr("class", clsx(tableHeading))}>Traded By</p> <p${attr("class", clsx(tableHeading))}>Performance</p> <p${attr("class", clsx(tableHeading))}>More</p> <!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let trade = each_array[$$index];
    $$payload.out += `<div class="col-span-8 my-2 grid grid-cols-8 rounded-md bg-gray-200 py-3 shadow-md"><a${attr("href", `/stocks/${trade.stock__ticker}`)} class="col-span-1 text-center text-blue-600 hover:underline">${escape_html(trade.stock__ticker)}</a> <a${attr("href", `/members/${trade.member__bio_guide_id}`)} class="col-span-1 text-center text-blue-600 hover:underline">${escape_html(trade.member__first_name)} ${escape_html(trade.member__last_name)} | ${escape_html(trade.member__party)}</a> <p class="col-span-1 text-center">${escape_html(trade.type == "b" ? "Buy" : "Sell")}</p> <p class="col-span-1 text-center">~$${escape_html(trade.amount.toLocaleString())}</p> <p class="col-span-1 text-center">${escape_html(formatDate(trade.date))}</p> <p class="col-span-1 text-center">${escape_html(trade.traded_by)}</p> <p${attr("class", `col-span-1 rounded-lg text-center ${getPctChange(trade.price_at_trade, trade.current_price) > 0 && trade.type == "b" || getPctChange(trade.price_at_trade, trade.current_price) < 0 && trade.type == "s" ? "bg-green-500" : "bg-red-500"}`)}>${escape_html(getPctChange(trade.price_at_trade, trade.current_price) > 0 ? "+" : "")}${escape_html(getPctChange(trade.price_at_trade, trade.current_price).toFixed(1))}%</p> <a class="col-span-1 text-center text-blue-600 hover:underline"${attr("href", `/trades/${trade.id}`)}>More</a></div>`;
  }
  $$payload.out += `<!--]--></div></div>`;
  pop();
}

export { TradeList as T };
//# sourceMappingURL=TradeList-b69f8613.js.map
