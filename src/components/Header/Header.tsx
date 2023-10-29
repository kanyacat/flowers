import styles from './Header.module.scss'
import { Link } from 'react-router-dom'
import { FC } from 'react'

const Header: FC = () => {
	return (
		<header className={styles.root}>
			<ul className={styles.list}>
				{/*ВСТАВИТЬ ССЫЛКИ СЮДА*/}
				<nav>
					<Link to={'/'}>
						<img src='' alt='logo' className={styles.logo} />
					</Link>
				</nav>
				<nav>
					<Link to={'/'}>Каталог</Link>
				</nav>
				<nav>
					<Link to={'/'}>Доставка и оплата</Link>
				</nav>
				<nav>
					<Link to={'/'}>О нас</Link>
				</nav>
				<nav>
					<Link to={'/'}>Контакты</Link>
				</nav>
				<nav>
					<Link to={'/'}>FAQ</Link>
				</nav>
				<nav>
					<Link to={'/'}>
						<span>лупа </span>Поиск
					</Link>
				</nav>
			</ul>
		</header>
	)
}

export default Header
