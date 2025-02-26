import { d as bind_props, c as pop, p as push } from '../../../../chunks/index.js';
import { S as StockProfile } from '../../../../chunks/StockProfile.js';
import { f as formatDate } from '../../../../chunks/lib.js';
import { a as attr } from '../../../../chunks/attributes.js';
import { e as escape_html } from '../../../../chunks/escaping.js';
function _page($$payload, $$props) {
	push();
	let data = $$props['data'];
	const { trade, stock, member } = data;
	$$payload.out += `<div class="bg-gray-100 flex w-full h-full p-6 justify-evenly pt-[5%]"><div class="w-[30%] h-fit">`;
	StockProfile($$payload, { company: stock });
	$$payload.out += `<!----></div> <div class="bg-white shadow-lg rounded-2xl p-6 flex w-[60%] h-fit items-center"><div class="p-5 border-2 rounded-md border-gray-100 h-full mr-5 w-fit"><div class="relative w-32 h-32 overflow-hidden rounded-full"><img${attr('src', member.depiction.imageUrl)}${attr('alt', member.directOrderName)} class="object-top object-cover w-full h-full"></div> <p class="text-xl font-bold text-center">${escape_html(member.directOrderName)}</p> <p class="text-md font-semibold text-gray-500 text-center">${escape_html(trade.member.party)} | ${escape_html(member.state)}</p></div> <div class="w-full h-full mr-10 p-5 border-2 rounded-md border-gray-100 flex justify-between"><div><p class="font-bold text-center">Ticker</p> <p class="text-center">${escape_html(trade.stock.ticker)}</p></div> <div><p class="font-bold text-center">Sector</p> <p class="text-center">${escape_html(trade.sector.sector_name)}</p></div> <div><p class="font-bold text-center">Type</p> <p class="text-center">${escape_html(trade.type == 'B' ? 'Buy' : 'Sell')}</p></div> <div><p class="font-bold text-center">Amount</p> <p class="text-center">$${escape_html(trade.amount.toLocaleString())}</p></div> <div><p class="font-bold text-center">Bought At</p> <p class="text-center">$${escape_html(trade.price_at_trade.toLocaleString())}</p></div> <div><p class="font-bold text-center">Current Price</p> <p class="text-center">$${escape_html(trade.current_price.toLocaleString())}</p></div> <div><p class="font-bold text-center">Date</p> <p class="text-center">${escape_html(formatDate(trade.date))}</p></div> <div><p class="font-bold text-center">Traded By</p> <p class="text-center">${escape_html(trade.traded_by)}</p></div></div></div></div>`;
	bind_props($$props, { data });
	pop();
}
export { _page as default };
