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
						src='https://s3-alpha-sig.figma.com/img/02db/7013/fd5523f6b408e680317412d52e929838?Expires=1702857600&Signature=l6QQ2Iri0sqylpiNDCvgUNIFAh9ZZaE63hcUgkcNU~ls7Hj0uAMUBPSaq5~H4Pe92ceeWFR-WE5L3ts6LpxeeIgajp1H8~FtAgVZt2p4bmezsDKgzplEby7S2mvsp9uzfHJ7uJNePKx2Lu7pQCicNorFUlSQBMqgQuiiVC81M38S9M6SrWlXE0ZRNEFmb6qeHgYW3N6iCBI95PBAoqEnTPqMzG2CPrizgaHfTDCrquzqirjYia4RlUqnmO4hpYhyy~aLl3B4hB9U~rQMpexxvzbEOi6HhwgnxGD6YeRkvMDAh80MKcNuuST9nifmjGyXy2BYIv0tFYk0FlzIlziZ7A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
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
							'https://s3-alpha-sig.figma.com/img/270f/af1b/ddbca443f443e043f72b2e59a2691ffa?Expires=1702857600&Signature=UVoJBr7PZG5Qu283s7TjC1ttz2e0SWTx8MO6JpxcELO3dJeo5UUrHJmlbT8YftKLNEHhAK2m1dFXyxe5aiTwN7LJjZa9nITbIDMsiAdmjMrXsBimXZzo-E26aBXiG6t-cip3O0JuwhsbonmNM4lVyfqp2HEs2f2OCuUrMKyvoDKEORFoq6aiqriWNNRSRXwDeeKf6KFWUJHCx8yhrqt3Ced04DQhL2PJ5vKDfvhiTreTiuU2cnFxNNux9qh8xWTjy~yuHHh5tkbH3QvGuMgy0iQJJ--3lxa9AGgZuDvBZiEY7LhbhiGRDMMsrV2O6mz62ewVUV5ExcbiGVYryPy84A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
						}
						alt='букет'
					/>
					<img
						src={
							'https://s3-alpha-sig.figma.com/img/d3ea/179e/1cf0892bead7678559fb3130fe1af287?Expires=1702857600&Signature=eVhTzfhcAmjjbwEtq9ANQdpxYMULbWyV0nIlr1Ac8SM3pyQ5zs8S-5brEVNAaN9V82ZA0XZ0CMUwNYhwS~e-b~kOBNaGCFe2q-ZbJkxYeH2e5ieZZLWsyxR7-vUbHcgZgoIzfUQVLV4DdzH6UF46UjKg5xgsDP8p208s9XBwyBWIRKpUR9sDamH8DfRMTxDQzXnMA5dvqSzBmT4Dj931AP38wAejso1Meyj4gngmn61eACDgPVK7cGKaCcxoCmrctI1pqYVwdz04XjjrVYRl9r-omLcgEkuccanRPoXGRUOBQHooOaZC5xeyAvBEBVzIrl08YQA6PVnZHf1l2N1CKA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
						}
						alt='записка'
					/>
					<img
						src={
							'https://s3-alpha-sig.figma.com/img/1b6c/7602/6437783e0fe717d1fb52844dd04b9622?Expires=1702857600&Signature=LEp7HILwTwfwJdPstkE9~axyU6~VETPtwci2RhaVW9WS3chiyXmwZbhMfHxipMdc21b1xGrurd2VVhde5-TLdz8mK88M63pf4KWrYdu~e2yhcH017tbIgkCh90--TPLoc1As7397F~OxGCsZMtkj2EqRoU74RsyUGLmWE7otENouC7bD1ejA2sYKBEh2MzEBrnFvy5mQGxQ1z5wBbpPGvfqJo8xS5A6fypNViku3j8Ta~Zw5PF0oxQq~6yvn7fIoJwNTYQG5LaYOKN1hUhsvMT4lrUX0s7~qpmLTvy-GxYQGndSacMfPpsQz1-TEgGkzm0J917Fhipe3xU7LnF71fg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
						}
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
