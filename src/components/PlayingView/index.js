// PlayingView.js
import React from 'react'
import {PlayingViewContainer} from './StyledComponents'

const PlayingView = ({choicesList, onChoice, onRulesClick, score}) => (
  <PlayingViewContainer>
    <h1>Rock Paper Scissors</h1>
    <div className="score">Score: {score}</div>
    <div className="choices-container">
      {choicesList.map(choice => (
        <button key={choice.id} onClick={() => onChoice(choice.id)}>
          {choice.id}
        </button>
      ))}
    </div>
    <button onClick={onRulesClick}>Rules</button>
  </PlayingViewContainer>
)

export default PlayingView
