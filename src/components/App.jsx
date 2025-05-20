// App.jsx

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Styles
import '../styles/index.scss'

// Components
import Header from './Header'
import Galeria from './Galeria'
import Disponivel from './Disponivel'
import Orcamento from './Orcamento'
import Sobre from './Sobre'
import Estudio from './Estudio'
import Footer from './Footer'
import ButtonWhats from './ButtonWhats'

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Galeria />} />
        <Route path="/disponiveis" element={<Disponivel />} />
        <Route path="/orcamento" element={<Orcamento />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/estudio" element={<Estudio />} />
      </Routes>
      <Footer />
      <ButtonWhats />
    </Router>
  )
}

export default App
