import { createSlice } from '@reduxjs/toolkit'

export const serversSlice = createSlice({
	name: 'servers',
	initialState: {
		servers: [],
		isLoading: false,
	},
	reducers: {
		setServers: (state, action) => {
			state.servers = action.payload
		},
		setIsLoading: (state, action) => {
			state.isLoading = action.payload
		},
	},
})

export const { setServers, setIsLoading } = serversSlice.actions

export default serversSlice.reducer
