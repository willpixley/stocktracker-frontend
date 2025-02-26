import "clsx";
function _layout($$payload, $$props) {
  let { children } = $$props;
  $$payload.out += `<div><nav class="bg-slate-800 text-slate-300 border-b-2 border-slate-900 shadow-lg flex justify-end w-full h-20 items-center pr-5 gap-5"><a href="/">Home</a> <a href="/trades">Trades</a> <a href="/stocks">Stocks</a> <a href="/members">Members</a> <a href="/about">About</a></nav></div> `;
  children($$payload);
  $$payload.out += `<!---->`;
}
export {
  _layout as default
};
