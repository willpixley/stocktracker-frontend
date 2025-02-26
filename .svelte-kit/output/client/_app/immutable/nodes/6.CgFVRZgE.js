import { t as x, a as g } from '../chunks/OqE_2Snn.js';
import '../chunks/0PGRgBmW.js';
import { p as z, a as A, s, c as a, r as t, t as B, n as C, o as r } from '../chunks/Ynks4hVH.js';
import { s as i } from '../chunks/Dt44hy-N.js';
import { e as E, i as F } from '../chunks/CYxyJEWj.js';
import { s as _ } from '../chunks/BeXT4T_v.js';
import { i as G } from '../chunks/-M0MwnEV.js';
import { p as H } from '../chunks/CC-f6snc.js';
import { S as I } from '../chunks/DJDqwivS.js';
var J = x(
		'<div class="bg-white shadow-lg w-full h-full rounded-2xl   p-4 col-span-1"><a target="_blank" class="block"><h2 class="text-lg font-bold text-blue-600"> </h2></a> <p class="text-sm text-gray-500"> </p> <p class="text-gray-700 mt-2"> </p> <div class="mt-4"><img alt="News" class="w-full h-auto rounded-md"></div> <p class="text-sm text-gray-600 mt-2"> </p></div>'
	),
	K = x(
		'<div class="grid grid-cols-5 justify-center items-center w-full h-full bg-gray-100 p-4 gap-5 "><!> <!></div>'
	);
function Y(h, n) {
	z(n, !1);
	let b = H(n, 'data', 8);
	const { company: w, news: y } = b();
	G();
	var l = K(),
		c = a(l);
	I(c, { company: w });
	var S = s(c, 2);
	E(
		S,
		1,
		() => y,
		F,
		(k, e) => {
			var p = J(),
				o = a(p),
				f = a(o),
				D = a(f, !0);
			t(f), t(o);
			var m = s(o, 2),
				j = a(m, !0);
			t(m);
			var d = s(m, 2),
				q = a(d, !0);
			t(d);
			var v = s(d, 2),
				L = a(v);
			t(v);
			var u = s(v, 2),
				N = a(u);
			t(u),
				t(p),
				B(
					(P) => {
						_(o, 'href', r(e).url),
							i(D, r(e).headline),
							i(j, P),
							i(q, r(e).summary),
							_(L, 'src', r(e).image),
							i(N, `Source: ${r(e).source ?? ''}`);
					},
					[() => new Date(r(e).datetime * 1e3).toLocaleDateString()],
					C
				),
				g(k, p);
		}
	),
		t(l),
		g(h, l),
		A();
}
export { Y as component };
