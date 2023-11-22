import styles from './HowDoOrder.module.scss'
import Container from '../Container/Container'

const HowDoOrder = () => {
	return (
		<div className={styles.root}>
			<Container>
				<h1 className={styles.title}>
					как сделать <span>заказ</span>
				</h1>
				<div className={styles.columns}>
					<div className={styles.column}>
						<div className={styles.steps}>
							<div className={styles.step}>
								<span className={styles.line} />
								<h3>1 шаг</h3>
								<p>Выберите какие цветы или подарки вы хотите купить</p>
							</div>
							<div className={styles.step}>
								<h3>2 шаг</h3>
								<p>
									Оформите заказ, и мы отправим вам подтверждение на электронную
									почту, а так же менеджер свяжется с вами по телефону или в
									WhatsApp
								</p>
							</div>
							<div className={styles.step}>
								<h3>3 шаг</h3>
								<p>
									Наши флористы бережно подойдут к созданию букета цветов в
									самом начале дня или накануне
								</p>
							</div>
						</div>
					</div>
					<div className={styles.column}>
						<div className={styles.steps}>
							<div className={styles.step}>
								<h3>4 шаг</h3>
								<p>
									Один из наших курьеров или партнёров доставит ваш заказ по
									указанному адресу. Мы отправим вам сообщение в Whats App как
									только заказ будет доставлен
								</p>
							</div>
							<div className={styles.step}>
								<h3>5 шаг</h3>
								<p>
									Наслаждайтесь цветами, если вы заказали их для дома или
									любовью, которой поделились, если вы заказали для друга
								</p>
							</div>
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
		</div>
	)
}

export default HowDoOrder
