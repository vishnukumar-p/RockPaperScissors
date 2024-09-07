import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import {
  TextContainer,
  AppContainer,
  Header,
  TextContent,
  ScoreContainer,
  ScoreText,
  ScoreContent,
  GameContainer,
  GameResultViewContainer,
  GameOptionsViewContainer,
  UserChoiceContainer,
  TextContentResult,
  ImageElement,
  PlayAgainButton,
  ButtonRules,
  PopupContainer,
  ImageRulesElement,
  CloseButton,
} from './styledComponents'
import GameOptions from '../GameOptions'

// import GameOptions from '../GameOptions'

const gameConstants = {
  inProgress: 'IN_PROGRESS',
  win: 'WIN',
  lose: 'LOSE',
  draw: 'DRAW',
}
class Game extends Component {
  state = {
    score: 0,
    userChoice: '',
    opponentChoice: '',
    gameStatus: gameConstants.inProgress,
  }

  onSetUserChoice = id => {
    const {choicesList} = this.props
    const random = Math.floor(Math.random() * 3)
    const opponentChoice = choicesList[random].id
    const userChoice = id
    if (opponentChoice === userChoice) {
      this.setState({
        userChoice,
        opponentChoice,
        gameStatus: gameConstants.draw,
      })
    } else if (opponentChoice === 'ROCK') {
      if (userChoice === 'SCISSORS') {
        this.setState(prevState => ({
          score: prevState.score - 1,
          userChoice,
          opponentChoice,
          gameStatus: gameConstants.lose,
        }))
      } else if (userChoice === 'PAPER') {
        this.setState(prevState => ({
          score: prevState.score + 1,
          userChoice,
          opponentChoice,
          gameStatus: gameConstants.win,
        }))
      }
    } else if (opponentChoice === 'SCISSORS') {
      if (userChoice === 'ROCK') {
        this.setState(prevState => ({
          score: prevState.score + 1,
          userChoice,
          opponentChoice,
          gameStatus: gameConstants.win,
        }))
      } else if (userChoice === 'PAPER') {
        this.setState(prevState => ({
          score: prevState.score - 1,
          userChoice,
          opponentChoice,
          gameStatus: gameConstants.lose,
        }))
      }
    } else if (opponentChoice === 'PAPER') {
      if (userChoice === 'SCISSORS') {
        this.setState(prevState => ({
          score: prevState.score + 1,
          userChoice,
          opponentChoice,
          gameStatus: gameConstants.win,
        }))
      } else if (userChoice === 'ROCK') {
        this.setState(prevState => ({
          score: prevState.score - 1,
          userChoice,
          opponentChoice,
          gameStatus: gameConstants.lose,
        }))
      }
    }
  }

  onClickPlayAgainButton = () => {
    this.setState({gameStatus: gameConstants.inProgress})
  }

  renderDrawView = () => {
    const {userChoice, opponentChoice} = this.state
    const {choicesList} = this.props
    const filterUser = choicesList.filter(each => each.id === userChoice)
    const objUser = filterUser[0]
    const filterOpponent = choicesList.filter(
      each => each.id === opponentChoice,
    )
    const objOpponent = filterOpponent[0]
    return (
      <GameResultViewContainer>
        <GameOptionsViewContainer>
          <UserChoiceContainer>
            <TextContentResult>YOU</TextContentResult>
            <ImageElement src={objUser.imageUrl} alt="your choice" />
          </UserChoiceContainer>
          <UserChoiceContainer>
            <TextContentResult>OPPONENT</TextContentResult>
            <ImageElement src={objOpponent.imageUrl} alt="opponent choice" />
          </UserChoiceContainer>
        </GameOptionsViewContainer>
        <TextContentResult>IT IS DRAW</TextContentResult>
        <PlayAgainButton onClick={this.onClickPlayAgainButton}>
          PLAY AGAIN
        </PlayAgainButton>
      </GameResultViewContainer>
    )
  }

  renderWinView = () => {
    const {userChoice, opponentChoice} = this.state
    const {choicesList} = this.props
    const filterUser = choicesList.filter(each => each.id === userChoice)
    const objUser = filterUser[0]
    const filterOpponent = choicesList.filter(
      each => each.id === opponentChoice,
    )
    const objOpponent = filterOpponent[0]
    return (
      <GameResultViewContainer>
        <GameOptionsViewContainer>
          <UserChoiceContainer>
            <TextContentResult>YOU</TextContentResult>
            <ImageElement src={objUser.imageUrl} alt="your choice" />
          </UserChoiceContainer>
          <UserChoiceContainer>
            <TextContentResult>OPPONENT</TextContentResult>
            <ImageElement src={objOpponent.imageUrl} alt="opponent choice" />
          </UserChoiceContainer>
        </GameOptionsViewContainer>
        <TextContentResult>YOU WON</TextContentResult>
        <PlayAgainButton onClick={this.onClickPlayAgainButton}>
          PLAY AGAIN
        </PlayAgainButton>
      </GameResultViewContainer>
    )
  }

  renderLoseView = () => {
    const {userChoice, opponentChoice} = this.state
    const {choicesList} = this.props
    const filterUser = choicesList.filter(each => each.id === userChoice)
    const objUser = filterUser[0]
    const filterOpponent = choicesList.filter(
      each => each.id === opponentChoice,
    )
    const objOpponent = filterOpponent[0]
    return (
      <GameResultViewContainer>
        <GameOptionsViewContainer>
          <UserChoiceContainer>
            <TextContentResult>YOU</TextContentResult>
            <ImageElement src={objUser.imageUrl} alt="your choice" />
          </UserChoiceContainer>
          <UserChoiceContainer>
            <TextContentResult>OPPONENT</TextContentResult>
            <ImageElement src={objOpponent.imageUrl} alt="opponent choice" />
          </UserChoiceContainer>
        </GameOptionsViewContainer>
        <TextContentResult>YOU LOSE</TextContentResult>
        <PlayAgainButton onClick={this.onClickPlayAgainButton}>
          PLAY AGAIN
        </PlayAgainButton>
      </GameResultViewContainer>
    )
  }

  renderInProgress = () => {
    const {choicesList} = this.props
    return (
      <GameContainer>
        {choicesList.map(each => (
          <GameOptions
            gameDetails={each}
            key={each.id}
            onSetUserChoice={this.onSetUserChoice}
          />
        ))}
      </GameContainer>
    )
  }

  renderTotal = () => {
    const {gameStatus} = this.state
    switch (gameStatus) {
      case gameConstants.inProgress:
        return this.renderInProgress()
      case gameConstants.win:
        return this.renderWinView()
      case gameConstants.draw:
        return this.renderDrawView()
      case gameConstants.lose:
        return this.renderLoseView()
      default:
        return null
    }
  }

  render() {
    const {score} = this.state
    return (
      <AppContainer>
        <Header>
          <TextContainer>
            <TextContent>
              ROCK
              <br />
              PAPER
              <br />
              SCISSORS
            </TextContent>
          </TextContainer>
          <ScoreContainer>
            <ScoreText>Score</ScoreText>
            <ScoreContent>{score}</ScoreContent>
          </ScoreContainer>
        </Header>
        <GameContainer>{this.renderTotal()}</GameContainer>
        <Popup
          modal
          trigger={<ButtonRules>RULES</ButtonRules>}
          closeOnEscape
          window
        >
          {close => (
            <>
              <PopupContainer>
                <CloseButton type="button" onClick={() => close()}>
                  <RiCloseLine />
                </CloseButton>
                <ImageRulesElement
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                  alt="rules"
                />
              </PopupContainer>
            </>
          )}
        </Popup>
      </AppContainer>
    )
  }
}
export default Game
