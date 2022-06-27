export const countCountries = data => {
	const newArr = [...data].map(item => item['name'].replace(/#\d+$/, '').trim())
	const filtered = [...new Set(newArr)]

	return filtered.length
}
