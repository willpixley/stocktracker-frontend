var Sn = Array.isArray,
	Gt = Array.prototype.indexOf,
	Cn = Array.from,
	Nn = Object.defineProperty,
	_t = Object.getOwnPropertyDescriptor,
	Kt = Object.getOwnPropertyDescriptors,
	bn = Object.prototype,
	Pn = Array.prototype,
	Zt = Object.getPrototypeOf;
const Fn = () => {};
function qn(t) {
	return t();
}
function Et(t) {
	for (var n = 0; n < t.length; n++) t[n]();
}
const T = 2,
	wt = 4,
	at = 8,
	st = 16,
	D = 32,
	M = 64,
	U = 128,
	y = 256,
	V = 512,
	v = 1024,
	R = 2048,
	N = 4096,
	S = 8192,
	X = 16384,
	$t = 32768,
	yt = 65536,
	Ln = 1 << 17,
	zt = 1 << 19,
	gt = 1 << 20,
	ct = Symbol('$state'),
	Mn = Symbol('legacy props'),
	Yn = Symbol('');
function Tt(t) {
	return t === this.v;
}
function Wt(t, n) {
	return t != t
		? n == n
		: t !== n || (t !== null && typeof t == 'object') || typeof t == 'function';
}
function mt(t) {
	return !Wt(t, this.v);
}
function Xt(t) {
	throw new Error('https://svelte.dev/e/effect_in_teardown');
}
function Jt() {
	throw new Error('https://svelte.dev/e/effect_in_unowned_derived');
}
function Qt(t) {
	throw new Error('https://svelte.dev/e/effect_orphan');
}
function tn() {
	throw new Error('https://svelte.dev/e/effect_update_depth_exceeded');
}
function jn() {
	throw new Error('https://svelte.dev/e/hydration_failed');
}
function Hn(t) {
	throw new Error('https://svelte.dev/e/props_invalid_value');
}
function Bn() {
	throw new Error('https://svelte.dev/e/state_descriptors_fixed');
}
function Un() {
	throw new Error('https://svelte.dev/e/state_prototype_fixed');
}
function nn() {
	throw new Error('https://svelte.dev/e/state_unsafe_local_read');
}
function rn() {
	throw new Error('https://svelte.dev/e/state_unsafe_mutation');
}
let J = !1;
function Vn() {
	J = !0;
}
const Gn = 1,
	Kn = 2,
	Zn = 4,
	$n = 8,
	zn = 16,
	Wn = 1,
	Xn = 2,
	Jn = 4,
	Qn = 8,
	tr = 16,
	nr = 1,
	rr = 2,
	en = '[',
	ln = '[!',
	an = ']',
	At = {},
	er = Symbol();
function kt(t) {
	console.warn('https://svelte.dev/e/hydration_mismatch');
}
let f = null;
function vt(t) {
	f = t;
}
function lr(t, n = !1, r) {
	(f = { p: f, c: null, e: null, m: !1, s: t, x: null, l: null }),
		J && !n && (f.l = { s: null, u: null, r1: [], r2: ut(!1) });
}
function ar(t) {
	const n = f;
	if (n !== null) {
		const s = n.e;
		if (s !== null) {
			var r = o,
				e = u;
			n.e = null;
			try {
				for (var l = 0; l < s.length; l++) {
					var a = s[l];
					$(a.effect), Z(a.reaction), Nt(a.fn);
				}
			} finally {
				$(r), Z(e);
			}
		}
		(f = n.p), (n.m = !0);
	}
	return {};
}
function Q() {
	return !J || (f !== null && f.l === null);
}
function ut(t, n) {
	var r = { f: 0, v: t, reactions: null, equals: Tt, rv: 0, wv: 0 };
	return r;
}
function sr(t) {
	return sn(ut(t));
}
function ur(t, n = !1) {
	var e;
	const r = ut(t);
	return (
		n || (r.equals = mt), J && f !== null && f.l !== null && ((e = f.l).s ?? (e.s = [])).push(r), r
	);
}
function sn(t) {
	return u !== null && !g && u.f & T && (m === null ? yn([t]) : m.push(t)), t;
}
function or(t, n) {
	return (
		u !== null && !g && Q() && u.f & (T | st) && (m === null || !m.includes(t)) && rn(), un(t, n)
	);
}
function un(t, n) {
	return (
		t.equals(n) ||
			(t.v,
			(t.v = n),
			(t.wv = Ht()),
			xt(t, R),
			Q() && o !== null && o.f & v && !(o.f & (D | M)) && (A === null ? gn([t]) : A.push(t))),
		n
	);
}
function xt(t, n) {
	var r = t.reactions;
	if (r !== null)
		for (var e = Q(), l = r.length, a = 0; a < l; a++) {
			var s = r[a],
				i = s.f;
			i & R || (!e && s === o) || (x(s, n), i & (v | y) && (i & T ? xt(s, N) : nt(s)));
		}
}
let C = !1;
function fr(t) {
	C = t;
}
let k;
function F(t) {
	if (t === null) throw (kt(), At);
	return (k = t);
}
function ir() {
	return F(b(k));
}
function _r(t) {
	if (C) {
		if (b(k) !== null) throw (kt(), At);
		k = t;
	}
}
function cr() {
	for (var t = 0, n = k; ; ) {
		if (n.nodeType === 8) {
			var r = n.data;
			if (r === an) {
				if (t === 0) return n;
				t -= 1;
			} else (r === en || r === ln) && (t += 1);
		}
		var e = b(n);
		n.remove(), (n = e);
	}
}
var pt, on, Dt, It;
function vr() {
	if (pt === void 0) {
		(pt = window), (on = /Firefox/.test(navigator.userAgent));
		var t = Element.prototype,
			n = Node.prototype;
		(Dt = _t(n, 'firstChild').get),
			(It = _t(n, 'nextSibling').get),
			(t.__click = void 0),
			(t.__className = void 0),
			(t.__attributes = null),
			(t.__styles = null),
			(t.__e = void 0),
			(Text.prototype.__t = void 0);
	}
}
function rt(t = '') {
	return document.createTextNode(t);
}
function et(t) {
	return Dt.call(t);
}
function b(t) {
	return It.call(t);
}
function pr(t, n) {
	if (!C) return et(t);
	var r = et(k);
	if (r === null) r = k.appendChild(rt());
	else if (n && r.nodeType !== 3) {
		var e = rt();
		return r == null || r.before(e), F(e), e;
	}
	return F(r), r;
}
function hr(t, n) {
	if (!C) {
		var r = et(t);
		return r instanceof Comment && r.data === '' ? b(r) : r;
	}
	return k;
}
function dr(t, n = 1, r = !1) {
	let e = C ? k : t;
	for (var l; n--; ) (l = e), (e = b(e));
	if (!C) return e;
	var a = e == null ? void 0 : e.nodeType;
	if (r && a !== 3) {
		var s = rt();
		return e === null ? l == null || l.after(s) : e.before(s), F(s), s;
	}
	return F(e), e;
}
function Er(t) {
	t.textContent = '';
}
function Rt(t) {
	var n = T | R,
		r = u !== null && u.f & T ? u : null;
	return (
		o === null || (r !== null && r.f & y) ? (n |= y) : (o.f |= gt),
		{
			ctx: f,
			deps: null,
			effects: null,
			equals: Tt,
			f: n,
			fn: t,
			reactions: null,
			rv: 0,
			v: null,
			wv: 0,
			parent: r ?? o
		}
	);
}
function wr(t) {
	const n = Rt(t);
	return (n.equals = mt), n;
}
function Ot(t) {
	var n = t.effects;
	if (n !== null) {
		t.effects = null;
		for (var r = 0; r < n.length; r += 1) O(n[r]);
	}
}
function fn(t) {
	for (var n = t.parent; n !== null; ) {
		if (!(n.f & T)) return n;
		n = n.parent;
	}
	return null;
}
function _n(t) {
	var n,
		r = o;
	$(fn(t));
	try {
		Ot(t), (n = Ut(t));
	} finally {
		$(r);
	}
	return n;
}
function St(t) {
	var n = _n(t),
		r = (I || t.f & y) && t.deps !== null ? N : v;
	x(t, r), t.equals(n) || ((t.v = n), (t.wv = Ht()));
}
function Ct(t) {
	o === null && u === null && Qt(), u !== null && u.f & y && o === null && Jt(), ot && Xt();
}
function cn(t, n) {
	var r = n.last;
	r === null ? (n.last = n.first = t) : ((r.next = t), (t.prev = r), (n.last = t));
}
function Y(t, n, r, e = !0) {
	var l = (t & M) !== 0,
		a = o,
		s = {
			ctx: f,
			deps: null,
			nodes_start: null,
			nodes_end: null,
			f: t | R,
			first: null,
			fn: n,
			last: null,
			next: null,
			parent: l ? null : a,
			prev: null,
			teardown: null,
			transitions: null,
			wv: 0
		};
	if (r)
		try {
			ft(s), (s.f |= $t);
		} catch (p) {
			throw (O(s), p);
		}
	else n !== null && nt(s);
	var i =
		r &&
		s.deps === null &&
		s.first === null &&
		s.nodes_start === null &&
		s.teardown === null &&
		(s.f & (gt | U)) === 0;
	if (!i && !l && e && (a !== null && cn(s, a), u !== null && u.f & T)) {
		var _ = u;
		(_.effects ?? (_.effects = [])).push(s);
	}
	return s;
}
function yr(t) {
	Ct();
	var n = o !== null && (o.f & D) !== 0 && f !== null && !f.m;
	if (n) {
		var r = f;
		(r.e ?? (r.e = [])).push({ fn: t, effect: o, reaction: u });
	} else {
		var e = Nt(t);
		return e;
	}
}
function gr(t) {
	return Ct(), vn(t);
}
function Tr(t) {
	const n = Y(M, t, !0);
	return (r = {}) =>
		new Promise((e) => {
			r.outro
				? dn(n, () => {
						O(n), e(void 0);
					})
				: (O(n), e(void 0));
		});
}
function Nt(t) {
	return Y(wt, t, !1);
}
function vn(t) {
	return Y(at, t, !0);
}
function mr(t, n = [], r = Rt) {
	const e = n.map(r);
	return pn(() => t(...e.map(Rn)));
}
function pn(t, n = 0) {
	return Y(at | st | n, t, !0);
}
function Ar(t, n = !0) {
	return Y(at | D, t, !0, n);
}
function bt(t) {
	var n = t.teardown;
	if (n !== null) {
		const r = ot,
			e = u;
		dt(!0), Z(null);
		try {
			n.call(null);
		} finally {
			dt(r), Z(e);
		}
	}
}
function Pt(t, n = !1) {
	var r = t.first;
	for (t.first = t.last = null; r !== null; ) {
		var e = r.next;
		O(r, n), (r = e);
	}
}
function hn(t) {
	for (var n = t.first; n !== null; ) {
		var r = n.next;
		n.f & D || O(n), (n = r);
	}
}
function O(t, n = !0) {
	var r = !1;
	if ((n || t.f & zt) && t.nodes_start !== null) {
		for (var e = t.nodes_start, l = t.nodes_end; e !== null; ) {
			var a = e === l ? null : b(e);
			e.remove(), (e = a);
		}
		r = !0;
	}
	Pt(t, n && !r), W(t, 0), x(t, X);
	var s = t.transitions;
	if (s !== null) for (const _ of s) _.stop();
	bt(t);
	var i = t.parent;
	i !== null && i.first !== null && Ft(t),
		(t.next = t.prev = t.teardown = t.ctx = t.deps = t.fn = t.nodes_start = t.nodes_end = null);
}
function Ft(t) {
	var n = t.parent,
		r = t.prev,
		e = t.next;
	r !== null && (r.next = e),
		e !== null && (e.prev = r),
		n !== null && (n.first === t && (n.first = e), n.last === t && (n.last = r));
}
function dn(t, n) {
	var r = [];
	qt(t, r, !0),
		En(r, () => {
			O(t), n && n();
		});
}
function En(t, n) {
	var r = t.length;
	if (r > 0) {
		var e = () => --r || n();
		for (var l of t) l.out(e);
	} else n();
}
function qt(t, n, r) {
	if (!(t.f & S)) {
		if (((t.f ^= S), t.transitions !== null))
			for (const s of t.transitions) (s.is_global || r) && n.push(s);
		for (var e = t.first; e !== null; ) {
			var l = e.next,
				a = (e.f & yt) !== 0 || (e.f & D) !== 0;
			qt(e, n, a ? r : !1), (e = l);
		}
	}
}
function kr(t) {
	Lt(t, !0);
}
function Lt(t, n) {
	if (t.f & S) {
		(t.f ^= S), t.f & v || (t.f ^= v), j(t) && (x(t, R), nt(t));
		for (var r = t.first; r !== null; ) {
			var e = r.next,
				l = (r.f & yt) !== 0 || (r.f & D) !== 0;
			Lt(r, l ? n : !1), (r = e);
		}
		if (t.transitions !== null) for (const a of t.transitions) (a.is_global || n) && a.in();
	}
}
const wn = typeof requestIdleCallback > 'u' ? (t) => setTimeout(t, 1) : requestIdleCallback;
let q = [],
	L = [];
function Mt() {
	var t = q;
	(q = []), Et(t);
}
function Yt() {
	var t = L;
	(L = []), Et(t);
}
function xr(t) {
	q.length === 0 && queueMicrotask(Mt), q.push(t);
}
function Dr(t) {
	L.length === 0 && wn(Yt), L.push(t);
}
function ht() {
	q.length > 0 && Mt(), L.length > 0 && Yt();
}
let H = !1,
	G = !1,
	K = null,
	B = !1,
	ot = !1;
function dt(t) {
	ot = t;
}
let P = [];
let u = null,
	g = !1;
function Z(t) {
	u = t;
}
let o = null;
function $(t) {
	o = t;
}
let m = null;
function yn(t) {
	m = t;
}
let c = null,
	E = 0,
	A = null;
function gn(t) {
	A = t;
}
let jt = 1,
	z = 0,
	I = !1;
function Ht() {
	return ++jt;
}
function j(t) {
	var h;
	var n = t.f;
	if (n & R) return !0;
	if (n & N) {
		var r = t.deps,
			e = (n & y) !== 0;
		if (r !== null) {
			var l,
				a,
				s = (n & V) !== 0,
				i = e && o !== null && !I,
				_ = r.length;
			if (s || i) {
				var p = t,
					w = p.parent;
				for (l = 0; l < _; l++)
					(a = r[l]),
						(s || !((h = a == null ? void 0 : a.reactions) != null && h.includes(p))) &&
							(a.reactions ?? (a.reactions = [])).push(p);
				s && (p.f ^= V), i && w !== null && !(w.f & y) && (p.f ^= y);
			}
			for (l = 0; l < _; l++) if (((a = r[l]), j(a) && St(a), a.wv > t.wv)) return !0;
		}
		(!e || (o !== null && !I)) && x(t, v);
	}
	return !1;
}
function Tn(t, n) {
	for (var r = n; r !== null; ) {
		if (r.f & U)
			try {
				r.fn(t);
				return;
			} catch {
				r.f ^= U;
			}
		r = r.parent;
	}
	throw ((H = !1), t);
}
function mn(t) {
	return (t.f & X) === 0 && (t.parent === null || (t.parent.f & U) === 0);
}
function tt(t, n, r, e) {
	if (H) {
		if ((r === null && (H = !1), mn(n))) throw t;
		return;
	}
	r !== null && (H = !0);
	{
		Tn(t, n);
		return;
	}
}
function Bt(t, n, r = !0) {
	var e = t.reactions;
	if (e !== null)
		for (var l = 0; l < e.length; l++) {
			var a = e[l];
			a.f & T ? Bt(a, n, !1) : n === a && (r ? x(a, R) : a.f & v && x(a, N), nt(a));
		}
}
function Ut(t) {
	var it;
	var n = c,
		r = E,
		e = A,
		l = u,
		a = I,
		s = m,
		i = f,
		_ = g,
		p = t.f;
	(c = null),
		(E = 0),
		(A = null),
		(I = (p & y) !== 0 && (g || !B || u === null)),
		(u = p & (D | M) ? null : t),
		(m = null),
		vt(t.ctx),
		(g = !1),
		z++;
	try {
		var w = (0, t.fn)(),
			h = t.deps;
		if (c !== null) {
			var d;
			if ((W(t, E), h !== null && E > 0))
				for (h.length = E + c.length, d = 0; d < c.length; d++) h[E + d] = c[d];
			else t.deps = h = c;
			if (!I) for (d = E; d < h.length; d++) ((it = h[d]).reactions ?? (it.reactions = [])).push(t);
		} else h !== null && E < h.length && (W(t, E), (h.length = E));
		if (Q() && A !== null && !g && h !== null && !(t.f & (T | N | R)))
			for (d = 0; d < A.length; d++) Bt(A[d], t);
		return l !== null && z++, w;
	} finally {
		(c = n), (E = r), (A = e), (u = l), (I = a), (m = s), vt(i), (g = _);
	}
}
function An(t, n) {
	let r = n.reactions;
	if (r !== null) {
		var e = Gt.call(r, t);
		if (e !== -1) {
			var l = r.length - 1;
			l === 0 ? (r = n.reactions = null) : ((r[e] = r[l]), r.pop());
		}
	}
	r === null &&
		n.f & T &&
		(c === null || !c.includes(n)) &&
		(x(n, N), n.f & (y | V) || (n.f ^= V), Ot(n), W(n, 0));
}
function W(t, n) {
	var r = t.deps;
	if (r !== null) for (var e = n; e < r.length; e++) An(t, r[e]);
}
function ft(t) {
	var n = t.f;
	if (!(n & X)) {
		x(t, v);
		var r = o,
			e = f,
			l = B;
		(o = t), (B = !0);
		try {
			n & st ? hn(t) : Pt(t), bt(t);
			var a = Ut(t);
			(t.teardown = typeof a == 'function' ? a : null), (t.wv = jt);
			var s = t.deps,
				i;
		} catch (_) {
			tt(_, t, r, e || t.ctx);
		} finally {
			(B = l), (o = r);
		}
	}
}
function kn() {
	try {
		tn();
	} catch (t) {
		if (K !== null) tt(t, K, null);
		else throw t;
	}
}
function Vt() {
	try {
		for (var t = 0; P.length > 0; ) {
			t++ > 1e3 && kn();
			var n = P,
				r = n.length;
			P = [];
			for (var e = 0; e < r; e++) {
				var l = n[e];
				l.f & v || (l.f ^= v);
				var a = Dn(l);
				xn(a);
			}
		}
	} finally {
		(G = !1), (K = null);
	}
}
function xn(t) {
	var n = t.length;
	if (n !== 0)
		for (var r = 0; r < n; r++) {
			var e = t[r];
			if (!(e.f & (X | S)))
				try {
					j(e) &&
						(ft(e),
						e.deps === null &&
							e.first === null &&
							e.nodes_start === null &&
							(e.teardown === null ? Ft(e) : (e.fn = null)));
				} catch (l) {
					tt(l, e, null, e.ctx);
				}
		}
}
function nt(t) {
	G || ((G = !0), queueMicrotask(Vt));
	for (var n = (K = t); n.parent !== null; ) {
		n = n.parent;
		var r = n.f;
		if (r & (M | D)) {
			if (!(r & v)) return;
			n.f ^= v;
		}
	}
	P.push(n);
}
function Dn(t) {
	var n = [],
		r = t.first;
	t: for (; r !== null; ) {
		var e = r.f,
			l = (e & D) !== 0,
			a = l && (e & v) !== 0,
			s = r.next;
		if (!a && !(e & S)) {
			if (e & wt) n.push(r);
			else if (l) r.f ^= v;
			else {
				var i = u;
				try {
					(u = r), j(r) && ft(r);
				} catch (w) {
					tt(w, r, null, r.ctx);
				} finally {
					u = i;
				}
			}
			var _ = r.first;
			if (_ !== null) {
				r = _;
				continue;
			}
		}
		if (s === null) {
			let w = r.parent;
			for (; w !== null; ) {
				if (t === w) break t;
				var p = w.next;
				if (p !== null) {
					r = p;
					continue t;
				}
				w = w.parent;
			}
		}
		r = s;
	}
	return n;
}
function In(t) {
	var n;
	for (ht(); P.length > 0; ) (G = !0), Vt(), ht();
	return n;
}
async function Ir() {
	await Promise.resolve(), In();
}
function Rn(t) {
	var n = t.f,
		r = (n & T) !== 0;
	if (u !== null && !g) {
		m !== null && m.includes(t) && nn();
		var e = u.deps;
		t.rv < z &&
			((t.rv = z),
			c === null && e !== null && e[E] === t
				? E++
				: c === null
					? (c = [t])
					: (!I || !c.includes(t)) && c.push(t));
	} else if (r && t.deps === null && t.effects === null) {
		var l = t,
			a = l.parent;
		a !== null && !(a.f & y) && (l.f ^= y);
	}
	return r && ((l = t), j(l) && St(l)), t.v;
}
function Rr(t) {
	var n = g;
	try {
		return (g = !0), t();
	} finally {
		g = n;
	}
}
const On = -7169;
function x(t, n) {
	t.f = (t.f & On) | n;
}
function Or(t) {
	if (!(typeof t != 'object' || !t || t instanceof EventTarget)) {
		if (ct in t) lt(t);
		else if (!Array.isArray(t))
			for (let n in t) {
				const r = t[n];
				typeof r == 'object' && r && ct in r && lt(r);
			}
	}
}
function lt(t, n = new Set()) {
	if (typeof t == 'object' && t !== null && !(t instanceof EventTarget) && !n.has(t)) {
		n.add(t), t instanceof Date && t.getTime();
		for (let e in t)
			try {
				lt(t[e], n);
			} catch {}
		const r = Zt(t);
		if (
			r !== Object.prototype &&
			r !== Array.prototype &&
			r !== Map.prototype &&
			r !== Set.prototype &&
			r !== Date.prototype
		) {
			const e = Kt(r);
			for (let l in e) {
				const a = e[l].get;
				if (a)
					try {
						a.call(t);
					} catch {}
			}
		}
	}
}
export {
	bn as $,
	Gn as A,
	un as B,
	Kn as C,
	ur as D,
	yt as E,
	ut as F,
	Sn as G,
	ln as H,
	S as I,
	$n as J,
	qt as K,
	Er as L,
	En as M,
	O as N,
	zn as O,
	b as P,
	f as Q,
	gr as R,
	yr as S,
	Et as T,
	er as U,
	Rr as V,
	qn as W,
	Or as X,
	Rt as Y,
	Vn as Z,
	ct as _,
	ar as a,
	Pn as a0,
	Un as a1,
	or as a2,
	_t as a3,
	Bn as a4,
	Zt as a5,
	J as a6,
	Ln as a7,
	Mn as a8,
	Xn as a9,
	sr as aA,
	Ir as aB,
	Q as aC,
	Wt as aD,
	Qn as aa,
	Hn as ab,
	Jn as ac,
	mt as ad,
	tr as ae,
	Wn as af,
	Yn as ag,
	Kt as ah,
	Dr as ai,
	Fn as aj,
	Nn as ak,
	Z as al,
	$ as am,
	u as an,
	vr as ao,
	en as ap,
	At as aq,
	kt as ar,
	jn as as,
	Tr as at,
	on as au,
	nr as av,
	rr as aw,
	Nt as ax,
	vn as ay,
	In as az,
	pn as b,
	pr as c,
	ir as d,
	cr as e,
	hr as f,
	F as g,
	C as h,
	fr as i,
	kr as j,
	Ar as k,
	dn as l,
	k as m,
	wr as n,
	Rn as o,
	lr as p,
	rt as q,
	_r as r,
	dr as s,
	mr as t,
	Zn as u,
	et as v,
	an as w,
	Cn as x,
	xr as y,
	o as z
};
