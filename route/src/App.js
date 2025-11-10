import './App.css';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import Info from './pages/Info';
import NotFound from './pages/NotFound';

// Componentes
import Navbar from './components/Navbar';
import SearchForm from './components/SearchForm';

// Configurando ReactRouter
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Search from './pages/Search';

function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
      {/* Esse componente estará presente em todas as páginas (Como se fosse um cabeçalho ou um rodapé) */}
      <BrowserRouter>
        <Navbar/>
        {/* Search Params */}
        <SearchForm />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          {/* Rota Dinâmica */}
          <Route path='/products/:id' element={<Product />} />
          {/* Nested Route */}
          <Route path='/products/:id/info' element={<Info />}/>
          {/* Search Route */}
          <Route path='/search' element={<Search />}/>
          {/* No Match Route - 404 */}
          <Route path='*' element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
