import { e as ensure_array_like, d as bind_props, c as pop, p as push } from "../../../../chunks/index.js";
import { S as StockProfile } from "../../../../chunks/StockProfile.js";
import { a as attr } from "../../../../chunks/attributes.js";
import { e as escape_html } from "../../../../chunks/escaping.js";
function _page($$payload, $$props) {
  push();
  let data = $$props["data"];
  const { company, news } = data;
  const each_array = ensure_array_like(news);
  $$payload.out += `<div class="grid h-full w-full grid-cols-5 items-center justify-center gap-5 bg-gray-100 p-4">`;
  StockProfile($$payload, { company });
  $$payload.out += `<!----> <!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let article = each_array[$$index];
    $$payload.out += `<div class="col-span-1 h-full w-full rounded-2xl bg-white p-4 shadow-lg"><a${attr("href", article.url)} target="_blank" class="block"><h2 class="text-lg font-bold text-blue-600">${escape_html(article.headline)}</h2></a> <p class="text-sm text-gray-500">${escape_html(new Date(article.datetime * 1e3).toLocaleDateString())}</p> <p class="mt-2 text-gray-700">${escape_html(article.summary)}</p> <div class="mt-4"><img${attr("src", article.image)} alt="News" class="h-auto w-full rounded-md"></div> <p class="mt-2 text-sm text-gray-600">Source: ${escape_html(article.source)}</p></div>`;
  }
  $$payload.out += `<!--]--></div>`;
  bind_props($$props, { data });
  pop();
}
export {
  _page as default
};
