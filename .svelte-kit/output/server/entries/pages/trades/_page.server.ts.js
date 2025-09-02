import axios from "axios";
import dotenv from "dotenv";
dotenv.config();
async function load({ params }) {
  const BASE_URL = "https://api.congressstockwatch.com";
  try {
    const trades = await axios.get(`${BASE_URL}/trades/flagged?nocache=${(/* @__PURE__ */ new Date()).getTime()}`);
    return {
      trades: trades.data.results
    };
  } catch (e) {
    console.log(e);
  }
}
export {
  load
};
