import styles from './loginBtn.module.scss'
import { LoginBtnProps } from './LoginBtn.types'

const LogInBtn = ({ title }: LoginBtnProps) => {
	return (
		<button className={styles.button} type='submit' value='Log In'>
			{title}
		</button>
	)
}

export default LogInBtn
