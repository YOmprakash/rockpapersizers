// StyledComponents.js

import styled from 'styled-components'

export const PlayingViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  h1 {
    font-family: 'Roboto', sans-serif;
    font-size: 24px;
    margin-bottom: 20px;
  }

  .score {
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    margin-bottom: 10px;
  }

  .choices-container {
    display: flex;
    gap: 20px;
  }

  button {
    background-color: #223a5f;
    color: #ffffff;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background-color: #2d4f80;
    }
  }
`

export const GameRulesContainer = styled.div`
  img {
    width: 100%;
    border-radius: 10px;
  }

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    position: absolute;
    top: 10px;
    right: 10px;
  }
`

export const GameResultsViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  h1 {
    font-family: 'Roboto', sans-serif;
    font-size: 24px;
    margin-bottom: 20px;
  }

  .choices-container {
    display: flex;
    gap: 20px;
    margin-bottom: 20px;
  }

  .choices-container img {
    width: 100px;
    height: 100px;
  }

  .result {
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    margin-bottom: 10px;
  }

  .play-again {
    background-color: #223a5f;
    color: #ffffff;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background-color: #2d4f80;
    }
  }
`
