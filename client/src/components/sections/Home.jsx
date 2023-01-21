import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const Section = styled.section`
height: ${props => `calc(100vh - ${props.theme.navHeight} - 2rem)` };
margin-bottom:5px;
width: 90vw;
postion: relative;
background: rgba( 190, 212, 233, 0.85 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 11px );
-webkit-backdrop-filter: blur( 11px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );
`

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

const Box = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxxl}
`

const Subtitle = styled.h1`
  font-size: ${(props) => props.theme.fontlg}
`

const ButtonApp = styled.button`
    display: inline-block;
    background-color: ${props => props.theme.body};
    color: ${props => props.theme.text};
    outline: none;
    border: none;
    font-weight: 1000;

    font-size: ${props => props.theme.fontsm};
    padding: 0.8rem 2.3rem;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
        transform: scale(0.9);
    }

    &::after {
        content: ' ';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(0);
        border: 2px solid ${props => props.theme.body};
        width: 100%;
        height: 100%;
        border-radius: 50px;
        transition: all 0.2s ease;
    }

    &:hover::after {
        transform: translate(-50%, -50%) scale(1);
        padding: 0.3rem;
    }
`

const Home = () => {

  const navigate = useNavigate();

  return (
    <Section>
      <Container>
        <Title>Welcome to EpideMap</Title>
        <Subtitle>Where we census the number of sick people all around the world.</Subtitle>
        <Box>
          <ButtonApp onClick={() => navigate("/app")}>Go To The App</ButtonApp>
          <ButtonApp onClick={() => navigate("/form")}>Fill The Form</ButtonApp>
        </Box>
      </Container>
    </Section>
  )
}

export default Home