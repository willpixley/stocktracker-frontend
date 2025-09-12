import axios from 'axios';

async function load({ params }) {
  const BASE_URL = "http://localhost:8000";
  console.log("Base url", BASE_URL);
  try {
    const trades = await axios.get(`${BASE_URL}/trades`);
    return {
      trades: trades.data.results
    };
  } catch (e) {
    console.log(e);
  }
}

var _page_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 2;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-BJJTgPqA.js')).default;
const universal_id = "src/routes/+page.ts";
const imports = ["_app/immutable/nodes/2.DEKxx-nz.js","_app/immutable/chunks/BQJyKPGC.js","_app/immutable/chunks/Bzak7iHL.js","_app/immutable/chunks/DSNjSPQB.js","_app/immutable/chunks/XLCrm3M2.js","_app/immutable/chunks/CQDC-aga.js","_app/immutable/chunks/CN0i8xaz.js","_app/immutable/chunks/Bd8s1yK_.js","_app/immutable/chunks/DtGOfqIC.js","_app/immutable/chunks/D1iG-USv.js","_app/immutable/chunks/BofesM0e.js","_app/immutable/chunks/Ct61ajN9.js","_app/immutable/chunks/CP9ULRdw.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page_ts as universal, universal_id };
//# sourceMappingURL=2-CbDwuKTZ.js.map
