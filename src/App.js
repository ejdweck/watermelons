import React from 'react';
import styled from 'styled-components'

import Card from './components/Card'
import Board from './components/Board'

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
`

const StyledTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  position: -webkit-sticky;
  position: sticky;
  top: 20px;

  font-size: 20px;
`

const StyledTitle = styled.h1`
  
  font-family: 'Satisfy', cursive;
  background: linear-gradient(130deg, #FF5DFF, #FFFFFF,#00D8FF, #00D8FF, #FF5DFF);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 250% 250%;

  -webkit-animation: Animation 8s ease infinite;
  -moz-animation: Animation 8s ease infinite;
  animation: Animation 8s ease infinite;
  
  @-webkit-keyframes Animation {
      0%{background-position:10% 0%}
      50%{background-position:91% 100%}
      100%{background-position:10% 0%}
  }

  @-moz-keyframes Animation {
      0%{background-position:10% 0%}
      50%{background-position:91% 100%}
      100%{background-position:10% 0%}
  }
  @keyframes Animation { 
      0%{background-position:10% 0%}
      50%{background-position:91% 100%}
      100%{background-position:10% 0%}
  }
`



class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <StyledTitleContainer>
          <StyledTitle>In Watermelons We Trust</StyledTitle>
        </StyledTitleContainer>
        <StyledContainer>
          <Board>
            <Card accent="green" />
            <Card accent="yellow" />
            <Card accent="orange" />
            <Card accent="purple" />
            
            <Card accent="green" />
            <Card accent="yellow" />
            <Card accent="orange" />
            <Card accent="purple" />
           
            <Card accent="green" />
            <Card accent="yellow" />
            <Card accent="orange" />
            <Card accent="purple" />
          
            <Card accent="green" />
            <Card accent="yellow" />
            <Card accent="orange" />
            <Card accent="purple" />
         
            <Card accent="green" />
            <Card accent="yellow" />
            <Card accent="orange" />
            <Card accent="purple" />

            <Card accent="green" />
            <Card accent="yellow" />
            <Card accent="orange" />
            <Card accent="purple" />

            <Card accent="green" />
            <Card accent="yellow" />
            <Card accent="orange" />
            <Card accent="purple" />

            <Card accent="green" />
            <Card accent="yellow" />
            <Card accent="orange" />
            <Card accent="purple" />
 
            <Card accent="green" />
            <Card accent="yellow" />
            <Card accent="orange" />
            <Card accent="purple" />
            
            <Card accent="green" />
            <Card accent="yellow" />
            <Card accent="orange" />
            <Card accent="purple" />
            
            <Card accent="green" />
            <Card accent="yellow" />
            <Card accent="orange" />
            <Card accent="purple" />
            
            <Card accent="green" />
            <Card accent="yellow" />
            <Card accent="orange" />
            <Card accent="purple" />
            
            <Card accent="green" />
            <Card accent="yellow" />
            <Card accent="orange" />
            <Card accent="purple" />
            
            <Card accent="green" />
            <Card accent="yellow" />
            <Card accent="orange" />
            <Card accent="purple" />
            
            <Card accent="green" />
            <Card accent="yellow" />
            <Card accent="orange" />
            <Card accent="purple" />
            
            <Card accent="green" />
            <Card accent="yellow" />
            <Card accent="orange" />
            <Card accent="purple" />
            
            <Card accent="DARKFRUIT" />
            <Card accent="green" />
            <Card accent="DARKFRUIT" />
            <Card accent="orange" />
            <Card accent="yellow" />
            <Card accent="DARKFRUIT" />
            <Card accent="yellow" />
            <Card accent="purple" />
            <Card accent="DARKFRUIT" />
            <Card accent="orange" />

            <Card accent="green" />
            <Card accent="DARKFRUIT" />
            <Card accent="green" />
            <Card accent="purple" />
            <Card accent="DARKFRUIT" />
            <Card accent="orange" />
            <Card accent="yellow" />
            <Card accent="purple" />
            <Card accent="yellow" />
            <Card accent="DARKFRUIT" />
            <Card accent="green" />
            <Card accent="purple" />
            <Card accent="DARKFRUIT" />

            <Card accent="green" />
            <Card accent="DARKFRUIT" />
            <Card accent="yellow" />
            <Card accent="DARKFRUIT" />
            <Card accent="orange" />
            <Card accent="DARKFRUIT" />
            <Card accent="purple" />
            <Card accent="DARKFRUIT" />
            <Card accent="DARKFRUIT" />
            <Card accent="DARKFRUIT" />



            <Card accent="DARKFRUIT" />
            <Card accent="DARKFRUIT" />

            <Card accent="DARKFRUIT" />
            <Card accent="green" />
            <Card accent="DARKFRUIT" />
            <Card accent="DARKFRUIT" />
            <Card accent="DARKFRUIT" />
            <Card accent="DARKFRUIT" />
            <Card accent="yellow" />
            <Card accent="DARKFRUIT" />
            <Card accent="DARKFRUIT" />
            <Card accent="DARKFRUIT" />
            <Card accent="orange" />
            <Card accent="DARKFRUIT" />
            <Card accent="DARKFRUIT" />
            <Card accent="DARKFRUIT" />
            <Card accent="DARKFRUIT" />
            <Card accent="DARKFRUIT" />
            <Card accent="purple" />
            <Card accent="DARKFRUIT" />
            <Card accent="DARKFRUIT" />
            <Card accent="DARKFRUIT" />
            <Card accent="DARKFRUIT" />
            <Card accent="DARKFRUIT" />
            <Card accent="DARKFRUIT" />
            <Card accent="DARKFRUIT" />
            <Card accent="DARKFRUIT" />
            <Card accent="DARKFRUIT" />
            <Card accent="DARKFRUIT" />
            <Card accent="DARKFRUIT" />
            <Card accent="DARKFRUIT" />
            <Card accent="DARKFRUIT" />
            <Card accent="DARKFRUIT" />
            <Card accent="DARKFRUIT" />
            <Card accent="DARKFRUIT" />
            <Card accent="DARKFRUIT" />
            <Card accent="DARKFRUIT" />
            <Card accent="DARKFRUIT" />
            <Card accent="DARKFRUIT" />
            <Card accent="DARKFRUIT" />
            <Card accent="DARKFRUIT" />
            <Card accent="DARKFRUIT" />
            <Card accent="DARKFRUIT" />
            <Card accent="DARKFRUIT" />
            <Card accent="DARKFRUIT" />
            <Card accent="DARKFRUIT" />
            <Card accent="DARKFRUIT" />
            <Card accent="DARKFRUIT" />
            <Card accent="DARKFRUIT" />
            <Card accent="DARKFRUIT" />
            <Card accent="DARKFRUIT" />
            <Card accent="DARKFRUIT" />
            <Card accent="DARKFRUIT" />
            <Card accent="DARKFRUIT" />
            <Card accent="DARKFRUIT" />
            <Card accent="DARKFRUIT" />
            <Card accent="DARKFRUIT" />
            <Card accent="DARKFRUIT" />
            <Card accent="DARKFRUIT" />
            <Card accent="DARKFRUIT" />
            <Card accent="DARKFRUIT" />
            <Card accent="DARKFRUIT" />
            <Card accent="DARKFRUIT" />
            <Card accent="DARKFRUIT" />
            <Card accent="DARKFRUIT" />
            <Card accent="DARKFRUIT" />
            <Card accent="DARKFRUIT" />
            <Card accent="DARKFRUIT" />
            <Card accent="DARKFRUIT" />
            <Card accent="DARKFRUIT" />
            <Card accent="DARKFRUIT" />
            <Card accent="DARKFRUIT" />
            <Card accent="DARKFRUIT" />
            <Card accent="DARKFRUIT" />
            <Card accent="DARKFRUIT" />
            <Card accent="DARKFRUIT" />
            <Card accent="DARKFRUIT" />
            <Card accent="DARKFRUIT" />
            <Card accent="DARKFRUIT" />
            <Card accent="DARKFRUIT" />
            <Card accent="DARKFRUIT" />
            <Card accent="DARKFRUIT" />
            <Card accent="DARKFRUIT" />
            <Card accent="DARKFRUIT" />
            <Card accent="DARKFRUIT" />
            <Card accent="DARKFRUIT" />
            <Card accent="DARKFRUIT" />
            <Card accent="DARKFRUIT" />
            <Card accent="DARKFRUIT" />
            <Card accent="DARKFRUIT" />
            <Card accent="DARKFRUIT" />
            <Card accent="DARKFRUIT" />
            <Card accent="DARKFRUIT" />
            <Card accent="DARKFRUIT" />
            <Card accent="DARKFRUIT" />
          </Board>
        </StyledContainer>
      </React.Fragment>
    )
  }
}


export default App;
