import styles from './topNav.module.scss'
import { LogoServers } from '../Icons/LogoServers'
import LogOutBtn from '../LogOutBtn/LogOutBtn'

const TopNav = () => {
	return (
		<div className={styles.container}>
			<LogoServers />
			<LogOutBtn />
		</div>
	)
}

export default TopNav
