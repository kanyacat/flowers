import styles from './Special.module.scss'
import Container from '../Container/Container'

const Special = () => {
	return (
		<div className={styles.root}>
			<Container>
				<div className={styles.head}>
					<div className={styles.title}>
						<h1>ОСОБЕННЫЙ</h1>
						<div className={styles.titleBottom}>
							<span className={styles.line}></span> <h1>ПОВОД?</h1>
						</div>
					</div>
					<img
						src='https://i.ibb.co/ydrmj55/fd5523f6b408e680317412d52e929838.png'
						srcSet={'https://i.ibb.co/YRgB0hN/Rectangle-36.png 2x'}
						loading={'lazy'}
						alt='подарок'
					/>
				</div>
				<div className={styles.bottom}>
					<div className={styles.info}>
						<p className={styles.text}>
							Мы готовы прийти на помощь и собрать уникальный букет, на любой
							вкус, бюджет и для любого события по вашему индивидуальному
							заказу.
						</p>
						<ul>
							<li>учтем даже самые изысканные пожелания;</li>
							<li>
								подберем свежайшие цветы и сделаем уникальный букет или
								композицию;
							</li>
							<li>оплатить можно при получении или онлайн на сайте;</li>
						</ul>
					</div>
					<img
						src={
							'https://i.ibb.co/6v4th8x/ddbca443f443e043f72b2e59a2691ffa.png'
						}
						srcSet={'https://i.ibb.co/VDTf9C9/Rectangle-35.png 2x'}
						loading={'lazy'}
						alt='букет'
					/>
					<img
						src={
							'https://i.ibb.co/JpQJ0Km/1cf0892bead7678559fb3130fe1af287.png'
						}
						srcSet={'https://i.ibb.co/D7qrkNR/Rectangle-38-1.png 2x'}
						loading={'lazy'}
						alt='записка'
					/>
					<img
						src={
							'https://i.ibb.co/JzRvRN2/6437783e0fe717d1fb52844dd04b9622.png'
						}
						srcSet={'https://i.ibb.co/4J1Q4RT/Rectangle-37.png 2x'}
						loading={'lazy'}
						alt='венок'
					/>
				</div>

				<button className={styles.btn}>
					собрать индивидуальный букет{' '}
					<span className={styles.arrow}>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='11'
							height='61'
							viewBox='0 0 11 61'
							fill='none'
						>
							<path
								d='M9.09795 59.6018L9.5181 59.3308L9.5181 59.3308L9.09795 59.6018ZM10 61L9.71509 55.2335L4.86364 58.3635L10 61ZM9.58839 0.716134C-2.63574 18.4411 -2.99499 41.7801 8.6778 59.8729L9.5181 59.3308C-1.93569 41.5774 -1.58318 18.6763 10.4116 1.28387L9.58839 0.716134Z'
								fill='#43FFD2'
							/>
						</svg>
					</span>
				</button>
			</Container>
		</div>
	)
}

export default Special
