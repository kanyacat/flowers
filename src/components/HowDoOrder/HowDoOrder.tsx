import styles from './HowDoOrder.module.scss'
import Container from '../Container/Container'
import { motion } from 'framer-motion'
import { variants } from '../../animation/animation'

const HowDoOrder = () => {
	return (
		<motion.div
			className={styles.root}
			initial={'hidden'}
			whileInView={'visible'}
			viewport={{ amount: 0.2, once: true }}
		>
			<Container>
				<motion.h1 className={styles.title} variants={variants}>
					как сделать <span>заказ</span>
				</motion.h1>
				<div className={styles.columns}>
					<div className={styles.column}>
						<div className={styles.steps}>
							<motion.div
								className={styles.step}
								variants={variants}
								custom={1.8}
							>
								<span className={styles.line} />
								<h3>1 шаг</h3>
								<p>Выберите какие цветы или подарки вы хотите купить</p>
							</motion.div>
							<motion.div
								className={styles.step}
								variants={variants}
								custom={2.6}
							>
								<h3>2 шаг</h3>
								<p>
									Оформите заказ, и мы отправим вам подтверждение на электронную
									почту, а так же менеджер свяжется с вами по телефону или в
									WhatsApp
								</p>
							</motion.div>
							<motion.div
								className={styles.step}
								variants={variants}
								custom={3.4}
							>
								<h3>3 шаг</h3>
								<p>
									Наши флористы бережно подойдут к созданию букета цветов в
									самом начале дня или накануне
								</p>
							</motion.div>
						</div>
					</div>
					<div className={styles.column}>
						<div className={styles.steps}>
							<motion.div
								className={styles.step}
								style={{ marginLeft: 0 }}
								variants={variants}
								custom={4.2}
							>
								<h3>4 шаг</h3>
								<p>
									Один из наших курьеров или партнёров доставит ваш заказ по
									указанному адресу. Мы отправим вам сообщение в WhatsApp как
									только заказ будет доставлен
								</p>
							</motion.div>
							<motion.div
								className={styles.step}
								style={{ marginLeft: 0 }}
								variants={variants}
								custom={5}
							>
								<h3>5 шаг</h3>
								<p>
									Наслаждайтесь цветами, если вы заказали их для дома или
									любовью, которой поделились, если вы заказали для друга
								</p>
							</motion.div>
						</div>
					</div>
					<div className={styles.column}>
						<div className={styles.steps}>
							<div className={styles.step}></div>
						</div>
					</div>
				</div>
			</Container>
			<span className={styles.flover}></span>
		</motion.div>
	)
}

export default HowDoOrder
