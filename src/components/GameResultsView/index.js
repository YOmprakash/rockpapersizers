// GameResultsView.js
import React, {useEffect} from 'react'
import {GameResultsViewContainer} from './StyledComponents'

const GameResultsView = ({
  userChoice,
  opponentChoice,
  onPlayAgain,
  onResult,
}) => {
  useEffect(() => {
    const result = determineResult(userChoice, opponentChoice)
    onResult(result)
  }, [userChoice, opponentChoice, onResult])

  const determineResult = (userChoice, opponentChoice) => {
    // Determine the result based on choices
    // Add your logic here
  }

  return (
    <GameResultsViewContainer>
      <h1>Game Results</h1>
      <div className="choices-container">
        <img src={/* URL for userChoice image */} alt="Your Choice" />
        <img src={/* URL for opponentChoice image */} alt="Opponent Choice" />
      </div>
      <div className="result">{/* Result message */}</div>
      <button className="play-again" onClick={onPlayAgain}>
        Play Again
      </button>
    </GameResultsViewContainer>
  )
}

export default GameResultsView
