import { F as attr, z as ensure_array_like, x as escape_html, v as pop, t as push } from "../../../chunks/index.js";
function _page($$payload, $$props) {
  push();
  let results = [];
  let query = "";
  $$payload.out.push(`<main class="flex min-h-screen flex-col items-center bg-gray-100 p-6 svelte-1d0y2pg"><h1 class="mb-6 text-center text-3xl font-bold text-gray-800">Search Page</h1> <div class="flex w-full max-w-md space-x-2"><input type="text" placeholder="Search by company name"${attr("value", query)} class="w-full rounded-md border border-gray-300 p-3 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/> <button class="rounded-md bg-blue-500 p-3 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Search</button></div> `);
  if (results.length > 0) {
    $$payload.out.push("<!--[-->");
    const each_array = ensure_array_like(results);
    $$payload.out.push(`<div class="flex w-full flex-col items-center"><!--[-->`);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let result = each_array[$$index];
      $$payload.out.push(`<a${attr("href", `/stocks/${result.ticker}`)} class="flex w-full flex-col items-center"><div class="my-5 flex h-20 w-[50%] items-center justify-between rounded-lg bg-white p-3 shadow-lg"><p><strong>${escape_html(result.ticker)}</strong></p> <p>${escape_html(result.name)}</p></div></a>`);
    }
    $$payload.out.push(`<!--]--></div>`);
  } else {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]--></main>`);
  pop();
}
export {
  _page as default
};
