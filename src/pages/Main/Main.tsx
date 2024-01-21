import styles from './Main.module.scss'
import Intro from '../../components/Intro/Intro'
import Catalogue from '../../components/Catalogue/Catalogue'
import Popular from '../../components/Popular/Popular'
import HowDoOrder from '../../components/HowDoOrder/HowDoOrder'
import Special from '../../components/Special/Special'
import Questions from '../../components/Questions/Questions'
import Inst from '../../components/Inst/Inst'

const Main = () => {
	return (
		<div className={styles.root}>
			<Intro />
			<Catalogue />
			<Popular />
			<HowDoOrder />
			<Special />
			<Questions />
			<Inst />
		</div>
	)
}

export default Main
