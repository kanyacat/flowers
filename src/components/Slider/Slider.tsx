import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import styles from './Slider.module.scss'
import './Slider.module.scss'
import { ReactComponent as ArrowLeft } from './arrow2.svg'
import { ReactComponent as ArrowRight } from './arrow1.svg'

import { Navigation } from 'swiper/modules'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { SlideProps } from '../Slide/Slide.props'
import Slide from '../Slide/Slide'

const Slider = () => {
	const [slides, setSlides] = useState<SlideProps[]>([])
	async function getSlides(): Promise<void> {
		try {
			const { data } = await axios.get<SlideProps[]>(
				'https://65ba331eb4d53c0665524862.mockapi.io/flowers/Popular'
			)
			setSlides(data)
		} catch (error) {
			console.error(error)
		}
	}

	useEffect(() => {
		getSlides()
	}, [])

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
				{slides.map(s => (
					<SwiperSlide key={s.bouquet.img1x}>
						<Slide bouquet={s.bouquet} />
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}

export default Slider
