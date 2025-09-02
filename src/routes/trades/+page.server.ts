import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();
export async function load({ params }: { params: any }) {
	const BASE_URL = import.meta.env.VITE_BACKEND_API_URL;

	try {
		const trades = await axios.get(`${BASE_URL}/trades/flagged?nocache=${new Date().getTime()}`);
		return {
			trades: trades.data.results
		};
	} catch (e) {
		console.log(e);
	}
}
