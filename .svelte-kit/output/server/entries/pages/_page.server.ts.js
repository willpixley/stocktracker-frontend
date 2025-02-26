import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();
async function load({ params }) {
	const BASE_URL = process.env.BACKEND_BASE_URL;
	try {
		const trades = await axios.get(
			`${BASE_URL}/trades?nocache=${/* @__PURE__ */ new Date().getTime()}`
		);
		return {
			trades: trades.data.results
		};
	} catch (e) {
		console.log(e);
	}
}
export { load };
