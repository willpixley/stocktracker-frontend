import axios from "axios";
async function load() {
  const BASE_URL = "https://api.congressstockwatch.com";
  try {
    const trends = await axios.get(`${BASE_URL}/market/trends`, {});
    return {
      trends: trends.data
    };
  } catch (e) {
    console.log(e);
  }
}
export {
  load
};
