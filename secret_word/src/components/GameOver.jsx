import './GameOver.css'

const GameOver = ({retry}) => {
  return (
    <>
      <button className="action-button" onClick={retry}>Retry</button>
    </>
  )
}

export default GameOver