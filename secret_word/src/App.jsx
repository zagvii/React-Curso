// CSS
import './App.css'

// React
import {useCallback, useEffect, useState} from 'react'

// Data
import {wordsList} from './data/words.js'

// Componentes
import StartScreen from './components/StartScreen.jsx'
import GameOver from './components/GameOver.jsx'
import Game from './components/Game.jsx'

const stages = [
  {id: 1, name: 'start'},
  {id: 2, name: 'game'},
  {id: 3, name: 'end'}
]

function App() {

  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  // Starts game
  const startGame = () => {
    setGameStage(stages[1].name)
  }

  // Process letter input
  const verifyLetter = () => {
    setGameStage(stages[2].name)
  }

  // Retry game
  const retry = () => {
    setGameStage(stages[0].name)
  }


  return (
    <>
      <h1>Guess the word!</h1>
      {gameStage === 'start' && <StartScreen startGame={startGame}/>}
      {gameStage === 'game' && <Game verifyLetter={verifyLetter}/>}
      {gameStage === 'end' && <GameOver retry={retry}/>}
    </>
  )
}

export default App
