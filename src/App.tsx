import { Routes } from 'react-router-dom'
import Main from './pages/Main/Main'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {
	return (
		<>
			<Header isMain={true} />
			<Main />
			<Footer />
			<Routes>{/*<Route path='/' element={<Header />} />*/}</Routes>
		</>
	)
}

export default App
