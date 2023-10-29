// @ts-ignore
import styles from './Header.module.scss'

const Header = props => {
	return (
		<header className={styles.root}>
			<ul className={styles.list}>
				<nav>
					<img src='' alt='logo' className={styles.logo} />
				</nav>
				<nav>Каталог</nav>
				<nav>Доставка и оплата</nav>
				<nav>О нас</nav>
				<nav>Контакты</nav>
				<nav>FAQ</nav>
				<nav>
					<span>лупа </span>Поиск
				</nav>
			</ul>
		</header>
	)
}

export default Header
