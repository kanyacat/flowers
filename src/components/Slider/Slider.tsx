import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import styles from './Slider.module.scss'
import './Slider.module.scss'
import { ReactComponent as ArrowLeft } from './arrow2.svg'
import { ReactComponent as ArrowRight } from './arrow1.svg'

import { Navigation } from 'swiper/modules'

const Slider = () => {
	return (
		<div className={styles.root}>
			<div className={styles.arrows}>
				<div className={styles.next}>
					<div className='swiper-button image-swiper-button-next'>
						<ArrowRight />
					</div>
				</div>
				<div className={styles.prev}>
					<div className='swiper-button image-swiper-button-prev'>
						<ArrowLeft />
					</div>
				</div>
			</div>

			<Swiper
				breakpoints={{
					768: {
						slidesPerView: 2
					},
					1024: {
						slidesPerView: 3
					}
				}}
				spaceBetween={30}
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
						<div>
							<span className={styles.new}>
								<p className={styles.ellipse}>NEW</p>
							</span>
							<img
								className={styles.img}
								src='https://i.ibb.co/X5ZG0MB/image-114-3.png 1x'
								srcSet={'https://i.ibb.co/j6sN2C4/image-114.png 2x'}
								loading={'lazy'}
								alt='букет'
							/>
						</div>
						<h3>лучший день</h3> <p className={styles.price}>167.000 ₽</p>
						<button>в корзину</button>
					</div>
				</SwiperSlide>
				<SwiperSlide className={styles.slide}>
					<div className={styles.info}>
						<img
							className={styles.img}
							src='https://i.ibb.co/8rdWsxg/image-114-4.png'
							srcSet={'https://i.ibb.co/pLwPHds/image-114-2.png 2x'}
							loading={'lazy'}
							alt='букет'
						/>
						<h3>лучший день</h3> <p className={styles.price}>167.000 ₽</p>
						<button>в корзину</button>
					</div>
				</SwiperSlide>
				<SwiperSlide className={styles.slide}>
					<div className={styles.info}>
						<span className={styles.sale}>
							<p className={styles.ellipse}>SALE</p>
						</span>
						<img
							className={styles.img}
							src='https://i.ibb.co/ZBnsC3q/image-114-5.png'
							srcSet={'https://i.ibb.co/ZB5QcSV/image-114-3.png 2x'}
							loading={'lazy'}
							alt='букет'
						/>
						<h3>лучший день</h3> <p className={styles.price}>167.000 ₽</p>
						<button>в корзину</button>
					</div>
				</SwiperSlide>
				<SwiperSlide className={styles.slide}>
					<div className={styles.info}>
						<img
							className={styles.img}
							src='https://i.ibb.co/X5ZG0MB/image-114-3.png'
							srcSet={'https://i.ibb.co/j6sN2C4/image-114.png 2x'}
							loading={'lazy'}
							alt='букет'
						/>
						<h3>лучший день</h3> <p className={styles.price}>167.000 ₽</p>
						<button>в корзину</button>
					</div>
				</SwiperSlide>
				<SwiperSlide className={styles.slide}>
					<div className={styles.info}>
						<img
							className={styles.img}
							src='https://i.ibb.co/8rdWsxg/image-114-4.png'
							srcSet={'https://i.ibb.co/pLwPHds/image-114-2.png 2x'}
							loading={'lazy'}
							alt='букет'
						/>
						<h3>лучший день</h3> <p className={styles.price}>167.000 ₽</p>
						<button>в корзину</button>
					</div>
				</SwiperSlide>
				<SwiperSlide className={styles.slide}>
					<div className={styles.info}>
						<img
							className={styles.img}
							src='https://i.ibb.co/ZBnsC3q/image-114-5.png'
							srcSet={'https://i.ibb.co/ZB5QcSV/image-114-3.png 2x'}
							loading={'lazy'}
							alt='букет'
						/>
						<h3>лучший день</h3> <p className={styles.price}>167.000 ₽</p>
						<button>в корзину</button>
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
	)
}

export default Slider
