import styles from './Main.module.scss'
import Intro from '../../components/Intro/Intro'
import Catalogue from '../../components/Catalogue/Catalogue'

const Main = () => {
	return (
		<div className={styles.root}>
			<Intro />
			<Catalogue />
			{/*<Popular />*/}
			{/*<HowDoOrder />*/}
			{/*<Special />*/}
			{/*<Questions />*/}
			{/*<Inst />*/}
		</div>
	)
}

export default Main
