import { t as n, a as f } from '../chunks/OqE_2Snn.js';
import {
	b as i,
	E as d,
	k as l,
	aj as p,
	N as c,
	h,
	m,
	s as b,
	f as v
} from '../chunks/Ynks4hVH.js';
function u(t, s, ...a) {
	var e = t,
		o = p,
		r;
	i(() => {
		o !== (o = s()) && (r && (c(r), (r = null)), (r = l(() => o(e, ...a))));
	}, d),
		h && (e = m);
}
var g = n(
	'<div><nav class="bg-slate-800 text-slate-300 border-b-2 border-slate-900 shadow-lg flex justify-end  w-full h-20 items-center pr-5 gap-5"><a href="/">Home</a> <a href="/trades">Trades</a> <a href="/stocks">Stocks</a> <a href="/members">Members</a> <a href="/about">About</a></nav></div> <!>',
	1
);
function k(t, s) {
	var a = g(),
		e = b(v(a), 2);
	u(e, () => s.children), f(t, a);
}
export { k as component };
