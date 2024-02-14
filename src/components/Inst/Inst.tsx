import styles from './Inst.module.scss'
import Container from '../Container/Container'
import { motion } from 'framer-motion'
import { variants } from '../../helpers/animation/animation'
import Social from '../Social/Social'

const Inst = () => {
	return (
		<motion.div
			className={styles.root}
			initial={'hidden'}
			whileInView={'visible'}
			viewport={{ amount: 0.2, once: true }}
		>
			<span className={styles.backtext}>instagram</span>
			<span className={styles.blur} />
			<Container>
				<div className={styles.inst}>
					<div className={styles.photo}>
						<motion.img
							src={
								'https://i.ibb.co/vQNLTyR/c7eed136e8c838ca0db681afa5ec7d37.png'
							}
							srcSet={'https://i.ibb.co/L1hcf9C/Rectangle-44-1.png 2x'}
							loading={'lazy'}
							alt='ёлочка'
							whileHover={{ scale: 1.05 }}
							variants={variants}
							custom={1}
						/>
						<motion.img
							src={
								'https://i.ibb.co/ygKLj5G/737e506895fbf964ca1c64eb32bf7a3d.png'
							}
							srcSet={'https://i.ibb.co/JFMHJpD/Rectangle-45-1.png 2x'}
							loading={'lazy'}
							alt='букет-ёлка'
							whileHover={{ scale: 1.05 }}
							variants={variants}
							custom={1.5}
						/>
						<motion.img
							src={
								'https://i.ibb.co/MZkgg4g/1c8914cae6d460c6ba629167278304dd.png'
							}
							srcSet={'https://i.ibb.co/zhRBDhW/Rectangle-46-1.png 2x'}
							loading={'lazy'}
							alt='свечки'
							whileHover={{ scale: 1.05 }}
							variants={variants}
							custom={2}
						/>
						<motion.img
							src={
								'https://i.ibb.co/KD26phZ/00379419340f32647c4044263a074534.png'
							}
							srcSet={'https://i.ibb.co/k3GbdHC/Rectangle-47-1.png 2x'}
							loading={'lazy'}
							alt='золотой букет'
							whileHover={{ scale: 1.05 }}
							variants={variants}
							custom={2.5}
						/>
					</div>
					<span className={styles.social}>
						<img
							src='https://i.ibb.co/R6S3hd5/Component-1-1.png'
							alt='our social'
							loading={'lazy'}
						/>
						<div className={styles.socialBtn}>
							<Social className={styles.socialLink} icon={'inst'} />
							<Social className={styles.socialLink} icon={'whatsapp'} />
							<Social className={styles.socialLink} icon={'mobile'} />
						</div>
					</span>
				</div>
			</Container>
		</motion.div>
	)
}

export default Inst
