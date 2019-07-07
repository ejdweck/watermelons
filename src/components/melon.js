import React from 'react'
import styled from 'styled-components'

import pink from './svgs/pink-melon.svg'
import blue from './svgs/blue-melon.svg'
import purple from './svgs/purple-melon.svg'
import red from './svgs/red-melon.svg'

const StyledContainer = styled.div`
text-align: center;
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
  }
  return (
    <StyledContainer>
      <img src={melonType}></img>
    </StyledContainer>
  )
}

export default melon