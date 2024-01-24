import styles from './Popular.module.scss'
import Container from '../Container/Container'
import Slider from '../Slider/Slider'
import { Link } from 'react-router-dom'
import { ReactComponent as ArrowIcon } from './arrow.svg'

const Popular = () => {
	return (
		<div className={styles.root}>
			<Container>
				<div className={styles.title}>
					<h1>популярные</h1>
					<h1 className={styles.subtitle}>букеты</h1>
				</div>
				<p>Самые любимые композиции наших клиентов</p>
				<div className={styles.slider}>
					<Slider />
				</div>
				<Link to={'/'}>
					<span className={styles.link}>смотреть весь каталог</span>
					<span> </span>
					<ArrowIcon />
				</Link>
			</Container>
		</div>
	)
}

export default Popular
