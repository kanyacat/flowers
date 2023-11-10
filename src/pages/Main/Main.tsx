import styles from './Main.module.scss'
import Intro from '../../components/Intro/Intro'
import Catalogue from '../../components/Catalogue/Catalogue'
import Popular from '../../components/Popular/Popular'

const Main = () => {
	return (
		<div className={styles.root}>
			<Intro />
			<Catalogue />
			<Popular />
		</div>
	)
}

export default Main
