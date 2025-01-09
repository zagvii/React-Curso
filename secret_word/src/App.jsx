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

  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState([]);

  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(3);
  const [score, setScore] = useState(0);

  const pickWordAndCategory = () => {
    // Picks random category
    const categories = Object.keys(words);
    // Math.random - Choose float number acordingly with the amount multiplied
    // Math.floor - Transforms the float number to int
    const category = categories[Math.floor(Math.random() * Object.keys(words).length)];

    // Picks random word from category choosen
    const word = words[category][Math.floor(Math.random() * words[category].length)];
    
    return {category, word};
  }

  // Starts game
  const startGame = () => {
    // Choose word and category randomly
    const {word, category} = pickWordAndCategory();

    // Create letters array
    let wordLetters = word.split("");
    wordLetters = wordLetters.map((l) => l.toLowerCase())

    setPickedWord(word);
    setPickedCategory(category);
    setLetters(wordLetters);

    console.log(word);

    setGameStage(stages[1].name);
  }

  // Process letter input
  const verifyLetter = () => {
    setGameStage(stages[2].name);
  }

  // Retry game
  const retry = () => {
    setGameStage(stages[0].name);
  }

  return (
    <>
      <h1>Guess the word!</h1>
      {gameStage === 'start' && <StartScreen startGame={startGame}/>}
      {gameStage === 'game' && <Game verifyLetter={verifyLetter} 
                                      pickedWord={pickedWord}
                                      pickedCategory={pickedCategory}
                                      letters={letters}
                                      guessedLetters={guessedLetters}
                                      wrongLetters={wrongLetters}
                                      guesses={guesses }
                                      score={score}
                                />}
      {gameStage === 'end' && <GameOver retry={retry}/>}
    </>
  )
}

export default App
