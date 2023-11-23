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
						src='https://s3-alpha-sig.figma.com/img/02db/7013/fd5523f6b408e680317412d52e929838?Expires=1701648000&Signature=QQ0W02AE9WM-Vf3vFiQIVkqIbcAfym803b4WlBJ~EAih~DKfBbXzzMqNBaIL3kBP3IAZTf10Ynd7NthY23ZqXSC6soRd~FBqbAzZu1ZsMzgQiBn2gG0UwQrx~2KqcBdnF47gYQtH9z0iWYGx~SLEumZHaayQWLk62m66Rp5ZnXO7Q3ojLjzogHGU1oFIPc13pXbXWllheyiYRPP7~Pi9AmvJHpr8q~-zqNgnhWBn1E3mFTLG2cao1VrgxdO47Ckk~gZio8SdHYpEFX4mQ1j0SPNF3eY1TnOCRFiZy4cZU~JKk11nvWOWusQHRNkW718hblE5DXzueR~DH~9c36ogFw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
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
						src='https://s3-alpha-sig.figma.com/img/270f/af1b/ddbca443f443e043f72b2e59a2691ffa?Expires=1701648000&Signature=Rhj5pXN1GFUDq2TDFwJ94HMkENVfby21QJwqiKZKNMNZn4TX~oqkvqtWJ91jocqHjx-j2eFb0-wbs2FRvvdb4OCV1ixW1VFYnVTLa4HrhTmezF27myNeU2p7OM~jk-uYZaUQBnTtGS8klYa83CxUNHYXVs1eagG7NGL~XmdxvR-uF83AyXIladJnr6o7ESP-WWLUIeJdFeN8qJlxxMNDMpaK8jRheYnrzWqKF9nkIYlMzRUTVvdmDw7MGKcwueMR1S3KRlwkBmBflamnJ8vO1aV2285w7J-x~TJvyD7xhHfo1PG9qzD~B15TSR8keDMx57qFO5Zrfx6eZ6ykmNHh3Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
						alt='букет'
					/>
					<img
						src='https://s3-alpha-sig.figma.com/img/d3ea/179e/1cf0892bead7678559fb3130fe1af287?Expires=1701648000&Signature=WwUnrzIVVtsdemaBaDeDu5DzM3DE9Gs88qqcRbz8RbVIdeD3kRGV-WxrehE5ZGLWDtAB0UofwiQK7W3I24ZmtMO1kwKxfZYlD~YsGdr-s0MS0OobeKX5atzCYFYtOWYDPPzg1vcTTv-Z2NIecAol1TFyE5C0znLxuzdy8RnbBM3lwoXy01xmi0U-8-VTJpE1RQ46sKSTNq2xY5imyLonGdzALdpy8qUlYz7B204pLfcuICfSGjtHfBYdBJgJxItLY4zmhORpqBbKC3ZMK-P7Myqras6DRESNJSKAh81IQeEoiCKQilr11yqIpF5Oexqau-Yfm9k65QXSvdf4DE1LMw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
						alt='записка'
					/>
					<img
						src='https://s3-alpha-sig.figma.com/img/1b6c/7602/6437783e0fe717d1fb52844dd04b9622?Expires=1701648000&Signature=mmJ3pMWXQwZ3UHLsSYXgcXvtwdZ6tFIv4WOjk62wjBI7MJWQlruBrS98RoGiSCZ0Mg0HcqBl47nNRe~KoX-NnHZu-4NGCqnxHGXQAPXD8Oz9Mk86XffkHHqJkdTIPfaVfsPnyvUKXnnOra27eQq5QSANgHISF0EUs99O-WyyFQeqvVKsZ4uMnmL1n4z4~3MpbbJYnxaPRbYqoVUweyF6rmHS94LFay~PjH1XCmBrIWYKJktQhzINMDSmwgbmpYval1i-cvYFaUAWAuUzUWQ1IOMTup4xc8kuT6XXZJxNdStrQNSsaFgsZGIRuto4oW4WDdZP27LpejsY4aC5GGfXCA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
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
