import { t as M, a as R } from './OqE_2Snn.js';
import { p as T, t as V, a as W, s as t, c as e, r } from './Ynks4hVH.js';
import { s as n } from './Dt44hy-N.js';
import { s as u } from './BeXT4T_v.js';
import { c as f, f as q } from './CP9ULRdw.js';
var B = M(
	'<div class="bg-white shadow-lg rounded-2xl  h-full w-full p-6"><div class="flex justify-center"><img class="h-20 w-20 object-contain rounded-md"></div> <h2 class="text-2xl font-bold text-center mt-4"> </h2> <p class="text-gray-500 text-center"> </p> <div class="mt-4 space-y-2"><p><strong>Industry:</strong> </p> <p><strong>Market Cap:</strong> </p> <p><strong>IPO Date:</strong> </p> <p><strong>Country:</strong> </p> <p><strong>Currency:</strong> </p> <p><strong>Shares Outstanding:</strong> </p></div> <div class="mt-4 text-center"><a target="_blank" class="text-blue-500 hover:underline">Visit Website</a></div></div>'
);
function K(h, a) {
	T(a, !0);
	var s = B(),
		o = e(s),
		y = e(o);
	r(o);
	var c = t(o, 2),
		b = e(c, !0);
	r(c);
	var i = t(c, 2),
		k = e(i);
	r(i);
	var v = t(i, 2),
		m = e(v),
		w = t(e(m));
	r(m);
	var l = t(m, 2),
		C = t(e(l));
	r(l);
	var p = t(l, 2),
		I = t(e(p));
	r(p);
	var d = t(p, 2),
		O = t(e(d));
	r(d);
	var g = t(d, 2),
		S = t(e(g));
	r(g);
	var x = t(g, 2),
		j = t(e(x));
	r(x), r(v);
	var _ = t(v, 2),
		D = e(_);
	r(_),
		r(s),
		V(
			(P, z, A) => {
				u(y, 'src', a.company.logo),
					u(y, 'alt', a.company.name),
					n(b, a.company.name),
					n(k, `${a.company.ticker ?? ''} - ${a.company.exchange ?? ''}`),
					n(w, ` ${a.company.finnhubIndustry ?? ''}`),
					n(C, ` ${P ?? ''}`),
					n(I, ` ${z ?? ''}`),
					n(O, ` ${a.company.country ?? ''}`),
					n(S, ` ${a.company.currency ?? ''}`),
					n(j, ` ${A ?? ''}`),
					u(D, 'href', a.company.weburl);
			},
			[
				() => f(a.company.marketCapitalization),
				() => q(a.company.ipo),
				() => f(a.company.shareOutstanding)
			]
		),
		R(h, s),
		W();
}
export { K as S };
