import styles from './input.module.scss'
import { InputProps } from './Input.types'

const Input = ({
	type,
	placeholder,
	required,
	onChange,
	children,
}: InputProps) => {
	return (
		<div className={styles.container}>
			<div className={styles.icon}>{children}</div>
			<input
				className={styles.input}
				type={type}
				placeholder={placeholder}
				required={required}
				onChange={onChange}
			/>
		</div>
	)
}

export default Input
