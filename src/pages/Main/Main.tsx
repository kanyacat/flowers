import styles from './Main.module.scss'
import Intro from '../../components/Intro/Intro'
import Catalogue from '../../components/Catalogue/Catalogue'
import Popular from '../../components/Popular/Popular'
import HowDoOrder from '../../components/HowDoOrder/HowDoOrder'

const Main = () => {
	return (
		<div className={styles.root}>
			<Intro />
			<Catalogue />
			<Popular />
			<HowDoOrder />
		</div>
	)
}

export default Main
