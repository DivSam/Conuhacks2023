import React, { useState } from 'react'
import styled from 'styled-components'
import { useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import LogoText from '../assets/LogoText.png'
import LogoNoText from '../assets/LogoNoText.png'

const Section = styled.section`
margin-bottom:1%;
overflow:hidden;
position:fixed;
top:0;
z-index:100;
width: 100vw;
background: ${props => props.theme.body};
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 4px );
-webkit-backdrop-filter: blur( 4px );
border: 1px solid rgba( 255, 255, 255, 0.18 );
`
const NavBar = styled.nav`
display: flex;
justify-content: space-between;
align-items: center;
width: 85%;
height: ${props => props.theme.navHeight};
margin: 0 auto;

.mobile{
  display: none;
}

@media (max-width: 768px) {
  .desktop{
    display: none;
  }
  .mobile{
    display: inline-block;
  }
`
const Menu = styled.ul`
display: flex;
justify-content: space-between;
align-items: center;
list-style: none;

@media (max-width: 768px) {
  /* 1024px */
  position: fixed;
  top: ${props => props.theme.navHeight}; 
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: ${props => `calc(100vh - ${props.theme.navHeight})`};
  z-index: 50;
  background-color: ${props => `rgba(${props.theme.body}, 0.85)`};
  backdrop-filter: blur(10px);

  transform: ${props => props.click ? 'translateY(0)' : 'translateY(-110%)'};
  transition: all 0.3s ease;

  flex-direction: column;
  justify-content: center;
}
`

const MenuItem = styled.li`
margin: 0 1rem;
color: ${props => props.theme.text};
cursor: pointer;

&::after {
  content: ' ';
  display: block;
  width: 0%;
  height: 2px;
  background: ${props => props.theme.text};
  transition: width 0.3s ease;
}
&:hover::after {
  width: 100%;
}

@media (max-width: 768px) {
  margin: 1rem 0;
  background-color: ${props => props.theme.text};
  color: ${props => props.theme.text};
  border-radius: 50px;
  padding: 0.5rem 1rem;
  &::after {
     display: none; 
  }
}
`

const HamburgerMenu = styled.span`
  width: ${props => props.click ? '2rem' : '1.5rem'};
  height: 2px;
  background: ${props => props.theme.body};

  position: absolute;
  top: 2rem;
  left: 50%;
  display: none;
  transform: ${props => props.click ? 'translateX(-50%) rotate(90deg)' : 'translateX(-50%) rotate(0deg)'};


  justify-content: center;
  align-items: center;

  cursor: pointer;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    /* 1024 px */
    display: flex;
  }

  &::after, &::before {
    content: ' ';
    width: ${props => props.click ? '1rem' : '1.5rem'};
    height: 2px;
    right: ${props => props.click ? '-2px' : '0'};
    background: ${props => props.theme.body};
    position: absolute;
  }

  &::after {
    top: ${props => props.click ? '0.3rem' : '0.5rem'};
    transform: ${props => props.click ? 'rotate(-40deg)' : 'rotate(0deg)'};
  }

  &::before {
    bottom: ${props => props.click ? '0.3rem' : '0.5rem'};
    transform: ${props => props.click ? 'rotate(40deg)' : 'rotate(0deg)'};
  }
`

const ButtonApp = styled.button`
    display: inline-block;
    background-color: ${props => props.theme.text};
    color: ${props => props.theme.body};
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
        border: 2px solid ${props => props.theme.text};
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

const Logo = styled.img`
  transition: all 0.2s ease;
  
  width:60px;

  &:hover {
      transform: scale(1.1);
      cursor: pointer;
  }
`

const Navigation = /*React.forwardRef((windowHeight, navigation)*/() => {

  const navigate = useNavigate();
  

  return (
    <Section /*ref={navigation}*/ id="nav">
      <NavBar>
      <Logo onClick={() => navigate("/")} src={LogoNoText}>
      </Logo>
        <HamburgerMenu>
          &nbsp;
        </HamburgerMenu>
        <Menu>
          <MenuItem onClick={() => navigate("/")}>Home</MenuItem>
          <MenuItem onClick={() => navigate("/form")}>Form</MenuItem>
        </Menu>
        <ButtonApp onClick={() => navigate("/app")}>Open App</ButtonApp>
      </NavBar>
    </Section>
  )
};

export default Navigation