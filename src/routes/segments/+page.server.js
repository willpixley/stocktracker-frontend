import axios from 'axios';

export async function load({ url }) {
	const BASE_URL = import.meta.env.VITE_BACKEND_API_URL ?? 'https://api.congressstockwatch.com';
	const page = Number(url.searchParams.get('page') ?? '1');
	const pageSize = Number(url.searchParams.get('page_size') ?? '25');
	const flagged = url.searchParams.get('flagged') ?? 'all';
	const closed = url.searchParams.get('closed') ?? 'all';

	let segmentParams = {
		page: page,
		page_size: pageSize
	};
	if (flagged != 'all') {
		segmentParams['flagged'] = flagged;
	}
	if (closed != 'all') {
		segmentParams['closed'] = closed;
	}
	try {
		const segmentData = await axios.get(`${BASE_URL}/segments`, {
			params: segmentParams
		});

		return {
			segments: segmentData.data.segments,
			pageData: segmentData.data.pageData
		};
	} catch (e) {
		console.log(e);
		return;
	}
}
