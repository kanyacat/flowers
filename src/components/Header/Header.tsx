import styles from './Header.module.scss'
import { Link } from 'react-router-dom'
import Container from '../Container/Container'
import Cart from '../Cart/Cart'
import { ReactComponent as LogoIcon } from './logo.svg'
import { ReactComponent as GlassIcon } from './glass.svg'
import { ReactComponent as CloseIcon } from './close.svg'
import { ReactComponent as BurgerIcon } from './burger.svg'
import { ReactComponent as InstIcon } from '../Intro/SocialIcons/inst.svg'
import { ReactComponent as WhatsappIcon } from '../Intro/SocialIcons/wats.svg'
import { ReactComponent as MobileIcon } from '../Intro/SocialIcons/mobile.svg'

import { HeaderProps } from './Header.props'
import { useState } from 'react'
import cn from 'classnames'

const Header = (props: HeaderProps) => {
	const { isMain } = props

	const [menu, setMenu] = useState(false)

	return (
		<header
			className={cn(styles.root, {
				[styles.rootMobile]: menu
			})}
		>
			<Container>
				<ul
					className={cn(styles.list, {
						[styles.listMenu]: menu
					})}
				>
					<div
						className={cn(styles.mobile, {
							[styles.mobileMenu]: menu
						})}
					>
						<nav onClick={() => setMenu(!menu)}>
							{menu ? <CloseIcon /> : <BurgerIcon />}
						</nav>
						{!menu && (
							<nav>
								<Cart />
							</nav>
						)}
					</div>
					<div
						className={cn(styles.left, {
							[styles.menuNone]: !menu,
							[styles.leftMenu]: menu
						})}
					>
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
						<nav className={styles.search}>
							<Link to={'/'}>
								<span>
									<GlassIcon />
								</span>
								Поиск
							</Link>
						</nav>
						{menu ? (
							<>
								<nav>
									<Link to={'/'}>для корпоративных клиентов</Link>
								</nav>
								<nav>
									<a href='mailto:zakaz@loverflower.by' className={styles.mail}>
										zakaz@loverflower.by
									</a>
									<p> Доставка 24/7 по договоренности с оператором</p>
								</nav>
								<nav>
									<p className={styles.address}>ул. Тимирязева 67</p>
									<p className={styles.time}>10:00 до 21:00 без выходных</p>
								</nav>
								<nav>
									<Link className={styles.smallnav} to={'/'}>
										Политика конфиденциальности
									</Link>
									<br />
									<Link className={styles.smallnav} to={'/'}>
										Обработка персональных данных
									</Link>
								</nav>
								<nav>
									<a href='tel:+375291136969' className={styles.tel}>
										+375 (29) 113-69-69
									</a>
								</nav>
								<nav className={styles.social}>
									<Link to={'/'} className={styles.socialLink}>
										<InstIcon />
									</Link>
									<Link to={'/'} className={styles.socialLink}>
										<WhatsappIcon />
									</Link>
									<Link to={'/'} className={styles.socialLink}>
										<MobileIcon />
									</Link>
								</nav>
							</>
						) : (
							''
						)}
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
