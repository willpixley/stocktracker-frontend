import * as server from '../entries/pages/trades/_page.server.ts.js';

export const index = 9;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/trades/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/trades/+page.server.ts";
export const imports = ["_app/immutable/nodes/9.BpIAQ1na.js","_app/immutable/chunks/Bg9kRutz.js","_app/immutable/chunks/DegsgbsN.js","_app/immutable/chunks/DT5_h6ex.js","_app/immutable/chunks/BHyeaF4V.js","_app/immutable/chunks/B0kgsvls.js","_app/immutable/chunks/ClTzmbyL.js","_app/immutable/chunks/DSLWBiZG.js","_app/immutable/chunks/BE4_gmHA.js","_app/immutable/chunks/C3QF1EE5.js","_app/immutable/chunks/COJPL8Gv.js","_app/immutable/chunks/CiQEmUdT.js","_app/immutable/chunks/CP9ULRdw.js"];
export const stylesheets = [];
export const fonts = [];
