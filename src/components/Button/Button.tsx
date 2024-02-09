import { ButtonProps } from './Button.props'
import styles from './Button.module.scss'
import cn from 'classnames'
import { motion } from 'framer-motion'

export const Button = ({
	children,
	className,
	...props
}: ButtonProps): JSX.Element => {
	return (
		<motion.button
			whileHover={{ scale: 1.05 }}
			className={cn(styles.button, className)}
			{...props}
		>
			{children}
		</motion.button>
	)
}
