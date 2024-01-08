// GameRules.js
import React from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import {GameRulesContainer} from './StyledComponents'

const GameRules = ({onClose}) => (
  <Popup
    open
    closeOnDocumentClick
    onClose={onClose}
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
      <button type="button" onClick={onClose}>
        <RiCloseLine size={30} />
      </button>
    </GameRulesContainer>
  </Popup>
)

export default GameRules
