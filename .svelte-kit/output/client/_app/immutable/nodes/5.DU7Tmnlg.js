import { t as we, a as re } from '../chunks/OqE_2Snn.js';
import {
	al as Oe,
	am as Te,
	an as dt,
	z as pt,
	aC as ht,
	V as mt,
	ay as yt,
	h as bt,
	p as wt,
	aA as Ae,
	c as D,
	s as J,
	o as C,
	a as gt,
	a2 as se,
	r as L,
	t as Et
} from '../chunks/Ynks4hVH.js';
import { d as St, s as xe } from '../chunks/Dt44hy-N.js';
import { i as Rt } from '../chunks/DV-sUvXB.js';
import { e as Ot, i as Tt } from '../chunks/CYxyJEWj.js';
import { a as At, r as xt, s as _t } from '../chunks/BeXT4T_v.js';
import { p as oe } from '../chunks/CRolmvzv.js';
function Ct(e) {
	var t = dt,
		n = pt;
	Oe(null), Te(null);
	try {
		return e();
	} finally {
		Oe(t), Te(n);
	}
}
function Nt(e, t, n, r = n) {
	e.addEventListener(t, () => Ct(n));
	const s = e.__on_r;
	s
		? (e.__on_r = () => {
				s(), r(!0);
			})
		: (e.__on_r = () => r(!0)),
		At();
}
function Pt(e, t, n = t) {
	var r = ht();
	Nt(e, 'input', (s) => {
		var o = s ? e.defaultValue : e.value;
		if (((o = ie(e) ? ae(o) : o), n(o), r && o !== (o = t()))) {
			var i = e.selectionStart,
				c = e.selectionEnd;
			(e.value = o ?? ''),
				c !== null && ((e.selectionStart = i), (e.selectionEnd = Math.min(c, e.value.length)));
		}
	}),
		((bt && e.defaultValue !== e.value) || (mt(t) == null && e.value)) &&
			n(ie(e) ? ae(e.value) : e.value),
		yt(() => {
			var s = t();
			(ie(e) && s === ae(e.value)) ||
				(e.type === 'date' && !s && !e.value) ||
				(s !== e.value && (e.value = s ?? ''));
		});
}
function ie(e) {
	var t = e.type;
	return t === 'number' || t === 'range';
}
function ae(e) {
	return e === '' ? null : +e;
}
function Ie(e, t) {
	return function () {
		return e.apply(t, arguments);
	};
}
const { toString: Ft } = Object.prototype,
	{ getPrototypeOf: ge } = Object,
	Q = ((e) => (t) => {
		const n = Ft.call(t);
		return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
	})(Object.create(null)),
	N = (e) => ((e = e.toLowerCase()), (t) => Q(t) === e),
	Z = (e) => (t) => typeof t === e,
	{ isArray: j } = Array,
	I = Z('undefined');
function Lt(e) {
	return (
		e !== null &&
		!I(e) &&
		e.constructor !== null &&
		!I(e.constructor) &&
		x(e.constructor.isBuffer) &&
		e.constructor.isBuffer(e)
	);
}
const Me = N('ArrayBuffer');
function kt(e) {
	let t;
	return (
		typeof ArrayBuffer < 'u' && ArrayBuffer.isView
			? (t = ArrayBuffer.isView(e))
			: (t = e && e.buffer && Me(e.buffer)),
		t
	);
}
const Dt = Z('string'),
	x = Z('function'),
	ze = Z('number'),
	Y = (e) => e !== null && typeof e == 'object',
	Bt = (e) => e === !0 || e === !1,
	V = (e) => {
		if (Q(e) !== 'object') return !1;
		const t = ge(e);
		return (
			(t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) &&
			!(Symbol.toStringTag in e) &&
			!(Symbol.iterator in e)
		);
	},
	Ut = N('Date'),
	vt = N('File'),
	jt = N('Blob'),
	qt = N('FileList'),
	Ht = (e) => Y(e) && x(e.pipe),
	It = (e) => {
		let t;
		return (
			e &&
			((typeof FormData == 'function' && e instanceof FormData) ||
				(x(e.append) &&
					((t = Q(e)) === 'formdata' ||
						(t === 'object' && x(e.toString) && e.toString() === '[object FormData]'))))
		);
	},
	Mt = N('URLSearchParams'),
	[zt, $t, Jt, Vt] = ['ReadableStream', 'Request', 'Response', 'Headers'].map(N),
	Wt = (e) => (e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ''));
function M(e, t, { allOwnKeys: n = !1 } = {}) {
	if (e === null || typeof e > 'u') return;
	let r, s;
	if ((typeof e != 'object' && (e = [e]), j(e)))
		for (r = 0, s = e.length; r < s; r++) t.call(null, e[r], r, e);
	else {
		const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
			i = o.length;
		let c;
		for (r = 0; r < i; r++) (c = o[r]), t.call(null, e[c], c, e);
	}
}
function $e(e, t) {
	t = t.toLowerCase();
	const n = Object.keys(e);
	let r = n.length,
		s;
	for (; r-- > 0; ) if (((s = n[r]), t === s.toLowerCase())) return s;
	return null;
}
const B =
		typeof globalThis < 'u'
			? globalThis
			: typeof self < 'u'
				? self
				: typeof window < 'u'
					? window
					: global,
	Je = (e) => !I(e) && e !== B;
function de() {
	const { caseless: e } = (Je(this) && this) || {},
		t = {},
		n = (r, s) => {
			const o = (e && $e(t, s)) || s;
			V(t[o]) && V(r)
				? (t[o] = de(t[o], r))
				: V(r)
					? (t[o] = de({}, r))
					: j(r)
						? (t[o] = r.slice())
						: (t[o] = r);
		};
	for (let r = 0, s = arguments.length; r < s; r++) arguments[r] && M(arguments[r], n);
	return t;
}
const Kt = (e, t, n, { allOwnKeys: r } = {}) => (
		M(
			t,
			(s, o) => {
				n && x(s) ? (e[o] = Ie(s, n)) : (e[o] = s);
			},
			{ allOwnKeys: r }
		),
		e
	),
	Xt = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
	Gt = (e, t, n, r) => {
		(e.prototype = Object.create(t.prototype, r)),
			(e.prototype.constructor = e),
			Object.defineProperty(e, 'super', { value: t.prototype }),
			n && Object.assign(e.prototype, n);
	},
	Qt = (e, t, n, r) => {
		let s, o, i;
		const c = {};
		if (((t = t || {}), e == null)) return t;
		do {
			for (s = Object.getOwnPropertyNames(e), o = s.length; o-- > 0; )
				(i = s[o]), (!r || r(i, e, t)) && !c[i] && ((t[i] = e[i]), (c[i] = !0));
			e = n !== !1 && ge(e);
		} while (e && (!n || n(e, t)) && e !== Object.prototype);
		return t;
	},
	Zt = (e, t, n) => {
		(e = String(e)), (n === void 0 || n > e.length) && (n = e.length), (n -= t.length);
		const r = e.indexOf(t, n);
		return r !== -1 && r === n;
	},
	Yt = (e) => {
		if (!e) return null;
		if (j(e)) return e;
		let t = e.length;
		if (!ze(t)) return null;
		const n = new Array(t);
		for (; t-- > 0; ) n[t] = e[t];
		return n;
	},
	en = (
		(e) => (t) =>
			e && t instanceof e
	)(typeof Uint8Array < 'u' && ge(Uint8Array)),
	tn = (e, t) => {
		const r = (e && e[Symbol.iterator]).call(e);
		let s;
		for (; (s = r.next()) && !s.done; ) {
			const o = s.value;
			t.call(e, o[0], o[1]);
		}
	},
	nn = (e, t) => {
		let n;
		const r = [];
		for (; (n = e.exec(t)) !== null; ) r.push(n);
		return r;
	},
	rn = N('HTMLFormElement'),
	sn = (e) =>
		e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, s) {
			return r.toUpperCase() + s;
		}),
	_e = (
		({ hasOwnProperty: e }) =>
		(t, n) =>
			e.call(t, n)
	)(Object.prototype),
	on = N('RegExp'),
	Ve = (e, t) => {
		const n = Object.getOwnPropertyDescriptors(e),
			r = {};
		M(n, (s, o) => {
			let i;
			(i = t(s, o, e)) !== !1 && (r[o] = i || s);
		}),
			Object.defineProperties(e, r);
	},
	an = (e) => {
		Ve(e, (t, n) => {
			if (x(e) && ['arguments', 'caller', 'callee'].indexOf(n) !== -1) return !1;
			const r = e[n];
			if (x(r)) {
				if (((t.enumerable = !1), 'writable' in t)) {
					t.writable = !1;
					return;
				}
				t.set ||
					(t.set = () => {
						throw Error("Can not rewrite read-only method '" + n + "'");
					});
			}
		});
	},
	cn = (e, t) => {
		const n = {},
			r = (s) => {
				s.forEach((o) => {
					n[o] = !0;
				});
			};
		return j(e) ? r(e) : r(String(e).split(t)), n;
	},
	ln = () => {},
	un = (e, t) => (e != null && Number.isFinite((e = +e)) ? e : t),
	ce = 'abcdefghijklmnopqrstuvwxyz',
	Ce = '0123456789',
	We = { DIGIT: Ce, ALPHA: ce, ALPHA_DIGIT: ce + ce.toUpperCase() + Ce },
	fn = (e = 16, t = We.ALPHA_DIGIT) => {
		let n = '';
		const { length: r } = t;
		for (; e--; ) n += t[(Math.random() * r) | 0];
		return n;
	};
function dn(e) {
	return !!(e && x(e.append) && e[Symbol.toStringTag] === 'FormData' && e[Symbol.iterator]);
}
const pn = (e) => {
		const t = new Array(10),
			n = (r, s) => {
				if (Y(r)) {
					if (t.indexOf(r) >= 0) return;
					if (!('toJSON' in r)) {
						t[s] = r;
						const o = j(r) ? [] : {};
						return (
							M(r, (i, c) => {
								const d = n(i, s + 1);
								!I(d) && (o[c] = d);
							}),
							(t[s] = void 0),
							o
						);
					}
				}
				return r;
			};
		return n(e, 0);
	},
	hn = N('AsyncFunction'),
	mn = (e) => e && (Y(e) || x(e)) && x(e.then) && x(e.catch),
	Ke = ((e, t) =>
		e
			? setImmediate
			: t
				? ((n, r) => (
						B.addEventListener(
							'message',
							({ source: s, data: o }) => {
								s === B && o === n && r.length && r.shift()();
							},
							!1
						),
						(s) => {
							r.push(s), B.postMessage(n, '*');
						}
					))(`axios@${Math.random()}`, [])
				: (n) => setTimeout(n))(typeof setImmediate == 'function', x(B.postMessage)),
	yn =
		typeof queueMicrotask < 'u'
			? queueMicrotask.bind(B)
			: (typeof process < 'u' && process.nextTick) || Ke,
	a = {
		isArray: j,
		isArrayBuffer: Me,
		isBuffer: Lt,
		isFormData: It,
		isArrayBufferView: kt,
		isString: Dt,
		isNumber: ze,
		isBoolean: Bt,
		isObject: Y,
		isPlainObject: V,
		isReadableStream: zt,
		isRequest: $t,
		isResponse: Jt,
		isHeaders: Vt,
		isUndefined: I,
		isDate: Ut,
		isFile: vt,
		isBlob: jt,
		isRegExp: on,
		isFunction: x,
		isStream: Ht,
		isURLSearchParams: Mt,
		isTypedArray: en,
		isFileList: qt,
		forEach: M,
		merge: de,
		extend: Kt,
		trim: Wt,
		stripBOM: Xt,
		inherits: Gt,
		toFlatObject: Qt,
		kindOf: Q,
		kindOfTest: N,
		endsWith: Zt,
		toArray: Yt,
		forEachEntry: tn,
		matchAll: nn,
		isHTMLForm: rn,
		hasOwnProperty: _e,
		hasOwnProp: _e,
		reduceDescriptors: Ve,
		freezeMethods: an,
		toObjectSet: cn,
		toCamelCase: sn,
		noop: ln,
		toFiniteNumber: un,
		findKey: $e,
		global: B,
		isContextDefined: Je,
		ALPHABET: We,
		generateString: fn,
		isSpecCompliantForm: dn,
		toJSONObject: pn,
		isAsyncFn: hn,
		isThenable: mn,
		setImmediate: Ke,
		asap: yn
	};
function y(e, t, n, r, s) {
	Error.call(this),
		Error.captureStackTrace
			? Error.captureStackTrace(this, this.constructor)
			: (this.stack = new Error().stack),
		(this.message = e),
		(this.name = 'AxiosError'),
		t && (this.code = t),
		n && (this.config = n),
		r && (this.request = r),
		s && ((this.response = s), (this.status = s.status ? s.status : null));
}
a.inherits(y, Error, {
	toJSON: function () {
		return {
			message: this.message,
			name: this.name,
			description: this.description,
			number: this.number,
			fileName: this.fileName,
			lineNumber: this.lineNumber,
			columnNumber: this.columnNumber,
			stack: this.stack,
			config: a.toJSONObject(this.config),
			code: this.code,
			status: this.status
		};
	}
});
const Xe = y.prototype,
	Ge = {};
[
	'ERR_BAD_OPTION_VALUE',
	'ERR_BAD_OPTION',
	'ECONNABORTED',
	'ETIMEDOUT',
	'ERR_NETWORK',
	'ERR_FR_TOO_MANY_REDIRECTS',
	'ERR_DEPRECATED',
	'ERR_BAD_RESPONSE',
	'ERR_BAD_REQUEST',
	'ERR_CANCELED',
	'ERR_NOT_SUPPORT',
	'ERR_INVALID_URL'
].forEach((e) => {
	Ge[e] = { value: e };
});
Object.defineProperties(y, Ge);
Object.defineProperty(Xe, 'isAxiosError', { value: !0 });
y.from = (e, t, n, r, s, o) => {
	const i = Object.create(Xe);
	return (
		a.toFlatObject(
			e,
			i,
			function (d) {
				return d !== Error.prototype;
			},
			(c) => c !== 'isAxiosError'
		),
		y.call(i, e.message, t, n, r, s),
		(i.cause = e),
		(i.name = e.name),
		o && Object.assign(i, o),
		i
	);
};
const bn = null;
function pe(e) {
	return a.isPlainObject(e) || a.isArray(e);
}
function Qe(e) {
	return a.endsWith(e, '[]') ? e.slice(0, -2) : e;
}
function Ne(e, t, n) {
	return e
		? e
				.concat(t)
				.map(function (s, o) {
					return (s = Qe(s)), !n && o ? '[' + s + ']' : s;
				})
				.join(n ? '.' : '')
		: t;
}
function wn(e) {
	return a.isArray(e) && !e.some(pe);
}
const gn = a.toFlatObject(a, {}, null, function (t) {
	return /^is[A-Z]/.test(t);
});
function ee(e, t, n) {
	if (!a.isObject(e)) throw new TypeError('target must be an object');
	(t = t || new FormData()),
		(n = a.toFlatObject(n, { metaTokens: !0, dots: !1, indexes: !1 }, !1, function (m, h) {
			return !a.isUndefined(h[m]);
		}));
	const r = n.metaTokens,
		s = n.visitor || u,
		o = n.dots,
		i = n.indexes,
		d = (n.Blob || (typeof Blob < 'u' && Blob)) && a.isSpecCompliantForm(t);
	if (!a.isFunction(s)) throw new TypeError('visitor must be a function');
	function l(p) {
		if (p === null) return '';
		if (a.isDate(p)) return p.toISOString();
		if (!d && a.isBlob(p)) throw new y('Blob is not supported. Use a Buffer instead.');
		return a.isArrayBuffer(p) || a.isTypedArray(p)
			? d && typeof Blob == 'function'
				? new Blob([p])
				: Buffer.from(p)
			: p;
	}
	function u(p, m, h) {
		let w = p;
		if (p && !h && typeof p == 'object') {
			if (a.endsWith(m, '{}')) (m = r ? m : m.slice(0, -2)), (p = JSON.stringify(p));
			else if (
				(a.isArray(p) && wn(p)) ||
				((a.isFileList(p) || a.endsWith(m, '[]')) && (w = a.toArray(p)))
			)
				return (
					(m = Qe(m)),
					w.forEach(function (R, _) {
						!(a.isUndefined(R) || R === null) &&
							t.append(i === !0 ? Ne([m], _, o) : i === null ? m : m + '[]', l(R));
					}),
					!1
				);
		}
		return pe(p) ? !0 : (t.append(Ne(h, m, o), l(p)), !1);
	}
	const f = [],
		b = Object.assign(gn, { defaultVisitor: u, convertValue: l, isVisitable: pe });
	function E(p, m) {
		if (!a.isUndefined(p)) {
			if (f.indexOf(p) !== -1) throw Error('Circular reference detected in ' + m.join('.'));
			f.push(p),
				a.forEach(p, function (w, g) {
					(!(a.isUndefined(w) || w === null) &&
						s.call(t, w, a.isString(g) ? g.trim() : g, m, b)) === !0 && E(w, m ? m.concat(g) : [g]);
				}),
				f.pop();
		}
	}
	if (!a.isObject(e)) throw new TypeError('data must be an object');
	return E(e), t;
}
function Pe(e) {
	const t = { '!': '%21', "'": '%27', '(': '%28', ')': '%29', '~': '%7E', '%20': '+', '%00': '\0' };
	return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
		return t[r];
	});
}
function Ee(e, t) {
	(this._pairs = []), e && ee(e, this, t);
}
const Ze = Ee.prototype;
Ze.append = function (t, n) {
	this._pairs.push([t, n]);
};
Ze.toString = function (t) {
	const n = t
		? function (r) {
				return t.call(this, r, Pe);
			}
		: Pe;
	return this._pairs
		.map(function (s) {
			return n(s[0]) + '=' + n(s[1]);
		}, '')
		.join('&');
};
function En(e) {
	return encodeURIComponent(e)
		.replace(/%3A/gi, ':')
		.replace(/%24/g, '$')
		.replace(/%2C/gi, ',')
		.replace(/%20/g, '+')
		.replace(/%5B/gi, '[')
		.replace(/%5D/gi, ']');
}
function Ye(e, t, n) {
	if (!t) return e;
	const r = (n && n.encode) || En;
	a.isFunction(n) && (n = { serialize: n });
	const s = n && n.serialize;
	let o;
	if (
		(s ? (o = s(t, n)) : (o = a.isURLSearchParams(t) ? t.toString() : new Ee(t, n).toString(r)), o)
	) {
		const i = e.indexOf('#');
		i !== -1 && (e = e.slice(0, i)), (e += (e.indexOf('?') === -1 ? '?' : '&') + o);
	}
	return e;
}
class Fe {
	constructor() {
		this.handlers = [];
	}
	use(t, n, r) {
		return (
			this.handlers.push({
				fulfilled: t,
				rejected: n,
				synchronous: r ? r.synchronous : !1,
				runWhen: r ? r.runWhen : null
			}),
			this.handlers.length - 1
		);
	}
	eject(t) {
		this.handlers[t] && (this.handlers[t] = null);
	}
	clear() {
		this.handlers && (this.handlers = []);
	}
	forEach(t) {
		a.forEach(this.handlers, function (r) {
			r !== null && t(r);
		});
	}
}
const et = { silentJSONParsing: !0, forcedJSONParsing: !0, clarifyTimeoutError: !1 },
	Sn = typeof URLSearchParams < 'u' ? URLSearchParams : Ee,
	Rn = typeof FormData < 'u' ? FormData : null,
	On = typeof Blob < 'u' ? Blob : null,
	Tn = {
		isBrowser: !0,
		classes: { URLSearchParams: Sn, FormData: Rn, Blob: On },
		protocols: ['http', 'https', 'file', 'blob', 'url', 'data']
	},
	Se = typeof window < 'u' && typeof document < 'u',
	he = (typeof navigator == 'object' && navigator) || void 0,
	An = Se && (!he || ['ReactNative', 'NativeScript', 'NS'].indexOf(he.product) < 0),
	xn =
		typeof WorkerGlobalScope < 'u' &&
		self instanceof WorkerGlobalScope &&
		typeof self.importScripts == 'function',
	_n = (Se && window.location.href) || 'http://localhost',
	Cn = Object.freeze(
		Object.defineProperty(
			{
				__proto__: null,
				hasBrowserEnv: Se,
				hasStandardBrowserEnv: An,
				hasStandardBrowserWebWorkerEnv: xn,
				navigator: he,
				origin: _n
			},
			Symbol.toStringTag,
			{ value: 'Module' }
		)
	),
	T = { ...Cn, ...Tn };
function Nn(e, t) {
	return ee(
		e,
		new T.classes.URLSearchParams(),
		Object.assign(
			{
				visitor: function (n, r, s, o) {
					return T.isNode && a.isBuffer(n)
						? (this.append(r, n.toString('base64')), !1)
						: o.defaultVisitor.apply(this, arguments);
				}
			},
			t
		)
	);
}
function Pn(e) {
	return a.matchAll(/\w+|\[(\w*)]/g, e).map((t) => (t[0] === '[]' ? '' : t[1] || t[0]));
}
function Fn(e) {
	const t = {},
		n = Object.keys(e);
	let r;
	const s = n.length;
	let o;
	for (r = 0; r < s; r++) (o = n[r]), (t[o] = e[o]);
	return t;
}
function tt(e) {
	function t(n, r, s, o) {
		let i = n[o++];
		if (i === '__proto__') return !0;
		const c = Number.isFinite(+i),
			d = o >= n.length;
		return (
			(i = !i && a.isArray(s) ? s.length : i),
			d
				? (a.hasOwnProp(s, i) ? (s[i] = [s[i], r]) : (s[i] = r), !c)
				: ((!s[i] || !a.isObject(s[i])) && (s[i] = []),
					t(n, r, s[i], o) && a.isArray(s[i]) && (s[i] = Fn(s[i])),
					!c)
		);
	}
	if (a.isFormData(e) && a.isFunction(e.entries)) {
		const n = {};
		return (
			a.forEachEntry(e, (r, s) => {
				t(Pn(r), s, n, 0);
			}),
			n
		);
	}
	return null;
}
function Ln(e, t, n) {
	if (a.isString(e))
		try {
			return (t || JSON.parse)(e), a.trim(e);
		} catch (r) {
			if (r.name !== 'SyntaxError') throw r;
		}
	return (n || JSON.stringify)(e);
}
const z = {
	transitional: et,
	adapter: ['xhr', 'http', 'fetch'],
	transformRequest: [
		function (t, n) {
			const r = n.getContentType() || '',
				s = r.indexOf('application/json') > -1,
				o = a.isObject(t);
			if ((o && a.isHTMLForm(t) && (t = new FormData(t)), a.isFormData(t)))
				return s ? JSON.stringify(tt(t)) : t;
			if (
				a.isArrayBuffer(t) ||
				a.isBuffer(t) ||
				a.isStream(t) ||
				a.isFile(t) ||
				a.isBlob(t) ||
				a.isReadableStream(t)
			)
				return t;
			if (a.isArrayBufferView(t)) return t.buffer;
			if (a.isURLSearchParams(t))
				return (
					n.setContentType('application/x-www-form-urlencoded;charset=utf-8', !1), t.toString()
				);
			let c;
			if (o) {
				if (r.indexOf('application/x-www-form-urlencoded') > -1)
					return Nn(t, this.formSerializer).toString();
				if ((c = a.isFileList(t)) || r.indexOf('multipart/form-data') > -1) {
					const d = this.env && this.env.FormData;
					return ee(c ? { 'files[]': t } : t, d && new d(), this.formSerializer);
				}
			}
			return o || s ? (n.setContentType('application/json', !1), Ln(t)) : t;
		}
	],
	transformResponse: [
		function (t) {
			const n = this.transitional || z.transitional,
				r = n && n.forcedJSONParsing,
				s = this.responseType === 'json';
			if (a.isResponse(t) || a.isReadableStream(t)) return t;
			if (t && a.isString(t) && ((r && !this.responseType) || s)) {
				const i = !(n && n.silentJSONParsing) && s;
				try {
					return JSON.parse(t);
				} catch (c) {
					if (i)
						throw c.name === 'SyntaxError'
							? y.from(c, y.ERR_BAD_RESPONSE, this, null, this.response)
							: c;
				}
			}
			return t;
		}
	],
	timeout: 0,
	xsrfCookieName: 'XSRF-TOKEN',
	xsrfHeaderName: 'X-XSRF-TOKEN',
	maxContentLength: -1,
	maxBodyLength: -1,
	env: { FormData: T.classes.FormData, Blob: T.classes.Blob },
	validateStatus: function (t) {
		return t >= 200 && t < 300;
	},
	headers: { common: { Accept: 'application/json, text/plain, */*', 'Content-Type': void 0 } }
};
a.forEach(['delete', 'get', 'head', 'post', 'put', 'patch'], (e) => {
	z.headers[e] = {};
});
const kn = a.toObjectSet([
		'age',
		'authorization',
		'content-length',
		'content-type',
		'etag',
		'expires',
		'from',
		'host',
		'if-modified-since',
		'if-unmodified-since',
		'last-modified',
		'location',
		'max-forwards',
		'proxy-authorization',
		'referer',
		'retry-after',
		'user-agent'
	]),
	Dn = (e) => {
		const t = {};
		let n, r, s;
		return (
			e &&
				e
					.split(
						`
`
					)
					.forEach(function (i) {
						(s = i.indexOf(':')),
							(n = i.substring(0, s).trim().toLowerCase()),
							(r = i.substring(s + 1).trim()),
							!(!n || (t[n] && kn[n])) &&
								(n === 'set-cookie'
									? t[n]
										? t[n].push(r)
										: (t[n] = [r])
									: (t[n] = t[n] ? t[n] + ', ' + r : r));
					}),
			t
		);
	},
	Le = Symbol('internals');
function H(e) {
	return e && String(e).trim().toLowerCase();
}
function W(e) {
	return e === !1 || e == null ? e : a.isArray(e) ? e.map(W) : String(e);
}
function Bn(e) {
	const t = Object.create(null),
		n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
	let r;
	for (; (r = n.exec(e)); ) t[r[1]] = r[2];
	return t;
}
const Un = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function le(e, t, n, r, s) {
	if (a.isFunction(r)) return r.call(this, t, n);
	if ((s && (t = n), !!a.isString(t))) {
		if (a.isString(r)) return t.indexOf(r) !== -1;
		if (a.isRegExp(r)) return r.test(t);
	}
}
function vn(e) {
	return e
		.trim()
		.toLowerCase()
		.replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function jn(e, t) {
	const n = a.toCamelCase(' ' + t);
	['get', 'set', 'has'].forEach((r) => {
		Object.defineProperty(e, r + n, {
			value: function (s, o, i) {
				return this[r].call(this, t, s, o, i);
			},
			configurable: !0
		});
	});
}
let A = class {
	constructor(t) {
		t && this.set(t);
	}
	set(t, n, r) {
		const s = this;
		function o(c, d, l) {
			const u = H(d);
			if (!u) throw new Error('header name must be a non-empty string');
			const f = a.findKey(s, u);
			(!f || s[f] === void 0 || l === !0 || (l === void 0 && s[f] !== !1)) && (s[f || d] = W(c));
		}
		const i = (c, d) => a.forEach(c, (l, u) => o(l, u, d));
		if (a.isPlainObject(t) || t instanceof this.constructor) i(t, n);
		else if (a.isString(t) && (t = t.trim()) && !Un(t)) i(Dn(t), n);
		else if (a.isHeaders(t)) for (const [c, d] of t.entries()) o(d, c, r);
		else t != null && o(n, t, r);
		return this;
	}
	get(t, n) {
		if (((t = H(t)), t)) {
			const r = a.findKey(this, t);
			if (r) {
				const s = this[r];
				if (!n) return s;
				if (n === !0) return Bn(s);
				if (a.isFunction(n)) return n.call(this, s, r);
				if (a.isRegExp(n)) return n.exec(s);
				throw new TypeError('parser must be boolean|regexp|function');
			}
		}
	}
	has(t, n) {
		if (((t = H(t)), t)) {
			const r = a.findKey(this, t);
			return !!(r && this[r] !== void 0 && (!n || le(this, this[r], r, n)));
		}
		return !1;
	}
	delete(t, n) {
		const r = this;
		let s = !1;
		function o(i) {
			if (((i = H(i)), i)) {
				const c = a.findKey(r, i);
				c && (!n || le(r, r[c], c, n)) && (delete r[c], (s = !0));
			}
		}
		return a.isArray(t) ? t.forEach(o) : o(t), s;
	}
	clear(t) {
		const n = Object.keys(this);
		let r = n.length,
			s = !1;
		for (; r--; ) {
			const o = n[r];
			(!t || le(this, this[o], o, t, !0)) && (delete this[o], (s = !0));
		}
		return s;
	}
	normalize(t) {
		const n = this,
			r = {};
		return (
			a.forEach(this, (s, o) => {
				const i = a.findKey(r, o);
				if (i) {
					(n[i] = W(s)), delete n[o];
					return;
				}
				const c = t ? vn(o) : String(o).trim();
				c !== o && delete n[o], (n[c] = W(s)), (r[c] = !0);
			}),
			this
		);
	}
	concat(...t) {
		return this.constructor.concat(this, ...t);
	}
	toJSON(t) {
		const n = Object.create(null);
		return (
			a.forEach(this, (r, s) => {
				r != null && r !== !1 && (n[s] = t && a.isArray(r) ? r.join(', ') : r);
			}),
			n
		);
	}
	[Symbol.iterator]() {
		return Object.entries(this.toJSON())[Symbol.iterator]();
	}
	toString() {
		return Object.entries(this.toJSON()).map(([t, n]) => t + ': ' + n).join(`
`);
	}
	get [Symbol.toStringTag]() {
		return 'AxiosHeaders';
	}
	static from(t) {
		return t instanceof this ? t : new this(t);
	}
	static concat(t, ...n) {
		const r = new this(t);
		return n.forEach((s) => r.set(s)), r;
	}
	static accessor(t) {
		const r = (this[Le] = this[Le] = { accessors: {} }).accessors,
			s = this.prototype;
		function o(i) {
			const c = H(i);
			r[c] || (jn(s, i), (r[c] = !0));
		}
		return a.isArray(t) ? t.forEach(o) : o(t), this;
	}
};
A.accessor([
	'Content-Type',
	'Content-Length',
	'Accept',
	'Accept-Encoding',
	'User-Agent',
	'Authorization'
]);
a.reduceDescriptors(A.prototype, ({ value: e }, t) => {
	let n = t[0].toUpperCase() + t.slice(1);
	return {
		get: () => e,
		set(r) {
			this[n] = r;
		}
	};
});
a.freezeMethods(A);
function ue(e, t) {
	const n = this || z,
		r = t || n,
		s = A.from(r.headers);
	let o = r.data;
	return (
		a.forEach(e, function (c) {
			o = c.call(n, o, s.normalize(), t ? t.status : void 0);
		}),
		s.normalize(),
		o
	);
}
function nt(e) {
	return !!(e && e.__CANCEL__);
}
function q(e, t, n) {
	y.call(this, e ?? 'canceled', y.ERR_CANCELED, t, n), (this.name = 'CanceledError');
}
a.inherits(q, y, { __CANCEL__: !0 });
function rt(e, t, n) {
	const r = n.config.validateStatus;
	!n.status || !r || r(n.status)
		? e(n)
		: t(
				new y(
					'Request failed with status code ' + n.status,
					[y.ERR_BAD_REQUEST, y.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
					n.config,
					n.request,
					n
				)
			);
}
function qn(e) {
	const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
	return (t && t[1]) || '';
}
function Hn(e, t) {
	e = e || 10;
	const n = new Array(e),
		r = new Array(e);
	let s = 0,
		o = 0,
		i;
	return (
		(t = t !== void 0 ? t : 1e3),
		function (d) {
			const l = Date.now(),
				u = r[o];
			i || (i = l), (n[s] = d), (r[s] = l);
			let f = o,
				b = 0;
			for (; f !== s; ) (b += n[f++]), (f = f % e);
			if (((s = (s + 1) % e), s === o && (o = (o + 1) % e), l - i < t)) return;
			const E = u && l - u;
			return E ? Math.round((b * 1e3) / E) : void 0;
		}
	);
}
function In(e, t) {
	let n = 0,
		r = 1e3 / t,
		s,
		o;
	const i = (l, u = Date.now()) => {
		(n = u), (s = null), o && (clearTimeout(o), (o = null)), e.apply(null, l);
	};
	return [
		(...l) => {
			const u = Date.now(),
				f = u - n;
			f >= r
				? i(l, u)
				: ((s = l),
					o ||
						(o = setTimeout(() => {
							(o = null), i(s);
						}, r - f)));
		},
		() => s && i(s)
	];
}
const X = (e, t, n = 3) => {
		let r = 0;
		const s = Hn(50, 250);
		return In((o) => {
			const i = o.loaded,
				c = o.lengthComputable ? o.total : void 0,
				d = i - r,
				l = s(d),
				u = i <= c;
			r = i;
			const f = {
				loaded: i,
				total: c,
				progress: c ? i / c : void 0,
				bytes: d,
				rate: l || void 0,
				estimated: l && c && u ? (c - i) / l : void 0,
				event: o,
				lengthComputable: c != null,
				[t ? 'download' : 'upload']: !0
			};
			e(f);
		}, n);
	},
	ke = (e, t) => {
		const n = e != null;
		return [(r) => t[0]({ lengthComputable: n, total: e, loaded: r }), t[1]];
	},
	De =
		(e) =>
		(...t) =>
			a.asap(() => e(...t)),
	Mn = T.hasStandardBrowserEnv
		? ((e, t) => (n) => (
				(n = new URL(n, T.origin)),
				e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)
			))(new URL(T.origin), T.navigator && /(msie|trident)/i.test(T.navigator.userAgent))
		: () => !0,
	zn = T.hasStandardBrowserEnv
		? {
				write(e, t, n, r, s, o) {
					const i = [e + '=' + encodeURIComponent(t)];
					a.isNumber(n) && i.push('expires=' + new Date(n).toGMTString()),
						a.isString(r) && i.push('path=' + r),
						a.isString(s) && i.push('domain=' + s),
						o === !0 && i.push('secure'),
						(document.cookie = i.join('; '));
				},
				read(e) {
					const t = document.cookie.match(new RegExp('(^|;\\s*)(' + e + ')=([^;]*)'));
					return t ? decodeURIComponent(t[3]) : null;
				},
				remove(e) {
					this.write(e, '', Date.now() - 864e5);
				}
			}
		: {
				write() {},
				read() {
					return null;
				},
				remove() {}
			};
function $n(e) {
	return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Jn(e, t) {
	return t ? e.replace(/\/?\/$/, '') + '/' + t.replace(/^\/+/, '') : e;
}
function st(e, t) {
	return e && !$n(t) ? Jn(e, t) : t;
}
const Be = (e) => (e instanceof A ? { ...e } : e);
function v(e, t) {
	t = t || {};
	const n = {};
	function r(l, u, f, b) {
		return a.isPlainObject(l) && a.isPlainObject(u)
			? a.merge.call({ caseless: b }, l, u)
			: a.isPlainObject(u)
				? a.merge({}, u)
				: a.isArray(u)
					? u.slice()
					: u;
	}
	function s(l, u, f, b) {
		if (a.isUndefined(u)) {
			if (!a.isUndefined(l)) return r(void 0, l, f, b);
		} else return r(l, u, f, b);
	}
	function o(l, u) {
		if (!a.isUndefined(u)) return r(void 0, u);
	}
	function i(l, u) {
		if (a.isUndefined(u)) {
			if (!a.isUndefined(l)) return r(void 0, l);
		} else return r(void 0, u);
	}
	function c(l, u, f) {
		if (f in t) return r(l, u);
		if (f in e) return r(void 0, l);
	}
	const d = {
		url: o,
		method: o,
		data: o,
		baseURL: i,
		transformRequest: i,
		transformResponse: i,
		paramsSerializer: i,
		timeout: i,
		timeoutMessage: i,
		withCredentials: i,
		withXSRFToken: i,
		adapter: i,
		responseType: i,
		xsrfCookieName: i,
		xsrfHeaderName: i,
		onUploadProgress: i,
		onDownloadProgress: i,
		decompress: i,
		maxContentLength: i,
		maxBodyLength: i,
		beforeRedirect: i,
		transport: i,
		httpAgent: i,
		httpsAgent: i,
		cancelToken: i,
		socketPath: i,
		responseEncoding: i,
		validateStatus: c,
		headers: (l, u, f) => s(Be(l), Be(u), f, !0)
	};
	return (
		a.forEach(Object.keys(Object.assign({}, e, t)), function (u) {
			const f = d[u] || s,
				b = f(e[u], t[u], u);
			(a.isUndefined(b) && f !== c) || (n[u] = b);
		}),
		n
	);
}
const ot = (e) => {
		const t = v({}, e);
		let {
			data: n,
			withXSRFToken: r,
			xsrfHeaderName: s,
			xsrfCookieName: o,
			headers: i,
			auth: c
		} = t;
		(t.headers = i = A.from(i)),
			(t.url = Ye(st(t.baseURL, t.url), e.params, e.paramsSerializer)),
			c &&
				i.set(
					'Authorization',
					'Basic ' +
						btoa(
							(c.username || '') +
								':' +
								(c.password ? unescape(encodeURIComponent(c.password)) : '')
						)
				);
		let d;
		if (a.isFormData(n)) {
			if (T.hasStandardBrowserEnv || T.hasStandardBrowserWebWorkerEnv) i.setContentType(void 0);
			else if ((d = i.getContentType()) !== !1) {
				const [l, ...u] = d
					? d
							.split(';')
							.map((f) => f.trim())
							.filter(Boolean)
					: [];
				i.setContentType([l || 'multipart/form-data', ...u].join('; '));
			}
		}
		if (
			T.hasStandardBrowserEnv &&
			(r && a.isFunction(r) && (r = r(t)), r || (r !== !1 && Mn(t.url)))
		) {
			const l = s && o && zn.read(o);
			l && i.set(s, l);
		}
		return t;
	},
	Vn = typeof XMLHttpRequest < 'u',
	Wn =
		Vn &&
		function (e) {
			return new Promise(function (n, r) {
				const s = ot(e);
				let o = s.data;
				const i = A.from(s.headers).normalize();
				let { responseType: c, onUploadProgress: d, onDownloadProgress: l } = s,
					u,
					f,
					b,
					E,
					p;
				function m() {
					E && E(),
						p && p(),
						s.cancelToken && s.cancelToken.unsubscribe(u),
						s.signal && s.signal.removeEventListener('abort', u);
				}
				let h = new XMLHttpRequest();
				h.open(s.method.toUpperCase(), s.url, !0), (h.timeout = s.timeout);
				function w() {
					if (!h) return;
					const R = A.from('getAllResponseHeaders' in h && h.getAllResponseHeaders()),
						O = {
							data: !c || c === 'text' || c === 'json' ? h.responseText : h.response,
							status: h.status,
							statusText: h.statusText,
							headers: R,
							config: e,
							request: h
						};
					rt(
						function (k) {
							n(k), m();
						},
						function (k) {
							r(k), m();
						},
						O
					),
						(h = null);
				}
				'onloadend' in h
					? (h.onloadend = w)
					: (h.onreadystatechange = function () {
							!h ||
								h.readyState !== 4 ||
								(h.status === 0 && !(h.responseURL && h.responseURL.indexOf('file:') === 0)) ||
								setTimeout(w);
						}),
					(h.onabort = function () {
						h && (r(new y('Request aborted', y.ECONNABORTED, e, h)), (h = null));
					}),
					(h.onerror = function () {
						r(new y('Network Error', y.ERR_NETWORK, e, h)), (h = null);
					}),
					(h.ontimeout = function () {
						let _ = s.timeout ? 'timeout of ' + s.timeout + 'ms exceeded' : 'timeout exceeded';
						const O = s.transitional || et;
						s.timeoutErrorMessage && (_ = s.timeoutErrorMessage),
							r(new y(_, O.clarifyTimeoutError ? y.ETIMEDOUT : y.ECONNABORTED, e, h)),
							(h = null);
					}),
					o === void 0 && i.setContentType(null),
					'setRequestHeader' in h &&
						a.forEach(i.toJSON(), function (_, O) {
							h.setRequestHeader(O, _);
						}),
					a.isUndefined(s.withCredentials) || (h.withCredentials = !!s.withCredentials),
					c && c !== 'json' && (h.responseType = s.responseType),
					l && (([b, p] = X(l, !0)), h.addEventListener('progress', b)),
					d &&
						h.upload &&
						(([f, E] = X(d)),
						h.upload.addEventListener('progress', f),
						h.upload.addEventListener('loadend', E)),
					(s.cancelToken || s.signal) &&
						((u = (R) => {
							h && (r(!R || R.type ? new q(null, e, h) : R), h.abort(), (h = null));
						}),
						s.cancelToken && s.cancelToken.subscribe(u),
						s.signal && (s.signal.aborted ? u() : s.signal.addEventListener('abort', u)));
				const g = qn(s.url);
				if (g && T.protocols.indexOf(g) === -1) {
					r(new y('Unsupported protocol ' + g + ':', y.ERR_BAD_REQUEST, e));
					return;
				}
				h.send(o || null);
			});
		},
	Kn = (e, t) => {
		const { length: n } = (e = e ? e.filter(Boolean) : []);
		if (t || n) {
			let r = new AbortController(),
				s;
			const o = function (l) {
				if (!s) {
					(s = !0), c();
					const u = l instanceof Error ? l : this.reason;
					r.abort(u instanceof y ? u : new q(u instanceof Error ? u.message : u));
				}
			};
			let i =
				t &&
				setTimeout(() => {
					(i = null), o(new y(`timeout ${t} of ms exceeded`, y.ETIMEDOUT));
				}, t);
			const c = () => {
				e &&
					(i && clearTimeout(i),
					(i = null),
					e.forEach((l) => {
						l.unsubscribe ? l.unsubscribe(o) : l.removeEventListener('abort', o);
					}),
					(e = null));
			};
			e.forEach((l) => l.addEventListener('abort', o));
			const { signal: d } = r;
			return (d.unsubscribe = () => a.asap(c)), d;
		}
	},
	Xn = function* (e, t) {
		let n = e.byteLength;
		if (n < t) {
			yield e;
			return;
		}
		let r = 0,
			s;
		for (; r < n; ) (s = r + t), yield e.slice(r, s), (r = s);
	},
	Gn = async function* (e, t) {
		for await (const n of Qn(e)) yield* Xn(n, t);
	},
	Qn = async function* (e) {
		if (e[Symbol.asyncIterator]) {
			yield* e;
			return;
		}
		const t = e.getReader();
		try {
			for (;;) {
				const { done: n, value: r } = await t.read();
				if (n) break;
				yield r;
			}
		} finally {
			await t.cancel();
		}
	},
	Ue = (e, t, n, r) => {
		const s = Gn(e, t);
		let o = 0,
			i,
			c = (d) => {
				i || ((i = !0), r && r(d));
			};
		return new ReadableStream(
			{
				async pull(d) {
					try {
						const { done: l, value: u } = await s.next();
						if (l) {
							c(), d.close();
							return;
						}
						let f = u.byteLength;
						if (n) {
							let b = (o += f);
							n(b);
						}
						d.enqueue(new Uint8Array(u));
					} catch (l) {
						throw (c(l), l);
					}
				},
				cancel(d) {
					return c(d), s.return();
				}
			},
			{ highWaterMark: 2 }
		);
	},
	te = typeof fetch == 'function' && typeof Request == 'function' && typeof Response == 'function',
	it = te && typeof ReadableStream == 'function',
	Zn =
		te &&
		(typeof TextEncoder == 'function'
			? (
					(e) => (t) =>
						e.encode(t)
				)(new TextEncoder())
			: async (e) => new Uint8Array(await new Response(e).arrayBuffer())),
	at = (e, ...t) => {
		try {
			return !!e(...t);
		} catch {
			return !1;
		}
	},
	Yn =
		it &&
		at(() => {
			let e = !1;
			const t = new Request(T.origin, {
				body: new ReadableStream(),
				method: 'POST',
				get duplex() {
					return (e = !0), 'half';
				}
			}).headers.has('Content-Type');
			return e && !t;
		}),
	ve = 64 * 1024,
	me = it && at(() => a.isReadableStream(new Response('').body)),
	G = { stream: me && ((e) => e.body) };
te &&
	((e) => {
		['text', 'arrayBuffer', 'blob', 'formData', 'stream'].forEach((t) => {
			!G[t] &&
				(G[t] = a.isFunction(e[t])
					? (n) => n[t]()
					: (n, r) => {
							throw new y(`Response type '${t}' is not supported`, y.ERR_NOT_SUPPORT, r);
						});
		});
	})(new Response());
const er = async (e) => {
		if (e == null) return 0;
		if (a.isBlob(e)) return e.size;
		if (a.isSpecCompliantForm(e))
			return (await new Request(T.origin, { method: 'POST', body: e }).arrayBuffer()).byteLength;
		if (a.isArrayBufferView(e) || a.isArrayBuffer(e)) return e.byteLength;
		if ((a.isURLSearchParams(e) && (e = e + ''), a.isString(e))) return (await Zn(e)).byteLength;
	},
	tr = async (e, t) => {
		const n = a.toFiniteNumber(e.getContentLength());
		return n ?? er(t);
	},
	nr =
		te &&
		(async (e) => {
			let {
				url: t,
				method: n,
				data: r,
				signal: s,
				cancelToken: o,
				timeout: i,
				onDownloadProgress: c,
				onUploadProgress: d,
				responseType: l,
				headers: u,
				withCredentials: f = 'same-origin',
				fetchOptions: b
			} = ot(e);
			l = l ? (l + '').toLowerCase() : 'text';
			let E = Kn([s, o && o.toAbortSignal()], i),
				p;
			const m =
				E &&
				E.unsubscribe &&
				(() => {
					E.unsubscribe();
				});
			let h;
			try {
				if (d && Yn && n !== 'get' && n !== 'head' && (h = await tr(u, r)) !== 0) {
					let O = new Request(t, { method: 'POST', body: r, duplex: 'half' }),
						F;
					if (
						(a.isFormData(r) && (F = O.headers.get('content-type')) && u.setContentType(F), O.body)
					) {
						const [k, $] = ke(h, X(De(d)));
						r = Ue(O.body, ve, k, $);
					}
				}
				a.isString(f) || (f = f ? 'include' : 'omit');
				const w = 'credentials' in Request.prototype;
				p = new Request(t, {
					...b,
					signal: E,
					method: n.toUpperCase(),
					headers: u.normalize().toJSON(),
					body: r,
					duplex: 'half',
					credentials: w ? f : void 0
				});
				let g = await fetch(p);
				const R = me && (l === 'stream' || l === 'response');
				if (me && (c || (R && m))) {
					const O = {};
					['status', 'statusText', 'headers'].forEach((Re) => {
						O[Re] = g[Re];
					});
					const F = a.toFiniteNumber(g.headers.get('content-length')),
						[k, $] = (c && ke(F, X(De(c), !0))) || [];
					g = new Response(
						Ue(g.body, ve, k, () => {
							$ && $(), m && m();
						}),
						O
					);
				}
				l = l || 'text';
				let _ = await G[a.findKey(G, l) || 'text'](g, e);
				return (
					!R && m && m(),
					await new Promise((O, F) => {
						rt(O, F, {
							data: _,
							headers: A.from(g.headers),
							status: g.status,
							statusText: g.statusText,
							config: e,
							request: p
						});
					})
				);
			} catch (w) {
				throw (
					(m && m(),
					w && w.name === 'TypeError' && /fetch/i.test(w.message)
						? Object.assign(new y('Network Error', y.ERR_NETWORK, e, p), { cause: w.cause || w })
						: y.from(w, w && w.code, e, p))
				);
			}
		}),
	ye = { http: bn, xhr: Wn, fetch: nr };
a.forEach(ye, (e, t) => {
	if (e) {
		try {
			Object.defineProperty(e, 'name', { value: t });
		} catch {}
		Object.defineProperty(e, 'adapterName', { value: t });
	}
});
const je = (e) => `- ${e}`,
	rr = (e) => a.isFunction(e) || e === null || e === !1,
	ct = {
		getAdapter: (e) => {
			e = a.isArray(e) ? e : [e];
			const { length: t } = e;
			let n, r;
			const s = {};
			for (let o = 0; o < t; o++) {
				n = e[o];
				let i;
				if (((r = n), !rr(n) && ((r = ye[(i = String(n)).toLowerCase()]), r === void 0)))
					throw new y(`Unknown adapter '${i}'`);
				if (r) break;
				s[i || '#' + o] = r;
			}
			if (!r) {
				const o = Object.entries(s).map(
					([c, d]) =>
						`adapter ${c} ` +
						(d === !1 ? 'is not supported by the environment' : 'is not available in the build')
				);
				let i = t
					? o.length > 1
						? `since :
` +
							o.map(je).join(`
`)
						: ' ' + je(o[0])
					: 'as no adapter specified';
				throw new y('There is no suitable adapter to dispatch the request ' + i, 'ERR_NOT_SUPPORT');
			}
			return r;
		},
		adapters: ye
	};
function fe(e) {
	if ((e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted))
		throw new q(null, e);
}
function qe(e) {
	return (
		fe(e),
		(e.headers = A.from(e.headers)),
		(e.data = ue.call(e, e.transformRequest)),
		['post', 'put', 'patch'].indexOf(e.method) !== -1 &&
			e.headers.setContentType('application/x-www-form-urlencoded', !1),
		ct
			.getAdapter(e.adapter || z.adapter)(e)
			.then(
				function (r) {
					return (
						fe(e), (r.data = ue.call(e, e.transformResponse, r)), (r.headers = A.from(r.headers)), r
					);
				},
				function (r) {
					return (
						nt(r) ||
							(fe(e),
							r &&
								r.response &&
								((r.response.data = ue.call(e, e.transformResponse, r.response)),
								(r.response.headers = A.from(r.response.headers)))),
						Promise.reject(r)
					);
				}
			)
	);
}
const lt = '1.7.9',
	ne = {};
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach((e, t) => {
	ne[e] = function (r) {
		return typeof r === e || 'a' + (t < 1 ? 'n ' : ' ') + e;
	};
});
const He = {};
ne.transitional = function (t, n, r) {
	function s(o, i) {
		return '[Axios v' + lt + "] Transitional option '" + o + "'" + i + (r ? '. ' + r : '');
	}
	return (o, i, c) => {
		if (t === !1) throw new y(s(i, ' has been removed' + (n ? ' in ' + n : '')), y.ERR_DEPRECATED);
		return (
			n &&
				!He[i] &&
				((He[i] = !0),
				console.warn(
					s(i, ' has been deprecated since v' + n + ' and will be removed in the near future')
				)),
			t ? t(o, i, c) : !0
		);
	};
};
ne.spelling = function (t) {
	return (n, r) => (console.warn(`${r} is likely a misspelling of ${t}`), !0);
};
function sr(e, t, n) {
	if (typeof e != 'object') throw new y('options must be an object', y.ERR_BAD_OPTION_VALUE);
	const r = Object.keys(e);
	let s = r.length;
	for (; s-- > 0; ) {
		const o = r[s],
			i = t[o];
		if (i) {
			const c = e[o],
				d = c === void 0 || i(c, o, e);
			if (d !== !0) throw new y('option ' + o + ' must be ' + d, y.ERR_BAD_OPTION_VALUE);
			continue;
		}
		if (n !== !0) throw new y('Unknown option ' + o, y.ERR_BAD_OPTION);
	}
}
const K = { assertOptions: sr, validators: ne },
	P = K.validators;
let U = class {
	constructor(t) {
		(this.defaults = t), (this.interceptors = { request: new Fe(), response: new Fe() });
	}
	async request(t, n) {
		try {
			return await this._request(t, n);
		} catch (r) {
			if (r instanceof Error) {
				let s = {};
				Error.captureStackTrace ? Error.captureStackTrace(s) : (s = new Error());
				const o = s.stack ? s.stack.replace(/^.+\n/, '') : '';
				try {
					r.stack
						? o &&
							!String(r.stack).endsWith(o.replace(/^.+\n.+\n/, '')) &&
							(r.stack +=
								`
` + o)
						: (r.stack = o);
				} catch {}
			}
			throw r;
		}
	}
	_request(t, n) {
		typeof t == 'string' ? ((n = n || {}), (n.url = t)) : (n = t || {}), (n = v(this.defaults, n));
		const { transitional: r, paramsSerializer: s, headers: o } = n;
		r !== void 0 &&
			K.assertOptions(
				r,
				{
					silentJSONParsing: P.transitional(P.boolean),
					forcedJSONParsing: P.transitional(P.boolean),
					clarifyTimeoutError: P.transitional(P.boolean)
				},
				!1
			),
			s != null &&
				(a.isFunction(s)
					? (n.paramsSerializer = { serialize: s })
					: K.assertOptions(s, { encode: P.function, serialize: P.function }, !0)),
			K.assertOptions(
				n,
				{ baseUrl: P.spelling('baseURL'), withXsrfToken: P.spelling('withXSRFToken') },
				!0
			),
			(n.method = (n.method || this.defaults.method || 'get').toLowerCase());
		let i = o && a.merge(o.common, o[n.method]);
		o &&
			a.forEach(['delete', 'get', 'head', 'post', 'put', 'patch', 'common'], (p) => {
				delete o[p];
			}),
			(n.headers = A.concat(i, o));
		const c = [];
		let d = !0;
		this.interceptors.request.forEach(function (m) {
			(typeof m.runWhen == 'function' && m.runWhen(n) === !1) ||
				((d = d && m.synchronous), c.unshift(m.fulfilled, m.rejected));
		});
		const l = [];
		this.interceptors.response.forEach(function (m) {
			l.push(m.fulfilled, m.rejected);
		});
		let u,
			f = 0,
			b;
		if (!d) {
			const p = [qe.bind(this), void 0];
			for (p.unshift.apply(p, c), p.push.apply(p, l), b = p.length, u = Promise.resolve(n); f < b; )
				u = u.then(p[f++], p[f++]);
			return u;
		}
		b = c.length;
		let E = n;
		for (f = 0; f < b; ) {
			const p = c[f++],
				m = c[f++];
			try {
				E = p(E);
			} catch (h) {
				m.call(this, h);
				break;
			}
		}
		try {
			u = qe.call(this, E);
		} catch (p) {
			return Promise.reject(p);
		}
		for (f = 0, b = l.length; f < b; ) u = u.then(l[f++], l[f++]);
		return u;
	}
	getUri(t) {
		t = v(this.defaults, t);
		const n = st(t.baseURL, t.url);
		return Ye(n, t.params, t.paramsSerializer);
	}
};
a.forEach(['delete', 'get', 'head', 'options'], function (t) {
	U.prototype[t] = function (n, r) {
		return this.request(v(r || {}, { method: t, url: n, data: (r || {}).data }));
	};
});
a.forEach(['post', 'put', 'patch'], function (t) {
	function n(r) {
		return function (o, i, c) {
			return this.request(
				v(c || {}, {
					method: t,
					headers: r ? { 'Content-Type': 'multipart/form-data' } : {},
					url: o,
					data: i
				})
			);
		};
	}
	(U.prototype[t] = n()), (U.prototype[t + 'Form'] = n(!0));
});
let or = class ut {
	constructor(t) {
		if (typeof t != 'function') throw new TypeError('executor must be a function.');
		let n;
		this.promise = new Promise(function (o) {
			n = o;
		});
		const r = this;
		this.promise.then((s) => {
			if (!r._listeners) return;
			let o = r._listeners.length;
			for (; o-- > 0; ) r._listeners[o](s);
			r._listeners = null;
		}),
			(this.promise.then = (s) => {
				let o;
				const i = new Promise((c) => {
					r.subscribe(c), (o = c);
				}).then(s);
				return (
					(i.cancel = function () {
						r.unsubscribe(o);
					}),
					i
				);
			}),
			t(function (o, i, c) {
				r.reason || ((r.reason = new q(o, i, c)), n(r.reason));
			});
	}
	throwIfRequested() {
		if (this.reason) throw this.reason;
	}
	subscribe(t) {
		if (this.reason) {
			t(this.reason);
			return;
		}
		this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
	}
	unsubscribe(t) {
		if (!this._listeners) return;
		const n = this._listeners.indexOf(t);
		n !== -1 && this._listeners.splice(n, 1);
	}
	toAbortSignal() {
		const t = new AbortController(),
			n = (r) => {
				t.abort(r);
			};
		return this.subscribe(n), (t.signal.unsubscribe = () => this.unsubscribe(n)), t.signal;
	}
	static source() {
		let t;
		return {
			token: new ut(function (s) {
				t = s;
			}),
			cancel: t
		};
	}
};
function ir(e) {
	return function (n) {
		return e.apply(null, n);
	};
}
function ar(e) {
	return a.isObject(e) && e.isAxiosError === !0;
}
const be = {
	Continue: 100,
	SwitchingProtocols: 101,
	Processing: 102,
	EarlyHints: 103,
	Ok: 200,
	Created: 201,
	Accepted: 202,
	NonAuthoritativeInformation: 203,
	NoContent: 204,
	ResetContent: 205,
	PartialContent: 206,
	MultiStatus: 207,
	AlreadyReported: 208,
	ImUsed: 226,
	MultipleChoices: 300,
	MovedPermanently: 301,
	Found: 302,
	SeeOther: 303,
	NotModified: 304,
	UseProxy: 305,
	Unused: 306,
	TemporaryRedirect: 307,
	PermanentRedirect: 308,
	BadRequest: 400,
	Unauthorized: 401,
	PaymentRequired: 402,
	Forbidden: 403,
	NotFound: 404,
	MethodNotAllowed: 405,
	NotAcceptable: 406,
	ProxyAuthenticationRequired: 407,
	RequestTimeout: 408,
	Conflict: 409,
	Gone: 410,
	LengthRequired: 411,
	PreconditionFailed: 412,
	PayloadTooLarge: 413,
	UriTooLong: 414,
	UnsupportedMediaType: 415,
	RangeNotSatisfiable: 416,
	ExpectationFailed: 417,
	ImATeapot: 418,
	MisdirectedRequest: 421,
	UnprocessableEntity: 422,
	Locked: 423,
	FailedDependency: 424,
	TooEarly: 425,
	UpgradeRequired: 426,
	PreconditionRequired: 428,
	TooManyRequests: 429,
	RequestHeaderFieldsTooLarge: 431,
	UnavailableForLegalReasons: 451,
	InternalServerError: 500,
	NotImplemented: 501,
	BadGateway: 502,
	ServiceUnavailable: 503,
	GatewayTimeout: 504,
	HttpVersionNotSupported: 505,
	VariantAlsoNegotiates: 506,
	InsufficientStorage: 507,
	LoopDetected: 508,
	NotExtended: 510,
	NetworkAuthenticationRequired: 511
};
Object.entries(be).forEach(([e, t]) => {
	be[t] = e;
});
function ft(e) {
	const t = new U(e),
		n = Ie(U.prototype.request, t);
	return (
		a.extend(n, U.prototype, t, { allOwnKeys: !0 }),
		a.extend(n, t, null, { allOwnKeys: !0 }),
		(n.create = function (s) {
			return ft(v(e, s));
		}),
		n
	);
}
const S = ft(z);
S.Axios = U;
S.CanceledError = q;
S.CancelToken = or;
S.isCancel = nt;
S.VERSION = lt;
S.toFormData = ee;
S.AxiosError = y;
S.Cancel = S.CanceledError;
S.all = function (t) {
	return Promise.all(t);
};
S.spread = ir;
S.isAxiosError = ar;
S.mergeConfig = v;
S.AxiosHeaders = A;
S.formToJSON = (e) => tt(a.isHTMLForm(e) ? new FormData(e) : e);
S.getAdapter = ct.getAdapter;
S.HttpStatusCode = be;
S.default = S;
const {
	Axios: Sr,
	AxiosError: Rr,
	CanceledError: Or,
	isCancel: Tr,
	CancelToken: Ar,
	VERSION: xr,
	all: _r,
	Cancel: Cr,
	isAxiosError: Nr,
	spread: Pr,
	toFormData: Fr,
	AxiosHeaders: Lr,
	HttpStatusCode: kr,
	formToJSON: Dr,
	getAdapter: Br,
	mergeConfig: Ur
} = S;
function cr(e, t) {
	e.key === 'Enter' && t();
}
var lr = we(
		'<a class="w-full items-center flex flex-col"><div class="w-[50%] h-20 bg-white shadow-lg rounded-lg my-5 p-3 flex justify-between items-center"><p><strong> </strong></p> <p> </p></div></a>'
	),
	ur = we('<div class="w-full flex flex-col items-center"></div>'),
	fr = we(
		'<main class="flex flex-col items-center min-h-screen bg-gray-100 p-6 svelte-nf3esq"><h1 class="text-3xl font-bold text-center mb-6 text-gray-800">Search Page</h1> <div class="flex space-x-2 w-full max-w-md"><input type="text" placeholder="Search by company name" class="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"> <button class="p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Search</button></div> <!></main>'
	);
function vr(e, t) {
	wt(t, !0);
	let n = Ae(oe([])),
		r = Ae('');
	async function s() {
		if ((se(r, oe(C(r).trim())), console.log(C(r)), C(r) != '')) {
			const f = await S.get('http://127.0.0.1:8000/stock', { params: { search: C(r) } });
			se(n, oe(f.data.data)), console.log('Results', C(n));
		}
	}
	var o = fr(),
		i = J(D(o), 2),
		c = D(i);
	xt(c), (c.__keydown = [cr, s]);
	var d = J(c, 2);
	(d.__click = s), L(i);
	var l = J(i, 2);
	{
		var u = (f) => {
			var b = ur();
			Ot(
				b,
				21,
				() => C(n),
				Tt,
				(E, p) => {
					var m = lr(),
						h = D(m),
						w = D(h),
						g = D(w),
						R = D(g, !0);
					L(g), L(w);
					var _ = J(w, 2),
						O = D(_, !0);
					L(_),
						L(h),
						L(m),
						Et(() => {
							_t(m, 'href', `/stocks/${C(p).ticker}`), xe(R, C(p).ticker), xe(O, C(p).name);
						}),
						re(E, m);
				}
			),
				L(b),
				re(f, b);
		};
		Rt(l, (f) => {
			C(n).length > 0 && f(u);
		});
	}
	L(o),
		Pt(
			c,
			() => C(r),
			(f) => se(r, f)
		),
		re(e, o),
		gt();
}
St(['keydown', 'click']);
export { vr as component };
