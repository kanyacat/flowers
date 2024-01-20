import styles from './Catalogue.module.scss'
import Container from '../../components/Container/Container'
import { Link } from 'react-router-dom'

const Catalogue = () => {
	return (
		<div className={styles.root}>
			<span className={styles.backtext}>
				<span>букеты</span>
				<span>цветы</span>
				<span>дополнительно</span>
			</span>
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
							<li className={styles.list}>букеты</li>
							<li className={styles.list}>для интерьера</li>
							<li className={styles.list}>Композиции</li>
							<Link to={'/'} className={styles.link}>
								смотреть каталог
							</Link>
						</ul>
					</div>
					<div className={styles.card}>
						<h2>Цветы</h2>
						<ul>
							<li className={styles.list}>Сборные букеты</li>
							<li className={styles.list}>Монобукеты</li>
							<li className={styles.list}>Композиции из цветов</li>
							<li className={styles.list}>розы</li>
							<li className={styles.list}>свадебные</li>
							<Link to={'/'} className={styles.link}>
								смотреть каталог
							</Link>
						</ul>
					</div>
					<div className={styles.card}>
						<h2>дополнительно</h2>
						<ul>
							<li className={styles.list}>шары</li>
							<li className={styles.list}>игрушки</li>
							<li className={styles.list}>открытки</li>
							<li className={styles.list}>упаковка</li>
							<Link to={'/'} className={styles.link}>
								смотреть каталог
							</Link>
						</ul>
					</div>
				</div>
			</Container>
		</div>
	)
}

export default Catalogue
