import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();
async function load({ params }) {
  const API_KEY = "cunbfn1r01qqo190vd50cunbfn1r01qqo190vd5g";
  const CONGRESS_KEY = "Fi7HCmCMb9tmK780KedcRG0diNx4TT0z6YJxiyzv";
  const searchParams = { trade_id: params.id };
  const BASE_URL = "https://api.congressstockwatch.com";
  try {
    const trade = await axios.get(`${BASE_URL}/trades`, {
      params: searchParams
    });
    const profileSearchParams = {
      token: API_KEY,
      symbol: trade.data.stock.ticker
    };
    const profile = await axios.get(`https://finnhub.io/api/v1/stock/profile2`, {
      params: profileSearchParams
    });
    const memberSearchParams = { api_key: CONGRESS_KEY };
    const member = await axios.get(
      `https://api.congress.gov/v3/member/${trade.data.member.bio_guide_id}`,
      { params: memberSearchParams }
    );
    return {
      member: member.data.member,
      trade: trade.data,
      stock: profile.data
    };
  } catch (e) {
    console.log(e);
  }
}

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 10;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-60a4579d.js')).default;
const server_id = "src/routes/trades/[id]/+page.server.ts";
const imports = ["_app/immutable/nodes/10.BRWy0Tx2.js","_app/immutable/chunks/Bg9kRutz.js","_app/immutable/chunks/DegsgbsN.js","_app/immutable/chunks/DT5_h6ex.js","_app/immutable/chunks/BE4_gmHA.js","_app/immutable/chunks/COJPL8Gv.js","_app/immutable/chunks/BHyeaF4V.js","_app/immutable/chunks/B0kgsvls.js","_app/immutable/chunks/ClTzmbyL.js","_app/immutable/chunks/D9hLykie.js","_app/immutable/chunks/CP9ULRdw.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=10-eb2deaf1.js.map
