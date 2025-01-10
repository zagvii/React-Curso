import './GameOver.css'

const GameOver = ({retry, score}) => {
  return (
    <>
      <p className='gameOverMessage'>
        <span>Sorry, your guesses have ended...</span>
      </p>
      <p className='finalScore'>
        <span>Your total score is: {score}!</span>
      </p>
      <button className="action-button" onClick={retry}>Retry</button>
    </>
  )
}

export default GameOver