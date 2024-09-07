import {ListItem, ImageItem, ButtonItem} from './styledComponents'

const GameOptions = props => {
  const {gameDetails, onSetUserChoice} = props
  const {id, imageUrl} = gameDetails
  const onClicked = () => {
    onSetUserChoice(id)
  }
  return (
    <ListItem>
      <ButtonItem onClick={onClicked} data-testid={`${id.toLowerCase()}Button`}>
        <ImageItem src={imageUrl} alt={id} />
      </ButtonItem>
    </ListItem>
  )
}
export default GameOptions
