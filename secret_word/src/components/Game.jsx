import './Game.css'

const Game = ({verifyLetter}) => {
  return (
    <>
      <button className="action-button" onClick={verifyLetter}>End Game</button>
    </>
  )
}

export default Game