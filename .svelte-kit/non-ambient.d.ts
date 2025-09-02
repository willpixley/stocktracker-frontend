
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	export interface AppTypes {
		RouteId(): "/" | "/about" | "/market" | "/members" | "/members/[id]" | "/stocks" | "/stocks/[ticker]" | "/trades" | "/trades/[id]";
		RouteParams(): {
			"/members/[id]": { id: string };
			"/stocks/[ticker]": { ticker: string };
			"/trades/[id]": { id: string }
		};
		LayoutParams(): {
			"/": { id?: string; ticker?: string };
			"/about": Record<string, never>;
			"/market": Record<string, never>;
			"/members": { id?: string };
			"/members/[id]": { id: string };
			"/stocks": { ticker?: string };
			"/stocks/[ticker]": { ticker: string };
			"/trades": { id?: string };
			"/trades/[id]": { id: string }
		};
		Pathname(): "/" | "/about" | "/about/" | "/market" | "/market/" | "/members" | "/members/" | `/members/${string}` & {} | `/members/${string}/` & {} | "/stocks" | "/stocks/" | `/stocks/${string}` & {} | `/stocks/${string}/` & {} | "/trades" | "/trades/" | `/trades/${string}` & {} | `/trades/${string}/` & {};
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/favicon.png" | string & {};
	}
}