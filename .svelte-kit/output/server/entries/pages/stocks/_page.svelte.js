import { e as ensure_array_like, c as pop, p as push } from "../../../chunks/index.js";
import { a as attr } from "../../../chunks/attributes.js";
import { e as escape_html } from "../../../chunks/escaping.js";
function _page($$payload, $$props) {
  push();
  let results = [];
  let query = "";
  $$payload.out += `<main class="flex flex-col items-center min-h-screen bg-gray-100 p-6 svelte-nf3esq"><h1 class="text-3xl font-bold text-center mb-6 text-gray-800">Search Page</h1> <div class="flex space-x-2 w-full max-w-md"><input type="text" placeholder="Search by company name"${attr("value", query)} class="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"> <button class="p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Search</button></div> `;
  if (results.length > 0) {
    $$payload.out += "<!--[-->";
    const each_array = ensure_array_like(results);
    $$payload.out += `<div class="w-full flex flex-col items-center"><!--[-->`;
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let result = each_array[$$index];
      $$payload.out += `<a${attr("href", `/stocks/${result.ticker}`)} class="w-full items-center flex flex-col"><div class="w-[50%] h-20 bg-white shadow-lg rounded-lg my-5 p-3 flex justify-between items-center"><p><strong>${escape_html(result.ticker)}</strong></p> <p>${escape_html(result.name)}</p></div></a>`;
    }
    $$payload.out += `<!--]--></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></main>`;
  pop();
}
export {
  _page as default
};
