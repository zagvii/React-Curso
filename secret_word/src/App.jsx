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

  return (
    <>
      <h1>Guess the word!</h1>
      {gameStage === 'start' && <StartScreen />}
      {gameStage === 'game' && <Game />}
      {gameStage === 'end' && <GameOver />}
    </>
  )
}

export default App
