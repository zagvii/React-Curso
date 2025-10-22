import './App.css';

//Pages
import Home from './pages/Home';
import About from './pages/About';

// Configurando ReactRouter
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
      {/* Esse componente estará presente em todas as páginas (Como se fosse um cabeçalho ou um rodapé) */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
