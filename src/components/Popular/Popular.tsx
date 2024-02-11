import styles from './Popular.module.scss'
import Container from '../Container/Container'
import Slider from '../Slider/Slider'
import { Link } from 'react-router-dom'
import { ReactComponent as ArrowIcon } from './arrow.svg'
import { motion } from 'framer-motion'
import { variants } from '../../animation/animation'

const Popular = () => {
	return (
		<motion.div
			className={styles.root}
			initial={'hidden'}
			whileInView={'visible'}
			viewport={{ amount: 0.2 }}
		>
			<Container>
				<motion.div className={styles.title} variants={variants}>
					<h1>популярные</h1>
					<h1 className={styles.subtitle}>букеты</h1>
				</motion.div>
				<motion.p variants={variants} custom={2}>
					Самые любимые композиции наших клиентов
				</motion.p>
				<div className={styles.slider}>
					<Slider />
				</div>
				<Link to={'/'}>
					<span className={styles.link}>смотреть весь каталог</span>
					<span> </span>
					<ArrowIcon />
				</Link>
			</Container>
		</motion.div>
	)
}

export default Popular
