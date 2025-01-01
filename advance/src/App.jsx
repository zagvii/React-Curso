import './App.css'
import ConditionalRender from './components/ConditionalRender'
//import ListRender from './components/ListRender'
//import ManageData from './components/ManageData'
// import Gatinho from './assets/gatinho.jpg'

function App() {
  return (
    <>
      <h1>Avançando em React</h1>
      {/* -- Imagem na pasta public
      <div>
        <img src="/cachorrinho.jpg" alt="Cachorrinho" />
      </div>
        -- Imagem na pasta assets - Precisa importar como se fosse um componente
      <div>
        <img src={Gatinho} alt="Gatinho" />
      </div> 
      <ManageData />
      <ListRender />*/}
      <ConditionalRender />
    </>
  )
}

export default App
