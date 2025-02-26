import { d as bind_props, c as pop, p as push } from "../../chunks/index.js";
import { T as TradeList } from "../../chunks/TradeList.js";
function _page($$payload, $$props) {
  push();
  let data = $$props["data"];
  const trades = data.trades;
  $$payload.out += `<div class="flex flex-col justify-center w-full bg-gray-100"><h1 class="text-3xl font-bold mt-8 mb-20 text-center">Recent Trades</h1> `;
  TradeList($$payload, { trades });
  $$payload.out += `<!----></div>`;
  bind_props($$props, { data });
  pop();
}
export {
  _page as default
};
