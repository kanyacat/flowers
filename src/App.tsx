import { Routes } from 'react-router-dom'
import Main from './pages/Main/Main'
import Header from './components/Header/Header'

function App() {
	return (
		<>
			<Header isMain={true} />
			<Main />
			<Routes>{/*<Route path='/' element={<Header />} />*/}</Routes>
		</>
	)
}

export default App
