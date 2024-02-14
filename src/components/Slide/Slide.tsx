import 'swiper/css'
import styles from './Slide.module.scss'
import './Slide.module.scss'
import cn from 'classnames'
import { SlideProps } from './Slide.props'
import { Button } from '../Button/Button'
import { motion } from 'framer-motion'
import { countRegex } from '../../helpers/helpers'

const Slide = ({ bouquet }: SlideProps): JSX.Element => {
	return (
		<div className={styles.info}>
			<div className={styles.imgWrapper}>
				<motion.img
					className={styles.img}
					src={bouquet.img1x}
					srcSet={bouquet.img2x + ' 2x'}
					loading={'lazy'}
					alt={bouquet.name}
					whileHover={{ scale: 1.02 }}
				/>
				{bouquet.status !== 'none' && (
					<span
						className={cn(styles.ellipse, {
							[styles.new]: bouquet.status === 'new',
							[styles.sale]: bouquet.status === 'sale'
						})}
					>
						<p className={styles.ellipse}>{bouquet.status}</p>
					</span>
				)}
			</div>
			<h3>{bouquet.name}</h3>{' '}
			<p className={styles.price}> {countRegex(bouquet.price)}</p>
			<Button>в корзину</Button>
		</div>
	)
}

export default Slide
