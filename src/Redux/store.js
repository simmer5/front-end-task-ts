import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import serversReducer from './serversSlice'

export const store = configureStore({
	reducer: {
		userDataStore: userReducer,
		serversStore: serversReducer,
	},
})
