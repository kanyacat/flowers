import Header from './components/Header/Header'
import Container from './components/Container/Container'
import { Routes } from 'react-router-dom'

function App() {
	return (
		<Container>
			<Header isMain={true} />
			<Routes>{/*<Route path='/' element={<Header />} />*/}</Routes>
		</Container>
	)
}

export default App
