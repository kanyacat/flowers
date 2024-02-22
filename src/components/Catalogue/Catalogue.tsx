import { useEffect, useState } from 'react'
import axios from 'axios'
import { motion } from 'framer-motion'
import Container from '../Container/Container'
import { variants } from '../../helpers/animation/animation'
import { Link } from 'react-router-dom'
import styles from './Catalogue.module.scss'
import { CatalogueData, FlowersData } from '../../../interface/FlowersData'

const Catalogue = () => {
	const [catalogue, setCatalogue] = useState<CatalogueData>()
	async function getCatalogue(): Promise<void> {
		try {
			const { data } = await axios.get<FlowersData[]>(
				'https://65d6fa3727d9a3bc1d79cd57.mockapi.io/api/flowers'
			)
			setCatalogue(data[0].catalogue)
		} catch (error) {
			console.error(error)
		}
	}

	useEffect(() => {
		getCatalogue()
	}, [])

	return (
		<motion.div
			className={styles.root}
			initial={'hidden'}
			whileInView={'visible'}
			viewport={{ amount: 0.2, once: true }}
		>
			<span className={styles.backtext}>
				<span>букеты</span>
				<span>цветы</span>
				<span>дополнительно</span>
			</span>
			<Container>
				<motion.h1 variants={variants}>Каталог</motion.h1>
				<div className={styles.cards}>
					<motion.div className={styles.text} variants={variants}>
						<p>
							У нас самый большой выбор цветов, букетов, открыток и подарков. Мы
							всегда поможем вам подобрать букет для вашего события, наш
							менеджер вас проконсультирует и поможет определиться с выбором
						</p>
						<p>Ознакомьтесь с нашими разделами каталога</p>
					</motion.div>

					<motion.div className={styles.card} variants={variants} custom={1.5}>
						<h2>готовые букеты из сухоцветов</h2>
						<ul>
							{catalogue?.driedflowers.map((f: any) => (
								<li key={f} className={styles.list}>
									{f}
								</li>
							))}
							<Link to={'/'} className={styles.link}>
								смотреть каталог
							</Link>
						</ul>
					</motion.div>
					<motion.div className={styles.card} variants={variants} custom={2}>
						<h2>Цветы</h2>
						<ul>
							{catalogue?.flowers.map((f: any) => (
								<li key={f} className={styles.list}>
									{f}
								</li>
							))}
							<Link to={'/'} className={styles.link}>
								смотреть каталог
							</Link>
						</ul>
					</motion.div>
					<motion.div className={styles.card} variants={variants} custom={3}>
						<h2>дополнительно</h2>
						<ul>
							{catalogue?.additionally.map((f: any) => (
								<li key={f} className={styles.list}>
									{f}
								</li>
							))}
							<Link to={'/'} className={styles.link}>
								смотреть каталог
							</Link>
						</ul>
					</motion.div>
				</div>
			</Container>
		</motion.div>
	)
}

export default Catalogue
