import styles from './Inst.module.scss'
import Container from '../Container/Container'
import { Link } from 'react-router-dom'
import { ReactComponent as InstIcon } from '../Intro/SocialIcons/inst.svg'
import { ReactComponent as WhatsappIcon } from '../Intro/SocialIcons/wats.svg'
import { ReactComponent as MobileIcon } from '../Intro/SocialIcons/mobile.svg'

const Inst = () => {
	return (
		<div className={styles.root}>
			<span className={styles.backtext}>instagram</span>
			<span className={styles.blur} />
			<Container>
				<div className={styles.inst}>
					<div className={styles.photo}>
						<img
							src={
								'https://i.ibb.co/vQNLTyR/c7eed136e8c838ca0db681afa5ec7d37.png'
							}
							srcSet={'https://i.ibb.co/L1hcf9C/Rectangle-44-1.png 2x'}
							loading={'lazy'}
							alt='ёлочка'
						/>
						<img
							src={
								'https://i.ibb.co/ygKLj5G/737e506895fbf964ca1c64eb32bf7a3d.png'
							}
							srcSet={'https://i.ibb.co/JFMHJpD/Rectangle-45-1.png 2x'}
							loading={'lazy'}
							alt='букет-ёлка'
						/>
						<img
							src={
								'https://i.ibb.co/MZkgg4g/1c8914cae6d460c6ba629167278304dd.png'
							}
							srcSet={'https://i.ibb.co/zhRBDhW/Rectangle-46-1.png 2x'}
							loading={'lazy'}
							alt='свечки'
						/>
						<img
							src={
								'https://i.ibb.co/KD26phZ/00379419340f32647c4044263a074534.png'
							}
							srcSet={'https://i.ibb.co/k3GbdHC/Rectangle-47-1.png 2x'}
							loading={'lazy'}
							alt='золотой букет'
						/>
					</div>
					<span className={styles.social}>
						<img
							src='https://i.ibb.co/R6S3hd5/Component-1-1.png'
							alt='our social'
							loading={'lazy'}
						/>
						<div className={styles.socialBtn}>
							<Link to={'/'} className={styles.socialLink}>
								<InstIcon />
							</Link>
							<Link to={'/'} className={styles.socialLink}>
								<WhatsappIcon />
							</Link>
							<Link to={'/'} className={styles.socialLink}>
								<MobileIcon />
							</Link>
						</div>
					</span>
				</div>
			</Container>
		</div>
	)
}

export default Inst
