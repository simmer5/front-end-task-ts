export const countServers = data => {
	const newArr = [...data].map(item => item['name'].replace(/#\d+$/, '').trim())
	return newArr.reduce((acc, server) => {
		acc[server] = (acc[server] || 0) + 1
		// if (acc[server]) {
		// 	acc[server]++
		// } else {
		// 	acc[server] = 1
		// }

		return acc
	}, {})
}
