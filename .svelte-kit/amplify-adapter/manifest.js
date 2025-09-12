export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.BPHXtdSR.js",app:"_app/immutable/entry/app.DhIjtOP3.js",imports:["_app/immutable/entry/start.BPHXtdSR.js","_app/immutable/chunks/DdzzHpZI.js","_app/immutable/chunks/OS8bO3dS.js","_app/immutable/chunks/XLCrm3M2.js","_app/immutable/chunks/DtGOfqIC.js","_app/immutable/chunks/B528Yyv5.js","_app/immutable/entry/app.DhIjtOP3.js","_app/immutable/chunks/XLCrm3M2.js","_app/immutable/chunks/DtGOfqIC.js","_app/immutable/chunks/Bzak7iHL.js","_app/immutable/chunks/OS8bO3dS.js","_app/immutable/chunks/B528Yyv5.js","_app/immutable/chunks/DKayEiXG.js","_app/immutable/chunks/B-ZSc5eS.js","_app/immutable/chunks/CN0i8xaz.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js')),
			__memo(() => import('./nodes/9.js')),
			__memo(() => import('./nodes/10.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/market",
				pattern: /^\/market\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/members",
				pattern: /^\/members\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/members/[id]",
				pattern: /^\/members\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/stocks",
				pattern: /^\/stocks\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/stocks/[ticker]",
				pattern: /^\/stocks\/([^/]+?)\/?$/,
				params: [{"name":"ticker","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/trades",
				pattern: /^\/trades\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/trades/[id]",
				pattern: /^\/trades\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

export const prerendered = new Set([]);
