export const doubleSortServers = (data, prop1, prop2) => {
	let newArr = [...data].sort((a, b) => {
		if (a[prop1] === b[prop1]) {
			if (a[prop2] === b[prop2]) return 0
			return a[prop2] > b[prop2] ? -1 : 1
		} else {
			return a[prop1] > b[prop1] ? -1 : 1
		}
	})
	return newArr
}

export const sortServers = (data, prop1) => {
	let newArr = [...data].sort((a, b) => {
		return a[prop1] > b[prop1] ? -1 : 1
	})
	return newArr
}
