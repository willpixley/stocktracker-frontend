import axios from 'axios';

export async function load({ params }: { params: any }) {
	const BASE_URL = 'https://api.congressstockwatch.com';
	const CONGRESS_KEY = 'Fi7HCmCMb9tmK780KedcRG0diNx4TT0z6YJxiyzv';

	try {
		const results = await axios.get(`${BASE_URL}/members`);

		return {
			members: results.data.members
		};
	} catch (e) {
		console.log(e);
	}
}
