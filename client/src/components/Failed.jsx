import React from 'react'
import styled from 'styled-components'


const Section = styled.section`
  height: ${(props) => `calc(100vh - ${props.theme.navHeight} - 2rem)`};
  margin-bottom: 5px;
  width: 90vw;
  postion: relative;
  background: rgba(190, 212, 233, 0.85);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.85);
  backdrop-filter: blur(11px);
  -webkit-backdrop-filter: blur(11px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
`;

const Container = styled.div`
width: 75%;
min-height: 80vh;
margin: 0 auto;
/*background-color: lightblue;*/

display: flex;
justify-content: center;
align-items: center;
flex-direction:column;
gap: 2rem;

@media (max-width: 64em) {
  width: 85%;
}
@media (max-width: 48em) {
  flex-direction: column;
  width: 100%;
  &>*:first-child {
    width: 100%;
    margin-top: 2rem;
  }
}
`

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxxl}
`

const Failed = () => {  
    
  
    return (
    <Section>
        <Container>
            <Title>Failed</Title>
        </Container>
      </Section>
    )
  }
  
  
  
  export default Failed