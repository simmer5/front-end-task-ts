import InfoCard from '../InfoCard/InfoCard'
import styles from './statsContainer.module.scss'
import { useSelector } from 'react-redux'
import { countCountries } from '../../utils/countCountries'
import { countServers } from '../../utils/countServers'

const StatsContainer = () => {
	const servers = useSelector(state => state.serversStore.servers)

	const numOfCountries = countCountries(servers)
	const serversByCountry = countServers(servers)

	return (
		<div className={styles.container}>
			<InfoCard infoText='Countries' data={numOfCountries} />

			{Object.entries(serversByCountry).map(([country, number], idx) => {
				return <InfoCard key={idx} infoText={country} data={number} />
			})}
		</div>
	)
}

export default StatsContainer
