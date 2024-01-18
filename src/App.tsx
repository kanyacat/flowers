import { Routes } from 'react-router-dom'
import Header from './components/Header/Header'

function App() {
	return (
		<>
			<Header isMain={false} />
			{/*<Main />*/}
			{/*<Footer />*/}
			<Routes>{/*<Route path='/' element={<Header />} />*/}</Routes>
		</>
	)
}

export default App
