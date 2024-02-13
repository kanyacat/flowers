import { motion } from 'framer-motion'
import React from 'react'
import { icons, SocialIconProps } from './Social.props'
import cn from 'classnames'
import styles from './Social.module.scss'

const Social = ({ icon, className, ...props }: SocialIconProps) => {
	const IconComp = icons[icon]

	return (
		<motion.button
			className={cn(styles.button, className)}
			{...props}
			whileHover={{ scale: 1.05 }}
		>
			<IconComp />
		</motion.button>
	)
}

export default Social
