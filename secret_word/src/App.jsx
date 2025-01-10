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

const guessesQtd = 3;

function App() {

  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState([]);

  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(guessesQtd);
  const [score, setScore] = useState(0);

  // useCallback - Verify if there words are returned
  const pickWordAndCategory = useCallback(() => {
    // Picks random category
    const categories = Object.keys(words);
    // Math.random - Choose float number acordingly with the amount multiplied
    // Math.floor - Transforms the float number to int
    const category = categories[Math.floor(Math.random() * Object.keys(words).length)];

    // Picks random word from category choosen
    const word = words[category][Math.floor(Math.random() * words[category].length)];
    
    return {category, word};
  }, [words])

  // Starts game
  // useCallback - Verify if function pickWordAndCategory works
  const startGame = useCallback(() => {
    clearAllStates();

    // Choose word and category randomly
    const {word, category} = pickWordAndCategory();

    // Create letters array
    let wordLetters = word.split("");
    wordLetters = wordLetters.map((l) => l.toLowerCase())

    setPickedWord(word);
    setPickedCategory(category);
    setLetters(wordLetters);

    setGameStage(stages[1].name);
  }, [pickWordAndCategory])

  // Process letter input
  const verifyLetter = (letter) => {
    const letterLowerCase = letter.toLowerCase();

    // Check if letter has been already used
    if (guessedLetters.includes(letterLowerCase) || wrongLetters.includes(letterLowerCase)) {
      return;
    }

    if (letters.includes(letterLowerCase)) {
      setGuessedLetters((actualGuessedLetter) => [
        ...actualGuessedLetter,
        letterLowerCase
      ]);
    } else {
      setWrongLetters((actualWrongLetter) => [
        ...actualWrongLetter,
        letterLowerCase
      ]);
      setGuesses((actualGuesses) => actualGuesses - 1)
    }
  }

  // Monitor any data
  useEffect(() => {
    if (guesses <= 0) {
      clearAllStates();
      setGameStage(stages[2].name);
    }
  }, [guesses])

  useEffect(() => {
    // Return only unique letters from picked word
    const uniqueLetters = [...new Set(letters)];

    if (guessedLetters.length === uniqueLetters.length && gameStage == 'game') {
      setScore((actualScore) => actualScore += 100);
      startGame();
    }

  }, [guessedLetters, letters, startGame, gameStage])

  const clearAllStates = () => {
    setPickedWord("");
    setPickedCategory("");
    setLetters([]);
    setGuessedLetters([]);
    setWrongLetters([]);
  }

  const clearScores = () => {
    setScore(0);
    setGuesses(guessesQtd);
  }

  // Retry game
  const retry = () => {
    clearScores();
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
      {gameStage === 'end' && <GameOver retry={retry} score={score}/>}
    </>
  )
}

export default App
