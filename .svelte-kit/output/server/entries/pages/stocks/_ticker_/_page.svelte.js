import { y as bind_props, v as pop, t as push, z as ensure_array_like, F as attr, x as escape_html } from "../../../../chunks/index.js";
import { S as StockProfile } from "../../../../chunks/StockProfile.js";
import "d3";
import { j as fallback } from "../../../../chunks/utils2.js";
function StockChart($$payload, $$props) {
  push();
  let dates = fallback($$props["dates"], () => [], true);
  let prices = fallback($$props["prices"], () => [], true);
  $$payload.out.push(`<div class="h-96 w-full rounded-lg bg-white p-4 shadow"></div>`);
  bind_props($$props, { dates, prices });
  pop();
}
function _page($$payload, $$props) {
  push();
  let data = $$props["data"];
  const { company, news, stockHistory } = data;
  const each_array = ensure_array_like(news);
  $$payload.out.push(`<div class="bg-gray-100"><div class="flex h-fit w-full justify-evenly p-4"><div class="w-[30%]">`);
  StockProfile($$payload, { company });
  $$payload.out.push(`<!----></div> <div class="h-full w-[64%] rounded-2xl bg-white p-6 shadow-lg">`);
  StockChart($$payload, { dates: stockHistory.dates, prices: stockHistory.prices });
  $$payload.out.push(`<!----></div></div> <h1 class="py-5 text-center text-3xl font-extrabold">Recent News</h1> <div class="grid h-full w-full grid-cols-5 items-center justify-center gap-5 p-4"><!--[-->`);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let article = each_array[$$index];
    $$payload.out.push(`<div class="col-span-1 h-full w-full rounded-2xl bg-white p-4 shadow-lg"><a${attr("href", article.url)} target="_blank" class="block"><h2 class="text-lg font-bold text-blue-600">${escape_html(article.headline)}</h2></a> <p class="text-sm text-gray-500">${escape_html(new Date(article.datetime * 1e3).toLocaleDateString())}</p> <p class="mt-2 text-gray-700">${escape_html(article.summary)}</p> <div class="mt-4"><img${attr("src", article.image)} alt="News" class="h-auto w-full rounded-md"/></div> <p class="mt-2 text-sm text-gray-600">Source: ${escape_html(article.source)}</p></div>`);
  }
  $$payload.out.push(`<!--]--></div></div>`);
  bind_props($$props, { data });
  pop();
}
export {
  _page as default
};
