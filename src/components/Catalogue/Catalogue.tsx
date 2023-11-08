import styles from './Catalogue.module.scss'
import Container from '../../components/Container/Container'
import { Link } from 'react-router-dom'

const Catalogue = () => {
	return (
		<div className={styles.root}>
			<Container>
				<h1>Каталог</h1>
				<div className={styles.cards}>
					<div className={styles.text}>
						<p>
							У нас самый большой выбор цветов, букетов, открыток и подарков. Мы
							всегда поможем вам подобрать букет для вашего события, наш
							менеджер вас проконсультирует и поможет определиться с выбором
						</p>
						<p>Ознакомьтесь с нашими разделами каталога</p>
					</div>
					<div className={styles.card}>
						<h2>готовые букеты из сухоцветов</h2>
						<ul>
							<li>букеты</li>
							<li>для интерьера</li>
							<li>Композиции</li>
						</ul>
						<Link to={'/'} className={styles.link}>
							смотреть каталог
						</Link>
					</div>
					<div className={styles.card}>
						<h2>готовые букеты из сухоцветов</h2>
						<ul>
							<li>букеты</li>
							<li>для интерьера</li>
							<li>Композиции</li>
						</ul>
						<Link to={'/'} className={styles.link}>
							смотреть каталог
						</Link>
					</div>
				</div>
			</Container>
		</div>
	)
}

export default Catalogue
