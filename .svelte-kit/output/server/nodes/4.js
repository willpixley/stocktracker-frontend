export const index = 4;
let component_cache;
export const component = async () =>
	(component_cache ??= (await import('../entries/pages/members/_page.svelte.js')).default);
export const imports = [
	'_app/immutable/nodes/4.CH8XLSwF.js',
	'_app/immutable/chunks/OqE_2Snn.js',
	'_app/immutable/chunks/Ynks4hVH.js',
	'_app/immutable/chunks/DV-sUvXB.js'
];
export const stylesheets = [];
export const fonts = [];
