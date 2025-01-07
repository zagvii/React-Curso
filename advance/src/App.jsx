// import { useState } from 'react'
import './App.css'
import MyComponent from './components/MyComponent'
import Title from './components/Title';

// import UsersDetail from './components/usersDetail'
// import Message from './components/Message';
// import ChangeMessageState from './components/ChangeMessageState';
// import ExecuteFunction from './components/ExecuteFunction'
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
  ]

  function showMessage() {
    console.log("Mensagem do componente pai!")
  } 

  const [message, setMessage] = useState ("");

  const handleMessage = (msg) => {
    setMessage(msg)
  } 

  const users = [
    {id: 1, name: "Maria", age: 23, profession: "Professora"},
    {id: 2, name: "Lucas", age: 12, profession: "Estudante"},
    {id: 3, name: "Matheus", age: 34, profession: "Caminhoneiro"},
  ] */

    const x = 1;

  return (
    <>
      {/*<h1>Avançando em React</h1>
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
      -- Funções no prop 
      <ExecuteFunction myFunction={showMessage}/>
      -- State Lift 
        -- Componente que consome o dado 
      <Message msg={message} />
        -- Componente que altera o dado 
      <ChangeMessageState handleMessage={handleMessage} />
      {users.map((user) => (
        <UsersDetail key={user.id} name={user.name} age={user.age} profession={user.profession} />
      ))} */}
      <h1>CSS - Global</h1>
      <MyComponent />
      <p>Parágrafo fora do componente - Global</p>
      <p style={{color: "blue", padding: "25px", borderRadius: "5px"}}>Elemento estilizado com CSS inline</p>
      <p style={ x > 1 ? {color: "yellow"} : {color: "green"}}>Elemento estilizado com CSS inline dinâmicamente (IF-ELSE)</p>
      <p style={ x <= 1 ? {color: "yellow"} : null}>Elemento estilizado com CSS inline dinâmicamente (IF-ELSE)</p>
      <p className={ x > 1 ? "yellowBackground" : "greenBackground"}>Classes Dinâmicas (IF-ELSE)</p>
      <p className={ x <= 1 ? "yellowBackground" : "greenBackground"}>Classes Dinâmicas (IF-ELSE)</p>
      {/* CSS Modules*/}
      <Title />
    </>
  )
}

export default App
