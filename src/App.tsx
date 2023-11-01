import Header from './components/Header/Header'
import { Routes } from 'react-router-dom'
import Main from './pages/Main/Main'

function App() {
	return (
		<>
			<Header isMain={false} />
			<Main />
			<Routes>{/*<Route path='/' element={<Header />} />*/}</Routes>
		</>
	)
}

export default App
