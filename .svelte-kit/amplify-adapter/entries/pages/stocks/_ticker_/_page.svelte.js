import {
	e as ensure_array_like,
	d as bind_props,
	c as pop,
	p as push
} from '../../../../chunks/index.js';
import { S as StockProfile } from '../../../../chunks/StockProfile.js';
import { a as attr } from '../../../../chunks/attributes.js';
import { e as escape_html } from '../../../../chunks/escaping.js';
function _page($$payload, $$props) {
	push();
	let data = $$props['data'];
	const { company, news } = data;
	const each_array = ensure_array_like(news);
	$$payload.out += `<div class="grid grid-cols-5 justify-center items-center w-full h-full bg-gray-100 p-4 gap-5">`;
	StockProfile($$payload, { company });
	$$payload.out += `<!----> <!--[-->`;
	for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
		let article = each_array[$$index];
		$$payload.out += `<div class="bg-white shadow-lg w-full h-full rounded-2xl p-4 col-span-1"><a${attr('href', article.url)} target="_blank" class="block"><h2 class="text-lg font-bold text-blue-600">${escape_html(article.headline)}</h2></a> <p class="text-sm text-gray-500">${escape_html(new Date(article.datetime * 1e3).toLocaleDateString())}</p> <p class="text-gray-700 mt-2">${escape_html(article.summary)}</p> <div class="mt-4"><img${attr('src', article.image)} alt="News" class="w-full h-auto rounded-md"></div> <p class="text-sm text-gray-600 mt-2">Source: ${escape_html(article.source)}</p></div>`;
	}
	$$payload.out += `<!--]--></div>`;
	bind_props($$props, { data });
	pop();
}
export { _page as default };
