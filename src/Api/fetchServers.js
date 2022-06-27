export const fetchServers = async token => {
	const res = await fetch('https://playground.oxylabs.io/api/servers', {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',

			'x-access-token': token,
		},
	})
	const data = res.json()

	return data
}
