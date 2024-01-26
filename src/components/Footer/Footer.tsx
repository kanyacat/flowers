import styles from './Footer.module.scss'
import Container from '../Container/Container'
import { Link } from 'react-router-dom'
import { ReactComponent as LogoIcon } from '../Header/logo.svg'
import { ReactComponent as InstIcon } from '../Intro/SocialIcons/inst.svg'
import { ReactComponent as WhatsappIcon } from '../Intro/SocialIcons/wats.svg'
import { ReactComponent as MobileIcon } from '../Intro/SocialIcons/mobile.svg'
import cn from 'classnames'

const Footer = () => {
	return (
		<footer className={styles.root}>
			<Container>
				<div className={styles.footer}>
					<div className={cn(styles.block, styles.requisites)}>
						<Link className={styles.logo} to={'/'}>
							<LogoIcon />
						</Link>
						<h3 className={styles.title}>РЕКВИЗИТЫ</h3>
						<p className={styles.address}>
							ООО «Ловефлове» 220035, Республика Беларусь, г. Минск, ул.
							Тимирязева д. 67, комн. 112 (пом.11) УНП 193263781, р/с
							BY55MTBK30120001093300096372 ЗАО «МТБанк», БИК MTBKBY22 220007, г.
							Минск, улица Толстого
						</p>
					</div>
					<div className={cn(styles.block, styles.catalogue)}>
						<h3 className={styles.title}>каталог</h3>
						<ul>
							<li>
								<Link to={'/'}>популярное</Link>
							</li>
							<li>
								<Link to={'/'}>сухоцветы</Link>
							</li>
							<li>
								<Link to={'/'}>букеты роз</Link>
							</li>
							<li>
								<Link to={'/'}>композиции из цветов</Link>
							</li>
							<li>
								<Link to={'/'}>индивидуальный букет</Link>
							</li>
							<li>
								<Link to={'/'}>букет на праздник</Link>
							</li>
							<li>
								<Link to={'/'}>упаковка подарков</Link>
							</li>
							<li>
								<Link to={'/'}>шары</Link>
							</li>
							<li>
								<Link to={'/'}>открытки</Link>
							</li>
							<li>
								<Link to={'/'}>конверты</Link>
							</li>
						</ul>
					</div>
					<div className={cn(styles.block, styles.flowers)}>
						<h3 className={styles.title}>букет</h3>
						<ul>
							<li>
								<Link to={'/'}>для девушки</Link>
							</li>
							<li>
								<Link to={'/'}>для мужчины</Link>
							</li>
							<li>
								<Link to={'/'}>для жены</Link>
							</li>
							<li>
								<Link to={'/'}>для мамы</Link>
							</li>
							<li>
								<Link to={'/'}>для коллеги</Link>
							</li>
							<li>
								<Link to={'/'}>для начальника</Link>
							</li>
							<li>
								<Link to={'/'}>для дочки</Link>
							</li>
							<li>
								<Link to={'/'}>для детей</Link>
							</li>
							<li>
								<Link to={'/'}>для женщины</Link>
							</li>
						</ul>
					</div>
					<div className={styles.block}>
						<Link to={'/'} className={styles.title}>
							доставка и оплата
						</Link>
						<Link to={'/'} className={styles.title}>
							о нас
						</Link>
						<Link to={'/'} className={styles.title}>
							FAQ
						</Link>
						<Link to={'/'} className={styles.title}>
							контакты
						</Link>
						<Link to={'/'} className={styles.title}>
							для корпоративных клиентов
						</Link>
					</div>
					<div className={styles.block}>
						<div className={styles.description}>
							<a href='mailto:zakaz@loverflower.by' className={styles.title}>
								zakaz@loverflower.by
							</a>
							<p> Доставка 24/7 по договоренности с оператором</p>
						</div>
						<div className={styles.description}>
							<h3 className={styles.title}>ул. Тимирязева 67</h3>
							<p className={styles.description__time}>
								10:00 до 21:00 без выходных
							</p>
						</div>
						<div className={styles.description}>
							<a href='tel:+375291136969' className={styles.title}>
								+375 (29) 113-69-69
							</a>
							<p>прием звонков круглосуточно</p>
						</div>
						<div className={styles.social}>
							<Link to={'/'} className={styles.link}>
								<InstIcon />
							</Link>
							<Link to={'/'} className={styles.link}>
								<WhatsappIcon />
							</Link>
							<Link to={'/'} className={styles.link}>
								<MobileIcon />
							</Link>
						</div>
					</div>
				</div>
			</Container>
		</footer>
	)
}

export default Footer
