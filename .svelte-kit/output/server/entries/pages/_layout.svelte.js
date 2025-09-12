import "clsx";
function _layout($$payload, $$props) {
  let { children } = $$props;
  $$payload.out.push(`<div class="border-b-2 border-slate-900 bg-slate-800 text-slate-300 shadow-lg"><nav class="flex h-20 w-full items-center justify-between px-5"><a href="/" class="text-lg font-semibold">Home</a> <button class="flex flex-col gap-1 md:hidden" aria-label="Toggle menu"><span class="h-0.5 w-6 bg-slate-300"></span> <span class="h-0.5 w-6 bg-slate-300"></span> <span class="h-0.5 w-6 bg-slate-300"></span></button> <div class="hidden gap-5 md:flex"><a href="/trades">Trades</a> <a href="/stocks">Stocks</a> <a href="/market">Market</a> <a href="/members">Members</a> <a href="/about">About</a></div></nav> `);
  {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]--></div> `);
  children($$payload);
  $$payload.out.push(`<!---->`);
}
export {
  _layout as default
};
