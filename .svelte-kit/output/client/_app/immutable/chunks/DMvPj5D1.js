import { S as o, Q as t, a6 as c, V as u } from './Ynks4hVH.js';
function a(n) {
	throw new Error('https://svelte.dev/e/lifecycle_outside_component');
}
function r(n) {
	t === null && a(),
		c && t.l !== null
			? l(t).m.push(n)
			: o(() => {
					const e = u(n);
					if (typeof e == 'function') return e;
				});
}
function l(n) {
	var e = n.l;
	return e.u ?? (e.u = { a: [], b: [], m: [] });
}
export { r as o };
