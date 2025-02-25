import axios from 'axios';
export async function load({ params }: { params: any }) {
	try {
		const trades = await axios.get(
			`http://127.0.0.1:8000/trades/flagged?nocache=${new Date().getTime()}`
		);
		return {
			trades: trades.data.results
		};
	} catch (e) {
		console.log(e);
	}
}
