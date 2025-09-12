import { t as push, z as bind_props, v as pop } from './index-BOcfbo5H.js';
import { T as TradeList, M as MobileTradeList } from './MobileTradeList-bTsWewQF.js';
import './lib-CxAu2hj2.js';

function _page($$payload, $$props) {
  push();
  let data = $$props["data"];
  const trades = data.trades;
  $$payload.out.push(`<div class="flex w-full flex-col justify-center bg-gray-100 px-4 sm:px-8"><h1 class="mb-8 mt-8 text-center text-3xl font-bold">Recent Trades</h1> <div class="hidden md:block">`);
  TradeList($$payload, { trades });
  $$payload.out.push(`<!----></div> <div class="block md:hidden">`);
  MobileTradeList($$payload, { trades });
  $$payload.out.push(`<!----></div></div>`);
  bind_props($$props, { data });
  pop();
}

export { _page as default };
//# sourceMappingURL=_page.svelte-BJJTgPqA.js.map
