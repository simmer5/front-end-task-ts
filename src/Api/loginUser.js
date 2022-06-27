export const loginUser = async userData => {
	try {
		const res = await fetch('https://playground.oxylabs.io/api/user/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(userData),
		})
		const data = res.json()

		return data
	} catch (err) {
		console.log('There is some error with login', err)
	}
}
