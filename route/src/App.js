import './App.css';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';

// Componentes
import Navbar from './components/Navbar';

// Configurando ReactRouter
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
      {/* Esse componente estará presente em todas as páginas (Como se fosse um cabeçalho ou um rodapé) */}
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          {/* Rota Dinâmica */}
          <Route path='/products/:id' element={<Product />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
