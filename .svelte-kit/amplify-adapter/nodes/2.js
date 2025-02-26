import * as server from '../entries/pages/_page.server.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.ts";
export const imports = ["_app/immutable/nodes/2.6iFK6MA_.js","_app/immutable/chunks/OqE_2Snn.js","_app/immutable/chunks/Ynks4hVH.js","_app/immutable/chunks/0PGRgBmW.js","_app/immutable/chunks/-M0MwnEV.js","_app/immutable/chunks/CC-f6snc.js","_app/immutable/chunks/CRolmvzv.js","_app/immutable/chunks/RTtC9ka2.js","_app/immutable/chunks/Dt44hy-N.js","_app/immutable/chunks/CYxyJEWj.js","_app/immutable/chunks/BeXT4T_v.js","_app/immutable/chunks/CP9ULRdw.js"];
export const stylesheets = [];
export const fonts = [];
