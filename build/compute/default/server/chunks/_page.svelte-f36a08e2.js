import { e as ensure_array_like, c as pop, p as push } from './index-26b49bda.js';
import { a as attr } from './attributes-d6d8e872.js';
import { e as escape_html } from './escaping-50f17e07.js';

function _page($$payload, $$props) {
  push();
  let results = [];
  let query = "";
  $$payload.out += `<main class="flex min-h-screen flex-col items-center bg-gray-100 p-6 svelte-95ow6i"><h1 class="mb-6 text-center text-3xl font-bold text-gray-800">Search Page</h1> <div class="flex w-full max-w-md space-x-2"><input type="text" placeholder="Search by company name"${attr("value", query)} class="w-full rounded-md border border-gray-300 p-3 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"> <button class="rounded-md bg-blue-500 p-3 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Search</button></div> `;
  if (results.length > 0) {
    $$payload.out += "<!--[-->";
    const each_array = ensure_array_like(results);
    $$payload.out += `<div class="flex w-full flex-col items-center"><!--[-->`;
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let result = each_array[$$index];
      $$payload.out += `<a${attr("href", `/stocks/${result.ticker}`)} class="flex w-full flex-col items-center"><div class="my-5 flex h-20 w-[50%] items-center justify-between rounded-lg bg-white p-3 shadow-lg"><p><strong>${escape_html(result.ticker)}</strong></p> <p>${escape_html(result.name)}</p></div></a>`;
    }
    $$payload.out += `<!--]--></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></main>`;
  pop();
}

export { _page as default };
//# sourceMappingURL=_page.svelte-f36a08e2.js.map
