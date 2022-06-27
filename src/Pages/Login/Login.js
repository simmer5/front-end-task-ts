import { useNavigate } from 'react-router-dom'
import { useAppSelector, useAppDispatch } from '../../Redux/hooks'
import { useSelector, useDispatch } from 'react-redux'
import {
	setUserName,
	setUserPassword,
	setIsUser,
	setToken,
} from '../../Redux/userSlice'
import { loginUser } from '../../Api/loginUser'
import styles from './login.module.scss'
import LogInBtn from '../../components/LogInBtn/LogInBtn'
import Input from '../../components/Input/Input'
import Logo from '../../img/logo.svg'
import { IconUser } from '../../components/Icons/IconUser'
import { IconLogin } from '../../components/Icons/IconLogin'

const Login = () => {
	const dispatch = useDispatch()
	//const dispatch = useAppDispatch()
	const navigate = useNavigate()

	const userCredentials = useSelector(state => state.userDataStore.credentials)
	//const userCredentials = useAppSelector(state => state.credentials.value)

	const handleLogin = async e => {
		e.preventDefault()
		const response = await loginUser(userCredentials)

		if ('token' in response) {
			dispatch(setIsUser(true))
			dispatch(setToken(response['token']))

			sessionStorage.setItem('accessToken', response['token'])
			sessionStorage.setItem('user', JSON.stringify(response['username']))

			navigate('servers')
		}
	}

	return (
		<div className={styles.container}>
			<img src={Logo} alt='Logo' />
			<form onSubmit={handleLogin}>
				<Input
					type='text'
					placeholder='Username'
					required={true}
					onChange={e => dispatch(setUserName(e.target.value))}
				>
					<IconUser />
				</Input>

				<Input
					type='password'
					placeholder='Password'
					required={true}
					onChange={e => dispatch(setUserPassword(e.target.value))}
				>
					<IconLogin />
				</Input>

				<LogInBtn title='Log In' />
			</form>
		</div>
	)
}

export default Login
