import styles from './Main.module.scss'
import Container from '../../components/Container/Container'

const Main = () => {
	return (
		<div className={styles.root}>
			<div className={styles.main}>
				<span className={styles.flowers} />
				<div className={styles.content}>
					<h1>LOVER FLOWER</h1>
				</div>
			</div>
			<Container> me</Container>
		</div>
	)
}

export default Main
