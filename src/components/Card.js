import React from 'react'
import styled from 'styled-components'
import theme from './theme'
import melon from './melon'

const StyledCard = styled.div`
  margin: 20px;
  padding: 15px;
  border-radius: 5px;
  // height: 100px;
  justify-content: center;
  // width: 100px;
  max-width: 600px;
  box-shadow: 5px 5px 5px #f9f9f9;
`

const StyledGreenCard = styled(StyledCard)`
  border-left: 10px solid ${theme.colors.green};
  background-color: ${theme.colors.faintgrey};
`

const StyledYellowCard = styled(StyledCard)`
  border-left: 10px solid ${theme.colors.yellow};
  background-color: ${theme.colors.faintgrey};
`

const StyledOrangeCard = styled(StyledCard)`
  border-left: 10px solid ${theme.colors.orange};
  background-color: ${theme.colors.faintgrey};
`

const StyledPurpleCard = styled(StyledCard)`
  border-left: 10px solid ${theme.colors.purple};
  background-color: ${theme.colors.faintgrey};
`

const StyledDARKFRUITCard = styled(StyledCard)`
  border-left: 10px solid ${theme.colors.grey};
  background-color: ${theme.colors.darkgrey};
`

class Card extends React.Component {
  pickCard(accent) {
    if (accent === 'green') {
      return <StyledGreenCard>
      {melon('pink')}
      {melon('pink')}
      {melon('pink')}
      {melon('pink')}
      {melon('pink')}
      {melon('pink')}
      {melon('pink')}
      {melon('pink')}
      {melon('pink')}
      </StyledGreenCard>
    } else if (accent === 'yellow') {
      return <StyledYellowCard>
      {melon('blue')}
      {melon('blue')}
      {melon('blue')}
      {melon('blue')}
      {melon('blue')}
      {melon('blue')}
      </StyledYellowCard>
    } else if (accent === 'orange') {
      return <StyledOrangeCard>
      {melon('purple')}
      {melon('purple')}
      {melon('purple')}
      {melon('purple')}
      {melon('purple')}
      {melon('purple')}
      {melon('purple')}
      {melon('purple')}
      </StyledOrangeCard>
    } else if (accent === 'purple') {
      return <StyledPurpleCard>
      {melon('red')}
      {melon('red')}
      {melon('red')}
      {melon('red')}
      {melon('red')}
      {melon('red')}
      {melon('red')}
      </StyledPurpleCard>
    }  else if (accent === 'DARKFRUIT') {
      return <StyledDARKFRUITCard>
      {melon('DARKFRUIT')}
      {melon('DARKFRUIT')}
      {melon('DARKFRUIT')}
      {melon('DARKFRUIT')}
      {melon('DARKFRUIT')}
      {melon('DARKFRUIT')}
      </StyledDARKFRUITCard>
    } else {
      return null
    }
  }
  render() {
    const { accent } = this.props
    const card = this.pickCard(accent)
    return card
  }
}

export default Card
