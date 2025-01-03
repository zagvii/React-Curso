import './App.css'

import ExecuteFunction from './components/ExecuteFunction'
// import Container from './components/Container'
// import CarDetails from './components/CarDetails'
// import ConditionalRender from './components/ConditionalRender'
// import ShowUserName from './components/ShowUserName'
// import ListRender from './components/ListRender'
// import ManageData from './components/ManageData'
// import Gatinho from './assets/gatinho.jpg'

function App() {

  /*const cars =[
    {id: 1, brand: "Ferrari", color: "Amarelo", isNew: true},
    {id: 2, brand: "BYD", color: "Verde", isNew: false},
    {id: 3, brand: "Tesla", color: "Roxo", isNew: false},
  ]*/

  function showMessage() {
    console.log("Mensagem do componente pai!")
  } 

  return (
    <>
      <h1>Avançando em React</h1>
      {/*
      -- Imagem na pasta public
      <div>
        <img src="/cachorrinho.jpg" alt="Cachorrinho" />
      </div>
        -- Imagem na pasta assets - Precisa importar como se fosse um componente
      <div>
        <img src={Gatinho} alt="Gatinho" />
      </div> 
      <ManageData />
      <ListRender />
      <ConditionalRender />
      -- props 
      <ShowUserName name="Mirian" />
      -- destructuring props 
      <CarDetails brand="VW" km={10000} color="Branco" />
      -- reaproveitando 
      <CarDetails brand="Fiat" color="Azul" km={0} />
      <CarDetails brand="Ford" color="Preto" km={4500} /> 
      -- Renderizando lista em um componente 
      {cars.map((car) => (
        <CarDetails key={car.id} brand={car.brand} color={car.color} km={car.km} />
      ))}
      <Container>
        <p>Esse é o conteúdo do container.</p>
      </Container>
      */}
      {/* Funções no prop */}
      <ExecuteFunction myFunction={showMessage}/>
    </>
  )
}

export default App
