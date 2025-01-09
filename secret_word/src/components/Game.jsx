import { useState } from 'react'
import './Game.css'

const Game = ({verifyLetter, pickedWord, pickedCategory, letters, guessedLetters, wrongLetters, guesses, score}) => {

  const [letter, setLetter] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <p className='points'>
        <span>Points: {score}</span>
      </p>
      <p className='tip'>
        <span>Word Tip: <span className='wordTip'>{pickedCategory}</span></span>
      </p>
      <p>You have {guesses} guess(es).</p>
      <div className='wordContainer'>
        {letters.map((l, i) => (
          guessedLetters.includes(l) 
          ? <span key={i} className='individualLetter'>A</span>
          : <span key={i} className='blank'></span>
        ))}
      </div>
      <div className='lettersContainer'>
        <form onSubmit={handleSubmit}>
          <input type="text" name="letter" maxLength="1" required onChange={(e) => setLetter(e.target.value)} value={letter}/>
          <button className="action-button">Try</button>
        </form>
      </div>
      <div className="wrongLettersContainer">
        <p>Already Used Letters:</p>
        {wrongLetters.map((l, i) => 
          <span key={i}>{l}, </span>
        )}
      </div>
    </>
  )
}

export default Game