export const index = 0;
let component_cache;
export const component = async () =>
	(component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default);
export const imports = [
	'_app/immutable/nodes/0.CZ-etBss.js',
	'_app/immutable/chunks/OqE_2Snn.js',
	'_app/immutable/chunks/Ynks4hVH.js'
];
export const stylesheets = ['_app/immutable/assets/0.D9clb2Kd.css'];
export const fonts = [];
