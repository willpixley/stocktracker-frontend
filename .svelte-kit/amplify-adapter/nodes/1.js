export const index = 1;
let component_cache;
export const component = async () =>
	(component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default);
export const imports = [
	'_app/immutable/nodes/1.DLHOALCe.js',
	'_app/immutable/chunks/OqE_2Snn.js',
	'_app/immutable/chunks/Ynks4hVH.js',
	'_app/immutable/chunks/0PGRgBmW.js',
	'_app/immutable/chunks/Dt44hy-N.js',
	'_app/immutable/chunks/-M0MwnEV.js',
	'_app/immutable/chunks/D37u1lxz.js',
	'_app/immutable/chunks/DMvPj5D1.js'
];
export const stylesheets = [];
export const fonts = [];
