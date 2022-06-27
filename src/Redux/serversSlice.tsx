import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

type ServerTypes = {
	servers: []
	isLoading: boolean
}
const initialState: ServerTypes = {
	servers: [],
	isLoading: false,
}
export const serversSlice = createSlice({
	name: 'servers',
	initialState,
	reducers: {
		setServers: (state, action: PayloadAction<[]>) => {
			state.servers = action.payload
		},
		setIsLoading: (state, action: PayloadAction<boolean>) => {
			state.isLoading = action.payload
		},
	},
})

export const { setServers, setIsLoading } = serversSlice.actions

export default serversSlice.reducer
