import styles from './Intro.module.scss'
import Container from '../../components/Container/Container'
import { Link } from 'react-router-dom'
import Cart from '../../components/Cart/Cart'
import { ReactComponent as InstIcon } from './SocialIcons/inst.svg'
import { ReactComponent as WhatsappIcon } from './SocialIcons/wats.svg'
import { ReactComponent as MobileIcon } from './SocialIcons/mobile.svg'

const Intro = () => {
	return (
		<div className={styles.root}>
			<div className={styles.main}>
				<span className={styles.flowers} />
				<div className={styles.content}>
					<Container>
						<h1>LOVER</h1>
						<h1 className={styles.subtitle}>FLOWER</h1>
						<span className={styles.text}>
							<p className={styles.info}>
								<p>Создаём для тех, кто ценит свежесть и изящество цветка</p>
								<button>смотреть каталог</button>
							</p>
						</span>
					</Container>
				</div>
				<div className={styles.right}>
					<div className={styles.rightBlock}>
						<a href='mailto:zakaz@loverflower.by' className={styles.mail}>
							zakaz@loverflower.by
						</a>
						<p> Доставка 24/7 по договоренности с оператором</p>
					</div>
					<div className={styles.rightBlock}>
						<p className={styles.address}>ул. Тимирязева 67</p>
						<p className={styles.time}>10:00 до 21:00 без выходных</p>
					</div>
					<div className={styles.rightBlock}>
						<div className={styles.social}>
							<Link to={'/'} className={styles.socialLink}>
								<InstIcon />
							</Link>
							<Link to={'/'} className={styles.socialLink}>
								<WhatsappIcon />
							</Link>
							<Link to={'/'} className={styles.socialLink}>
								<MobileIcon />
							</Link>
						</div>
					</div>
					<div className={styles.rightBlock}>
						<a href='tel:+375291136969' className={styles.phone}>
							+375 (29) 113-69-69
						</a>
						<button className={styles.phoneBtn}>
							<span />
							заказать звонок
						</button>
					</div>
					<div className={styles.rightBlock}>
						<div className={styles.cart}>
							<Cart />
						</div>
					</div>
				</div>
				<span className={styles.flover} />
			</div>
		</div>
	)
}

export default Intro
