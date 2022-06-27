import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { fetchServers } from '../../Api/fetchServers'
import { doubleSortServers } from '../../utils/sortServers'

import { setServers, setIsLoading } from '../../Redux/serversSlice'
import styles from './servers.module.scss'
import TopNav from '../../components/TopNav/TopNav'
import Table from '../../components/Table/Table'
import Loader from '../../components/Loader/Loader'
import StatsContainer from '../../components/StatsContainer/StatsContainer'

const Servers = () => {
	const dispatch = useDispatch()

	const token = useSelector(state => state.userDataStore.token)
	const servers = useSelector(state => state.serversStore.servers)

	const isLoading = useSelector(state => state.serversStore.isLoading)

	useEffect(() => {
		dispatch(setIsLoading(true))
		if (token !== '') {
			fetchServers(token).then(data => {
				const sortedData = doubleSortServers(data, 'distance', 'name')
				dispatch(setServers(sortedData))
				dispatch(setIsLoading(false))
			})
		}
	}, [token, dispatch])

	return (
		<div className={styles.container}>
			<div className={styles.navContainer}>
				<TopNav />
			</div>
			<div className={styles.statsContainer}>
				<StatsContainer />
			</div>
			<div className={styles.contentContainer}>
				{isLoading ? <Loader /> : <Table servers={servers} />}
			</div>
		</div>
	)
}

export default Servers
