import styles from './Popular.module.scss'
import Container from '../Container/Container'
import Slider from '../Slider/Slider'
import { Link } from 'react-router-dom'

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
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='40'
						height='6'
						viewBox='0 0 40 6'
						fill='none'
					>
						<path
							d='M40 3L35 0.113249V5.88675L40 3ZM0 3.5H35.5V2.5H0V3.5Z'
							fill='#D978AC'
						/>
					</svg>
				</Link>
			</Container>
		</div>
	)
}

export default Popular
