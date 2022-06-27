import React from 'react'

import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setIsUser, setToken } from '../../Redux/userSlice'
import { setServers } from '../../Redux/serversSlice'

import { IconLogOut } from '../Icons/IconLogOut'
import styles from './logOutBtn.module.scss'

const LogOutBtn = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const handleLogout = (e: React.MouseEvent<HTMLButtonElement>) => {
		sessionStorage.clear()
		dispatch(setIsUser(false))
		dispatch(setToken(''))
		dispatch(setServers([]))
		navigate('/')
	}

	return (
		<div className={styles.btnContainer}>
			<div className={styles.icon}>
				<IconLogOut />
			</div>
			<button className={styles.button} onClick={handleLogout} value='Log Out'>
				Logout
			</button>
		</div>
	)
}

export default LogOutBtn
