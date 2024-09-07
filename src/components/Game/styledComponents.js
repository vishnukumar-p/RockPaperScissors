import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #223a5f;
  height: 100vh;
`
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px;
  border: 2px solid #ffffff;
  border-radius: 15px;
  width: 60%;
`
export const TextContent = styled.h1`
  color: white;
  font-size: 15px;
  font-family: 'Bree Serif';
  font-weight: bold;
`
export const TextContainer = styled.div`
  margin: 20px;
  height: 100px;
`
export const ScoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  border: none;
  border-radius: 15px;
  width: 80%;
  max-width: 150px;
  margin: 10px;
`
export const ScoreText = styled.p`
  color: #223a5f;
  font-size: 15px;
  font-family: 'Bree Serif';
  font-weight: bold;
`
export const ScoreContent = styled.p`
  color: #223a5f;
  font-size: 18px;
  font-family: 'Roboto';
  font-weight: bold;
`
export const GameContainer = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  flex-wrap: wrap;
  width: 700px;
  height: 500px;
`
export const GameResultViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  width: 800px;
`
export const GameOptionsViewContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
`
export const UserChoiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const TextContentResult = styled.p`
  color: white;
  font-size: 27px;
  font-weight: bold;
  font-family: 'Roboto';
`
export const ImageElement = styled.img`
  height: 210px;
  width: 210px;
`
export const PlayAgainButton = styled.button`
  font-size: 18px;
  font-weight: bold;
  font-family: 'Roboto';
  padding: 10px;
  background-color: white;
  border: none;
  border-radius: 10px;
  outline: none;
  cursor: pointer;
`
export const ButtonRules = styled.button`
  align-self: flex-end;
  margin-right: 30px;
  font-size: 18px;
  font-weight: bold;
  font-family: 'Bree Serif';
  padding: 10px;
  background-color: white;
  border: none;
  border-radius: 10px;
  outline: none;
  cursor: pointer;
`
export const PopupContainer = styled.div`
  height: 600px;
  width: 640px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
`
export const CloseButton = styled.button`
  color: black;
  font-size: 20px;
  font-family: 'Roboto';
  margin: 10px;
  align-self: flex-end;
  border: none;
  background-color: transparent;
`
export const ImageRulesElement = styled.img`
  margin-bottom: 50px;
  height: 500px;
  width: 500px;
`
