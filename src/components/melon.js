import React from 'react'
import styled from 'styled-components'

import pink from './svgs/pink-melon.svg'
import blue from './svgs/blue-melon.svg'
import purple from './svgs/purple-melon.svg'
import red from './svgs/red-melon.svg'

import darkfruit from './svgs/DARKFRUIT.svg'

const StyledContainer = styled.div`
  text-align: center;
  width: 50px;
  margin-right: 0px;
`

const melon = (color) => {
  let melonType
  if (color === 'pink') {
    melonType = pink
  } else if (color === 'blue') {
    melonType = blue;
  } else if (color === 'purple') {
    melonType = purple;
  }  else if (color === 'red') {
    melonType = red;
  }  else if (color === 'DARKFRUIT') {
    melonType = darkfruit;
  }
  return (
    <StyledContainer>
      <img src={melonType}></img>
    </StyledContainer>
  )
}

export default melon