import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
// import 'swiper/css/navigation'
import styles from './Slider.module.scss'
import './Slider.module.scss'

import { Navigation } from 'swiper/modules'

const Slider = () => {
	return (
		<div className={styles.root}>
			<div className={styles.arrows}>
				<div className={styles.next}>
					<div className='swiper-button image-swiper-button-next'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='80'
							height='6'
							viewBox='0 0 80 6'
							fill='none'
						>
							<path
								d='M80 3L75 0.113249V5.88675L80 3ZM0 3.5L75.5 3.5V2.5L0 2.5L0 3.5Z'
								fill='#43FFD2'
							/>
						</svg>
					</div>
				</div>
				<div className={styles.prev}>
					<div className='swiper-button image-swiper-button-prev'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='100'
							height='6'
							viewBox='0 0 80 6'
							fill='none'
						>
							<path
								d='M0 2.99999L5 5.88674L5 0.113242L0 2.99999ZM80 2.5L4.5 2.49999L4.5 3.49999L80 3.5L80 2.5Z'
								fill='#43FFD2'
							/>
						</svg>
					</div>
				</div>
			</div>

			<Swiper
				slidesPerView={3}
				spaceBetween={40}
				navigation={{
					nextEl: '.image-swiper-button-next',
					prevEl: '.image-swiper-button-prev',
					disabledClass: 'swiper-button-disabled'
				}}
				modules={[Navigation]}
				className={styles.swiper}
			>
				<SwiperSlide>
					<div className={styles.info}>
						<div className={styles.img}>
							<span className={styles.new}>
								<p className={styles.ellipse}>NEW</p>
							</span>
							<img src='https://i.ibb.co/X5ZG0MB/image-114-3.png' alt='букет' />
						</div>
						<h3>лучший день</h3> <p className={styles.price}>167.000 ₽</p>
						<button>в корзину</button>
					</div>
				</SwiperSlide>
				<SwiperSlide className={styles.slide}>
					<div className={styles.info}>
						<img src='https://i.ibb.co/8rdWsxg/image-114-4.png' alt='букет' />
						<h3>лучший день</h3> <p className={styles.price}>167.000 ₽</p>
						<button>в корзину</button>
					</div>
				</SwiperSlide>
				<SwiperSlide className={styles.slide}>
					<div className={styles.info}>
						<div className={styles.img}>
							<span className={styles.sale}>
								<p className={styles.ellipse}>SALE</p>
							</span>
							<img src='https://i.ibb.co/ZBnsC3q/image-114-5.png' alt='букет' />
						</div>
						<h3>лучший день</h3> <p className={styles.price}>167.000 ₽</p>
						<button>в корзину</button>
					</div>
				</SwiperSlide>
				<SwiperSlide className={styles.slide}>
					<div className={styles.info}>
						<img src='https://i.ibb.co/X5ZG0MB/image-114-3.png' alt='букет' />
						<h3>лучший день</h3> <p className={styles.price}>167.000 ₽</p>
						<button>в корзину</button>
					</div>
				</SwiperSlide>
				<SwiperSlide className={styles.slide}>
					<div className={styles.info}>
						<img src='https://i.ibb.co/8rdWsxg/image-114-4.png' alt='букет' />
						<h3>лучший день</h3> <p className={styles.price}>167.000 ₽</p>
						<button>в корзину</button>
					</div>
				</SwiperSlide>
				<SwiperSlide className={styles.slide}>
					<div className={styles.info}>
						<img src='https://i.ibb.co/ZBnsC3q/image-114-5.png' alt='букет' />
						<h3>лучший день</h3> <p className={styles.price}>167.000 ₽</p>
						<button>в корзину</button>
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
	)
}

export default Slider
