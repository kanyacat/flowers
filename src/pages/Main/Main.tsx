import styles from './Main.module.scss'
import Intro from '../../components/Intro/Intro'
import Catalogue from '../../components/Catalogue/Catalogue'
import Popular from '../../components/Popular/Popular'
import HowDoOrder from '../../components/HowDoOrder/HowDoOrder'
import Special from '../../components/Special/Special'

const Main = () => {
	return (
		<div className={styles.root}>
			<Intro />
			<Catalogue />
			<Popular />
			<HowDoOrder />
			<Special />
		</div>
	)
}

export default Main
