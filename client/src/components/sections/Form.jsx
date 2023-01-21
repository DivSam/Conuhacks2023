import React from "react";
import styled from "styled-components";
import { FormGroup, Label, Input, Submit, LabelRadio, InputRadio } from "../FormComponents";

const Section = styled.section`
  height: ${(props) => `calc(100vh - ${props.theme.navHeight} - 2rem)`};
  margin-bottom: 5px;
  width: 90vw;
  postion: relative;
  background: rgba(190, 212, 233, 0.85);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(11px);
  -webkit-backdrop-filter: blur(11px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
`;

const Title = styled.h1`
  text-align: center;
  margin: 20px 0;
  font-size: ${(props) => props.theme.fontxxl};
  font-weight: 1000;
`;

const FormContainer = styled.form`
  width:100%;
`

const Container = styled.div`
width: 100%;
min-height: 80vh;
/*background-color: lightblue;*/

display: flex;
justify-content: flex-start;
align-items: center;
flex-direction:column;
gap: 2rem;

@media (max-width: 64em) {
  width: 85%;
}
@media (max-width: 48em) {
  flex-direction: column-reverse;
  width: 100%;
  &>*:first-child {
    width: 100%;
    margin-top: 2rem;
  }
}
`

const Box = styled.div`
  display:flex;
  align-items:center;
  justify-content:space-between;
  width: 100%;
  height: 100%;
`

const Form = () => {
  return (
    <Section>
      <Container>
        <Title>Complete This Form About your disease</Title>
        <FormContainer method="POST" action="/post-feedback">
            <FormGroup>
              <Label htmlFor="label">Name</Label>
              <Input id="label" />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="label">Age</Label>
              <Input id="label" />
            </FormGroup>
            <FormGroup>
              <Label>Location</Label>
              <Input />
            </FormGroup>
            <FormGroup>
              <Label>Disease</Label>
              <Input />
            </FormGroup>
            <FormGroup>
              <Label>Verified</Label>
              <Box>
                <LabelRadio for="yes">Yes</LabelRadio>
                <InputRadio id="yes" name="verified" value="Yes" type="radio"/>
              </Box>
              <Box>
                <LabelRadio for="no">No</LabelRadio>
                <InputRadio id="no" name="verified" value="No" type="radio"/>
              </Box>
            </FormGroup>
            <FormGroup>
              <Submit type="submit" value="Submit"/>
            </FormGroup>
        </FormContainer>
      </Container>
    </Section>
  );
};

export default Form;
