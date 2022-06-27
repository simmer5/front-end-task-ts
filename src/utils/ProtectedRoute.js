import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ user, children }) => {
	if (user === false) {
		return <Navigate to='/' replace='false' />
	}
	return children
}

export default ProtectedRoute
