import styles from './Catalogue.module.scss'
import Container from '../../components/Container/Container'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { motion } from 'framer-motion'
import { variants } from '../../animation/animation'

interface CatalogueData {
	driedflowers: string[]
	flowers: string[]
	additionally: string[]
	id: string
}

const Catalogue = () => {
	const [catalogue, setCatalogue] = useState<CatalogueData[]>([])
	async function getCatalogue(): Promise<void> {
		try {
			const { data } = await axios.get<CatalogueData[]>(
				'https://65ba331eb4d53c0665524862.mockapi.io/flowers/Catalogue'
			)
			setCatalogue(data)
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
			viewport={{ amount: 0.2 }}
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

					<motion.div className={styles.card} variants={variants} custom={1.8}>
						<h2>готовые букеты из сухоцветов</h2>
						<ul>
							{catalogue[0]?.driedflowers.map(f => (
								<li key={f} className={styles.list}>
									{f}
								</li>
							))}
							<Link to={'/'} className={styles.link}>
								смотреть каталог
							</Link>
						</ul>
					</motion.div>
					<motion.div className={styles.card} variants={variants} custom={2.6}>
						<h2>Цветы</h2>
						<ul>
							{catalogue[0]?.flowers.map(f => (
								<li key={f} className={styles.list}>
									{f}
								</li>
							))}
							<Link to={'/'} className={styles.link}>
								смотреть каталог
							</Link>
						</ul>
					</motion.div>
					<motion.div className={styles.card} variants={variants} custom={3.4}>
						<h2>дополнительно</h2>
						<ul>
							{catalogue[0]?.additionally.map(f => (
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
