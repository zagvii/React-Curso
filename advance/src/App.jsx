import './App.css'
import CarDetails from './components/CarDetails'
//import ConditionalRender from './components/ConditionalRender'
import ShowUserName from './components/ShowUserName'
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
      <ListRender />
      <ConditionalRender />*/}
      {/* props */}
      <ShowUserName name="Mirian" />
      {/* destructuring props */}
      <CarDetails brand="VW" km={10000} color="Branco" />
      {/* reaproveitando */}
      <CarDetails brand="Fiat" color="Azul" km={0} />
      <CarDetails brand="Ford" color="Preto" km={4500} />
    </>
  )
}

export default App
