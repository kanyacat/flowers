import styles from './Popular.module.scss'
import Container from '../Container/Container'
import Slider from '../Slider/Slider'

const Popular = () => {
	return (
		<div className={styles.root}>
			<Container>
				<div className={styles.title}>
					<h1>популярные</h1>
					<h1 className={styles.subtitle}>букеты</h1>
				</div>
				<p>Самые любимые композиции наших клиентов</p>
				<Slider />
			</Container>
		</div>
	)
}

export default Popular
