import './StartScreen.css'

const StartScreen = ({startGame}) => {
  return (
    <>
      <button className="action-button" onClick={startGame}>Play</button>
    </>
  )
}

export default StartScreen