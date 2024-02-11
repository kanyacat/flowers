import styles from './Intro.module.scss'
import Container from '../../components/Container/Container'
import { Link } from 'react-router-dom'
import Cart from '../../components/Cart/Cart'
import { ReactComponent as InstIcon } from './SocialIcons/inst.svg'
import { ReactComponent as WhatsappIcon } from './SocialIcons/wats.svg'
import { ReactComponent as MobileIcon } from './SocialIcons/mobile.svg'
import { Button } from '../Button/Button'
import { motion } from 'framer-motion'
import { buttonVariants, variants } from '../../animation/animation'

const Intro = () => {
	return (
		<motion.div
			className={styles.root}
			initial={'hidden'}
			whileInView={'visible'}
		>
			<div className={styles.main}>
				<span className={styles.flowers} />
				<div className={styles.content}>
					<Container>
						<motion.h1 variants={variants} custom={1}>
							LOVER
						</motion.h1>
						<motion.h1
							className={styles.subtitle}
							variants={variants}
							custom={1}
						>
							FLOWER
						</motion.h1>
						<motion.span
							className={styles.text}
							variants={variants}
							custom={1.5}
						>
							<div className={styles.info}>
								<p>Создаём для тех, кто ценит свежесть и изящество цветка</p>
								<motion.div variants={buttonVariants}>
									<Button>смотреть каталог</Button>
								</motion.div>
							</div>
						</motion.span>
					</Container>
				</div>
				<motion.div className={styles.right} variants={variants} custom={2}>
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
						<Button className={styles.phoneBtn}>
							<span />
							заказать звонок
						</Button>
					</div>
					<div className={styles.rightBlock}>
						<div className={styles.cart}>
							<Cart />
						</div>
					</div>
				</motion.div>
				<span className={styles.flover} />
			</div>
		</motion.div>
	)
}

export default Intro
