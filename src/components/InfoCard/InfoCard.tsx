import styles from './infoCard.module.scss'
import { InfoCardProps } from './InfoCard.types'

const InfoCard = ({
	infoText = 'No title',
	data = 'No data',
}: InfoCardProps) => {
	return (
		<div className={styles.container}>
			<div className={styles.infoText}>{infoText}</div>
			<div>{data}</div>
		</div>
	)
}

export default InfoCard
