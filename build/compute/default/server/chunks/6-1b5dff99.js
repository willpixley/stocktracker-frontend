import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();
async function load({ params }) {
  const searchParams = { id: params.id };
  const BASE_URL = "https://api.congressstockwatch.com";
  const CONGRESS_KEY = "Fi7HCmCMb9tmK780KedcRG0diNx4TT0z6YJxiyzv";
  try {
    const trades = await axios.get(`${BASE_URL}/trades/member`, {
      params: searchParams
    });
    const memberSearchParams = { api_key: CONGRESS_KEY };
    const member = await axios.get(`https://api.congress.gov/v3/member/${params.id}`, {
      params: memberSearchParams
    });
    return {
      member: member.data.member,
      trades: trades.data.trades,
      history: trades.data.history
    };
  } catch (e) {
    console.log(e);
  }
}

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 6;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-5e791cb0.js')).default;
const server_id = "src/routes/members/[id]/+page.server.ts";
const imports = ["_app/immutable/nodes/6.8ZeaJcpC.js","_app/immutable/chunks/Bg9kRutz.js","_app/immutable/chunks/DegsgbsN.js","_app/immutable/chunks/DT5_h6ex.js","_app/immutable/chunks/BE4_gmHA.js","_app/immutable/chunks/DvG1RpL7.js","_app/immutable/chunks/C3QF1EE5.js","_app/immutable/chunks/COJPL8Gv.js","_app/immutable/chunks/CiQEmUdT.js","_app/immutable/chunks/BHyeaF4V.js","_app/immutable/chunks/B0kgsvls.js","_app/immutable/chunks/ClTzmbyL.js","_app/immutable/chunks/CP9ULRdw.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=6-1b5dff99.js.map
