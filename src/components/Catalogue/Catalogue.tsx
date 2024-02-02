import styles from './Catalogue.module.scss'
import Container from '../../components/Container/Container'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

interface CatalogueData {
		driedflowers: string[];
		flowers: string[];
		additionally: string[];
		id: string;
}

const Catalogue = () => {
	
	const [catalogue, setCatalogue] = useState<CatalogueData[]>([])
	async function getCatalogue():Promise<void> {
		try {
			const {data} = await axios.get<CatalogueData[]>('https://65ba331eb4d53c0665524862.mockapi.io/flowers/Catalogue');
			setCatalogue(data)
		} catch (error) {
			console.error(error);
		}
	}
	
	useEffect(() => {
		getCatalogue()
	}, [])
	
	
	return (
		<div className={styles.root}>
			<span className={styles.backtext}>
				<span>букеты</span>
				<span>цветы</span>
				<span>дополнительно</span>
			</span>
			<Container>
				<h1>Каталог</h1>
				<div className={styles.cards}>
					<div className={styles.text}>
						<p>
							У нас самый большой выбор цветов, букетов, открыток и подарков. Мы
							всегда поможем вам подобрать букет для вашего события, наш
							менеджер вас проконсультирует и поможет определиться с выбором
						</p>
						<p>Ознакомьтесь с нашими разделами каталога</p>
					</div>

					<div className={styles.card}>
						<h2>готовые букеты из сухоцветов</h2>
						<ul>
							{catalogue[0]?.driedflowers.map((f) => <li  key={f} className={styles.list}>{f}</li>
							)}
							<Link to={'/'} className={styles.link}>
								смотреть каталог
							</Link>
						</ul>
					</div>
					<div className={styles.card}>
						<h2>Цветы</h2>
						<ul>
							{catalogue[0]?.flowers.map((f) => <li key={f} className={styles.list}>{f}</li>
							)}
							<Link to={'/'} className={styles.link}>
								смотреть каталог
							</Link>
						</ul>
					</div>
					<div className={styles.card}>
						<h2>дополнительно</h2>
						<ul>
							{catalogue[0]?.additionally.map((f) => <li key={f} className={styles.list}>{f}</li>
							)}
							<Link to={'/'} className={styles.link}>
								смотреть каталог
							</Link>
						</ul>
					</div>
				</div>
			</Container>
		</div>
	)
}

export default Catalogue
