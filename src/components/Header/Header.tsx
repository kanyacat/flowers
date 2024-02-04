import styles from './Header.module.scss'
import { Link } from 'react-router-dom'
import Container from '../Container/Container'
import Cart from '../Cart/Cart'
import { ReactComponent as LogoIcon } from './logo.svg'
import { ReactComponent as GlassIcon } from './glass.svg'
import { ReactComponent as BurgerIcon } from './burger.svg'
import { HeaderProps } from './Header.props'

const Header = (props: HeaderProps) => {
	const { isMain } = props

	return (
		<header className={styles.root}>
			<Container>
				<ul className={styles.list}>
					<div className={styles.mobile}>
						<nav>
							<BurgerIcon />
						</nav>
						<nav>
							<Cart />
						</nav>
					</div>
					<div className={styles.left}>
						<nav>
							<Link to={'/'}>
								<LogoIcon className={styles.logo} />
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
								<span>
									<GlassIcon />
								</span>
								Поиск
							</Link>
						</nav>
					</div>
					{isMain ? (
						''
					) : (
						<div className={styles.right}>
							<nav>
								<a href='tel:+375291136969' className={styles.phone}>
									<span />
									+375 (29) 113-69-69
								</a>
							</nav>
							<nav>
								<Cart />
							</nav>
						</div>
					)}
				</ul>
			</Container>
		</header>
	)
}

export default Header
