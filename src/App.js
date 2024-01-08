// App.js
import {useState, useEffect} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import {
  PlayingViewContainer,
  GameRulesContainer,
  GameResultsViewContainer,
} from './components/StyledComponents'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

const App = () => {
  const [score, setScore] = useState(0)
  const [userChoice, setUserChoice] = useState(null)
  const [opponentChoice, setOpponentChoice] = useState(null)
  const [isRulesPopupOpen, setRulesPopupOpen] = useState(false)

  const determineResult = newOpponentChoice => {
    if (userChoice === newOpponentChoice) return 'DRAW'
    if (
      (userChoice === 'ROCK' && newOpponentChoice === 'SCISSORS') ||
      (userChoice === 'SCISSORS' && newOpponentChoice === 'PAPER') ||
      (userChoice === 'PAPER' && newOpponentChoice === 'ROCK')
    ) {
      return 'WIN'
    }
    return 'LOSE'
  }

  const handleResult = result => {
    if (result === 'WIN') {
      setScore(prevScore => prevScore + 1)
    } else if (result === 'LOSE') {
      setScore(prevScore => prevScore - 1)
    }
  }

  useEffect(() => {
    if (userChoice) {
      const opponentChoiceIndex = Math.floor(Math.random() * choicesList.length)
      const newOpponentChoice = choicesList[opponentChoiceIndex].id
      setOpponentChoice(newOpponentChoice)

      const result = determineResult(userChoice, newOpponentChoice)
      handleResult(result)
    }
  }, [userChoice])

  const resetGame = () => {
    setUserChoice(null)
    setOpponentChoice(null)
  }

  const openRulesPopup = () => {
    setRulesPopupOpen(true)
  }

  const closeRulesPopup = () => {
    setRulesPopupOpen(false)
  }

  return (
    <PlayingViewContainer>
      <h1>Rock Paper Scissors</h1>
      <div className="score">Score: {score}</div>
      <div className="choices-container">
        {choicesList.map(choice => (
          <button
            type="button"
            key={choice.id}
            onClick={() => setUserChoice(choice.id)}
          >
            {choice.id}
          </button>
        ))}
      </div>
      <button type="button" onClick={openRulesPopup}>
        Rules
      </button>

      {/* Game Rules Popup */}
      <Popup
        open={isRulesPopupOpen}
        closeOnDocumentClick
        onClose={closeRulesPopup}
        contentStyle={{
          maxWidth: '600px',
          padding: '20px',
          borderRadius: '10px',
        }}
      >
        <GameRulesContainer>
          <img
            src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
            alt="rules"
          />
          <button type="button" onClick={closeRulesPopup}>
            <RiCloseLine aria-label="button-image" size={30} />
          </button>
        </GameRulesContainer>
      </Popup>

      {/* Game Results View */}
      {userChoice && opponentChoice && (
        <GameResultsViewContainer>
          <h1>Game Results</h1>
          <div className="choices-container">
            <img
              src={
                choicesList.find(choice => choice.id === userChoice)?.imageUrl
              }
              alt="Your Choice"
            />
            <img
              src={
                choicesList.find(choice => choice.id === opponentChoice)
                  ?.imageUrl
              }
              alt="Opponent Choice"
            />
          </div>
          <div className="result">
            {determineResult(userChoice, opponentChoice)}
          </div>
          <button className="play-again" type="button" onClick={resetGame}>
            Play Again
          </button>
        </GameResultsViewContainer>
      )}
    </PlayingViewContainer>
  )
}

export default App
