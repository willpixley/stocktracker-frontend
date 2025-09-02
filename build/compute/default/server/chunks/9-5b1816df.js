import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();
async function load({ params }) {
  const BASE_URL = "https://api.congressstockwatch.com";
  try {
    const trades = await axios.get(`${BASE_URL}/trades/flagged?nocache=${( new Date()).getTime()}`);
    return {
      trades: trades.data.results
    };
  } catch (e) {
    console.log(e);
  }
}

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 9;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-3faced67.js')).default;
const server_id = "src/routes/trades/+page.server.ts";
const imports = ["_app/immutable/nodes/9.BpIAQ1na.js","_app/immutable/chunks/Bg9kRutz.js","_app/immutable/chunks/DegsgbsN.js","_app/immutable/chunks/DT5_h6ex.js","_app/immutable/chunks/BHyeaF4V.js","_app/immutable/chunks/B0kgsvls.js","_app/immutable/chunks/ClTzmbyL.js","_app/immutable/chunks/DSLWBiZG.js","_app/immutable/chunks/BE4_gmHA.js","_app/immutable/chunks/C3QF1EE5.js","_app/immutable/chunks/COJPL8Gv.js","_app/immutable/chunks/CiQEmUdT.js","_app/immutable/chunks/CP9ULRdw.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=9-5b1816df.js.map
