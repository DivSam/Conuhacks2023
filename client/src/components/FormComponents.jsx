import React from "react";
import styled from "styled-components";

export const FormGroup = styled.div`
  color: ${(props) => props.theme.text};
  width: 20%;
  margin: 1.5rem 20%;
`;

export const Label = styled.label`
  margin-bottom: 0.5em;
  font-size: ${(props) => props.theme.fontlg};
  font-weight: 1000;
  color: ${(props) => props.theme.body};
  display: block;
`;

export const Input = styled.input`
  padding: 0.5em;
  font-size: ${(props) => props.theme.fontlg};
  color: ${(props) => props.theme.text};
  background: ${(props) => props.theme.body};
  border: none;
  border-radius: 10px;
  width: 100%;
  margin-bottom: 0.5em;
`;

export const Submit = styled.input`
  display: inline-block;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  outline: none;
  border: none;
  font-weight: 1000;

  font-size: ${(props) => props.theme.fontmd};
  padding: 0.8rem 2.3rem;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(0.9);
  }

  &::after {
    content: " ";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    border: 2px solid ${(props) => props.theme.text};
    width: 100%;
    height: 100%;
    border-radius: 50px;
    transition: all 0.2s ease;
  }

  &:hover::after {
    transform: translate(-50%, -50%) scale(1);
    padding: 0.3rem;
  }
`;


export const LabelRadio = styled.label`
    font-size: ${(props) => props.theme.fontmd};
    color: ${(props) => props.theme.body};
`

export const InputRadio = styled.input`
`