import axios from "axios";
import dotenv from "dotenv";
dotenv.config();
async function load({ params }) {
  const BASE_URL = "https://api.congressstockwatch.com";
  try {
    const trades = await axios.get(`${BASE_URL}/trades`);
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
