import styles from './Special.module.scss'
import Container from '../Container/Container'
import { ReactComponent as ArrowIcon } from './arrow.svg'
import { Button } from '../Button/Button'

const Special = () => {
	return (
		<div className={styles.root}>
			<Container>
				<div className={styles.special}>
					<div className={styles.title}>
						<h1>ОСОБЕННЫЙ</h1>
						<div className={styles.titleBottom}>
							<span className={styles.line}></span> <h1>ПОВОД?</h1>
						</div>
					</div>
					<img
						className={styles.box}
						src='https://i.ibb.co/ydrmj55/fd5523f6b408e680317412d52e929838.png'
						srcSet={'https://i.ibb.co/YRgB0hN/Rectangle-36.png 2x'}
						loading={'lazy'}
						alt='подарок'
					/>
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
						className={styles.flowers}
						src={
							'https://i.ibb.co/6v4th8x/ddbca443f443e043f72b2e59a2691ffa.png'
						}
						srcSet={'https://i.ibb.co/VDTf9C9/Rectangle-35.png 2x'}
						loading={'lazy'}
						alt='букет'
					/>
					<img
						className={styles.note}
						src={
							'https://i.ibb.co/JpQJ0Km/1cf0892bead7678559fb3130fe1af287.png'
						}
						srcSet={'https://i.ibb.co/D7qrkNR/Rectangle-38-1.png 2x'}
						loading={'lazy'}
						alt='записка'
					/>
					<img
						className={styles.wreath}
						src={
							'https://i.ibb.co/JzRvRN2/6437783e0fe717d1fb52844dd04b9622.png'
						}
						srcSet={'https://i.ibb.co/4J1Q4RT/Rectangle-37.png 2x'}
						loading={'lazy'}
						alt='венок'
					/>
				</div>

				<Button className={styles.btn}>
					собрать индивидуальный букет{' '}
					<span className={styles.arrow}>
						<ArrowIcon />
					</span>
				</Button>
			</Container>
		</div>
	)
}

export default Special
