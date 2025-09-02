const manifest = (() => {
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
		client: {start:"_app/immutable/entry/start.Vod4_K21.js",app:"_app/immutable/entry/app.Cq-2WONs.js",imports:["_app/immutable/entry/start.Vod4_K21.js","_app/immutable/chunks/BMiRAh-V.js","_app/immutable/chunks/CL4cUjkh.js","_app/immutable/chunks/DT5_h6ex.js","_app/immutable/chunks/BE4_gmHA.js","_app/immutable/chunks/CqW8xYtU.js","_app/immutable/entry/app.Cq-2WONs.js","_app/immutable/chunks/DT5_h6ex.js","_app/immutable/chunks/BE4_gmHA.js","_app/immutable/chunks/Bg9kRutz.js","_app/immutable/chunks/DvG1RpL7.js","_app/immutable/chunks/ClTzmbyL.js","_app/immutable/chunks/B0kgsvls.js","_app/immutable/chunks/CL4cUjkh.js","_app/immutable/chunks/CqW8xYtU.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./chunks/0-05fe1bad.js')),
			__memo(() => import('./chunks/1-0ec1bd48.js')),
			__memo(() => import('./chunks/2-4c69a2a0.js')),
			__memo(() => import('./chunks/3-cbf31ccc.js')),
			__memo(() => import('./chunks/4-9750872a.js')),
			__memo(() => import('./chunks/5-a4521749.js')),
			__memo(() => import('./chunks/6-1b5dff99.js')),
			__memo(() => import('./chunks/7-84d5ba0a.js')),
			__memo(() => import('./chunks/8-d60597c0.js')),
			__memo(() => import('./chunks/9-5b1816df.js')),
			__memo(() => import('./chunks/10-eb2deaf1.js'))
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

const prerendered = new Set([]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map
