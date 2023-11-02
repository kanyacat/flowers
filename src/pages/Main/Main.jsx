import styles from './Main.module.scss'
import Container from '../../components/Container/Container'

const Main = () => {
	return (
		<div className={styles.root}>
			<div className={styles.main}>
				<span className={styles.flowers} />
				<div className={styles.content}>
					<Container>
						<h1>LOVER</h1>
						<span>
							<h1>FLOWER</h1>
							<p className={styles.text}>
								Создаём для тех, кто ценит свежесть и изящество цветка
							</p>
							<button>смотреть каталог</button>
						</span>
					</Container>
				</div>
			</div>
		</div>
	)
}

export default Main
