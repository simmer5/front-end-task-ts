import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import serversReducer from './serversSlice'

export const store = configureStore({
	reducer: {
		userDataStore: userReducer,
		serversStore: serversReducer,
	},
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
