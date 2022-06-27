import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import type { RootState } from './store'

type Credentials = {
	username: string
	password: string
}
type userCredentials = {
	credentials: Credentials
	isUser: boolean
	token: string
}
const initialState: userCredentials = {
	credentials: {
		username: '',
		password: '',
	},
	isUser: false,
	token: '',
}

export const userSlice = createSlice({
	name: 'user',
	initialState,

	reducers: {
		setUserName: (state, action: PayloadAction<string>) => {
			state.credentials.username = action.payload
		},
		setUserPassword: (state, action: PayloadAction<string>) => {
			state.credentials.password = action.payload
		},
		setIsUser: (state, action: PayloadAction<boolean>) => {
			state.isUser = action.payload
		},
		setToken: (state, action: PayloadAction<string>) => {
			state.token = action.payload
		},
	},
})

export const { setUserName, setUserPassword, setIsUser, setToken } =
	userSlice.actions

///Nelabai aisku, kas cia vyksta
//export const selectUser = (state: RootState) => state.userDataStore.credentials
export default userSlice.reducer
