import styles from './Main.module.scss'
import Intro from '../../components/Intro/Intro'

const Main = () => {
	return (
		<div className={styles.root}>
			<Intro />
			Каталог
		</div>
	)
}

export default Main
