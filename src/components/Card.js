import React from 'react'
import styled from 'styled-components'
import theme from './theme'
import melon from './melon'

const StyledCard = styled.div`
  margin: 50px;
  padding: 15px;
  border-radius: 5px;
  background-color: #c7c7c7;
  height: 100px;
  width: 100px;
  max-width: 600px;
  box-shadow: 5px 5px 5px #f9f9f9;
`

const StyledGreenCard = styled(StyledCard)`
  border-left: 10px solid ${theme.colors.green};
`

const StyledYellowCard = styled(StyledCard)`
  border-left: 10px solid ${theme.colors.yellow};
`

const StyledOrangeCard = styled(StyledCard)`
  border-left: 10px solid ${theme.colors.orange};
`

const StyledPurpleCard = styled(StyledCard)`
  border-left: 10px solid ${theme.colors.purple};
`

class Card extends React.Component {
  pickCard(accent) {
    if (accent === 'green') {
      return <StyledGreenCard>{melon('pink')}</StyledGreenCard>
    } else if (accent === 'yellow') {
      return <StyledYellowCard>{melon('blue')}</StyledYellowCard>
    } else if (accent === 'orange') {
      return <StyledOrangeCard>{melon('purple')}</StyledOrangeCard>
    } else if (accent === 'purple') {
      return <StyledPurpleCard>{melon('red')}</StyledPurpleCard>
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
