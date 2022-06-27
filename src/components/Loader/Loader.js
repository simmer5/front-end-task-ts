import styles from './loader.module.scss'

const Loader = () => {
	return (
		<div className={styles.loading}>
			<div className={styles.circle}></div>
			<div className={styles.circle}></div>
			<div className={styles.circle}></div>
		</div>
	)
}

export default Loader
