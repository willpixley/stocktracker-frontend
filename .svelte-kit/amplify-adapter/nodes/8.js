import * as server from '../entries/pages/trades/_id_/_page.server.ts.js';

export const index = 8;
let component_cache;
export const component = async () =>
	(component_cache ??= (await import('../entries/pages/trades/_id_/_page.svelte.js')).default);
export { server };
export const server_id = 'src/routes/trades/[id]/+page.server.ts';
export const imports = [
	'_app/immutable/nodes/8.Bu4_eybt.js',
	'_app/immutable/chunks/OqE_2Snn.js',
	'_app/immutable/chunks/Ynks4hVH.js',
	'_app/immutable/chunks/0PGRgBmW.js',
	'_app/immutable/chunks/Dt44hy-N.js',
	'_app/immutable/chunks/BeXT4T_v.js',
	'_app/immutable/chunks/-M0MwnEV.js',
	'_app/immutable/chunks/CC-f6snc.js',
	'_app/immutable/chunks/CRolmvzv.js',
	'_app/immutable/chunks/DJDqwivS.js',
	'_app/immutable/chunks/CP9ULRdw.js'
];
export const stylesheets = [];
export const fonts = [];
