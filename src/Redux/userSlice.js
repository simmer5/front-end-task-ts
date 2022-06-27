import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
	name: 'user',
	initialState: {
		credentials: {
			username: '',
			password: '',
		},
		isUser: null,
		token: '',
	},
	reducers: {
		setUserName: (state, action) => {
			state.credentials.username = action.payload
		},
		setUserPassword: (state, action) => {
			state.credentials.password = action.payload
		},
		setIsUser: (state, action) => {
			state.isUser = action.payload
		},
		setToken: (state, action) => {
			state.token = action.payload
		},
	},
})

export const { setUserName, setUserPassword, setIsUser, setToken } =
	userSlice.actions

export default userSlice.reducer
