import { d as bind_props, c as pop, p as push } from "../../../chunks/index.js";
import { T as TradeList } from "../../../chunks/TradeList.js";
function _page($$payload, $$props) {
  push();
  let data = $$props["data"];
  const trades = data.trades;
  $$payload.out += `<div class="flex flex-col items-center w-full bg-gray-100 text-gray-800 px-8"><h1 class="text-3xl font-bold mt-8 mb-10">Flagged Trades</h1> <div class="py-5"><p>This system detects potential insider trading by analyzing the GICS sector of stocks traded by members of Congress and comparing them to the committees they serve on. Congressional committees oversee specific industries, 
        giving members access to non-public information that could influence stock prices. 
        If a lawmaker trades a stock in a sector that falls under their committee’s jurisdiction, the trade is flagged as a potential conflict of interest. 
        This allows for greater transparency and helps identify trades that may warrant further scrutiny.</p> <br> <p>Members of Congress have access to sensitive information through their committee work, including upcoming regulations, industry developments, and 
        government contracts. This privileged access creates opportunities for insider trading, where lawmakers could use non-public knowledge to make 
        profitable trades before the information becomes public. By monitoring these trades, this system helps highlight patterns and potential ethical 
        concerns in congressional stock activity.</p></div> `;
  TradeList($$payload, { trades });
  $$payload.out += `<!----></div>`;
  bind_props($$props, { data });
  pop();
}
export {
  _page as default
};
