import { e as ensure_array_like, c as pop, p as push } from "../../../chunks/index.js";
import { a as attr } from "../../../chunks/attributes.js";
import { e as escape_html } from "../../../chunks/escaping.js";
function _page($$payload, $$props) {
  push();
  let members = null;
  {
    $$payload.out += "<!--[!-->";
    const each_array = ensure_array_like(members);
    $$payload.out += `<div class="flex w-full flex-col items-center bg-gray-100"><h1 class="my-8 text-2xl font-bold">Members by Returns</h1> <div class="my-2 grid w-[80%] grid-cols-3 items-center rounded-md border-2 border-gray-300 bg-white p-2 font-bold"><p class="col-span-1 text-center">Name | Party</p> <p class="col-span-1 text-center">Trade Volume</p> <p class="col-span-1 text-center">Weighted Return</p></div> <!--[-->`;
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let member = each_array[$$index];
      $$payload.out += `<div class="my-2 grid w-[80%] grid-cols-3 items-center justify-center rounded-md border-2 border-gray-300 bg-white p-2"><a class="col-span-1 text-center text-blue-600 underline"${attr("href", `/members/${member.member.bio_guide_id}`)}>${escape_html(member.member.first_name)} ${escape_html(member.member.last_name)} | ${escape_html(member.member.party)}</a> <p class="col-span-1 text-center">$${escape_html(member.volume.toLocaleString())}</p> <p class="col-span-1 text-center">${escape_html(Number(member.weighted_return).toFixed(2))}%</p></div>`;
    }
    $$payload.out += `<!--]--></div>`;
  }
  $$payload.out += `<!--]-->`;
  pop();
}
export {
  _page as default
};
