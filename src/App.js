import { useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import ProtectedRoute from './utils/ProtectedRoute'
import { useSelector, useDispatch } from 'react-redux'
import { setIsUser, setToken } from './Redux/userSlice'

import './App.css'

import LoginPage from './Pages/Login/Login'
import Servers from './Pages/Servers/Servers'

function App() {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const isUser = useSelector(state => state.userDataStore.isUser)

	useEffect(() => {
		const userLocal = sessionStorage.getItem('user')
		const tokenLocal = sessionStorage.getItem('accessToken')

		if (userLocal === null) {
			dispatch(setIsUser(false))
			navigate('/')
		} else {
			dispatch(setIsUser(true))
			dispatch(setToken(tokenLocal))
			navigate('/servers')
		}
	}, [dispatch, navigate])

	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<LoginPage />} />

				<Route
					path='servers'
					element={
						<ProtectedRoute user={isUser}>
							<Servers />
						</ProtectedRoute>
					}
				/>
			</Routes>
		</div>
	)
}

export default App
