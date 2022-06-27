import styles from './table.module.scss'
import { TableProps } from './TableProps.types'

const Table = ({ servers }: TableProps) => {
	return (
		<table className={styles.table}>
			<thead>
				<tr>
					<th className={styles.col1}>Servers</th>
					<th className={styles.col2}>Distance</th>
				</tr>
			</thead>
			<tbody>
				{servers.map((server, idx) => (
					<tr key={idx}>
						<td className={styles.col1}>{server.name}</td>
						<td className={styles.col2}>{server.distance} km</td>
					</tr>
				))}
			</tbody>
		</table>
	)
}

export default Table
