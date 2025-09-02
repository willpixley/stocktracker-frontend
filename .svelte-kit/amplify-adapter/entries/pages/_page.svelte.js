import { d as bind_props, c as pop, p as push } from "../../chunks/index.js";
import { T as TradeList } from "../../chunks/TradeList.js";
function _page($$payload, $$props) {
  push();
  let data = $$props["data"];
  const trades = data.trades;
  console.log(trades);
  $$payload.out += `<div class="flex w-full flex-col justify-center bg-gray-100"><h1 class="mb-20 mt-8 text-center text-3xl font-bold">Recent Trades</h1> `;
  TradeList($$payload, { trades });
  $$payload.out += `<!----></div>`;
  bind_props($$props, { data });
  pop();
}
export {
  _page as default
};
