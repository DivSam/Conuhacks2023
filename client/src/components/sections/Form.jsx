import React from "react";
import styled from "styled-components";
import { FormGroup, Label, Input, Submit} from "../FormComponents";
import { useState } from "react";
import Handle from "../Handle";
import Geocode from "react-geocode";
import axios from "axios";
Geocode.setApiKey("AIzaSyBYFr8VOe7WuJraU1SX7pOWbKEZyyacVEc");
Geocode.setLanguage("en");
Geocode.setLocationType("ROOFTOP");

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

const Switch = styled.div`
  width: 60px;
  height: 20px;
  background-color: rgba(255, 0, 0, 1);
  display: flex;
  justify-content: flex-start;
  border-radius: 50px;
  padding: 10px;
  cursor: pointer;

  &[data-ison="true"]{
    justify-content: flex-end;
    background-color: rgba(0, 255, 0, 1);
  }

`


const Form = () => {
 
  const [isOn, setIsOn] = useState(false);
  const [location, setLocation] = useState("");
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");
  const [disease, setDisease] = useState("");
  const [verified, setVerified] = useState(false);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // const form = e.target;
    // const data = new FormData(form);
    // const value = Object.fromEntries(data.entries());
    const value = {
      name, 
      age,
      location,
      disease,
      verified,
      lat,
      lng
    }
    
    
    Geocode.fromAddress(value.location).then(
       (response) => {
        const { lat, lng } = response.results[0].geometry.location;
        value.lat = lat;
        value.lng = lng;
        console.log(value)
        const res = fetch("http://127.0.0.1:3000/api/post", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(value),
        }).then((res) => res.json()).then((data) => console.log(data));
      
        
      },
      (error) => {
        console.error(error);
      }
    );
    
    
  }

 

  const toggleSwitch = () => setIsOn(!isOn);
  return (
    <Section>
      <Container>
        <Title>Complete This Form About your disease</Title>
        <FormContainer method="POST" action="/post-feedback" onSubmit={handleSubmit}>
            <FormGroup>
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" value={name} onChange={(e)=>setName(e.target.value)}/>
            </FormGroup>
            <FormGroup>
              <Label htmlFor="age">Age</Label>
              <Input id="age" name="age" value={age} onChange={(e)=>setAge(e.target.value)}/>
            </FormGroup>
            <FormGroup>
              <Label>Location</Label>
              <Input id="location" name="location" value={location} onChange={(e)=>setLocation(e.target.value)}/>
            </FormGroup>
            <FormGroup>
              <Label>Disease</Label>
              <Input id="disease" name="disease" value={disease} onChange={(e)=>setDisease(e.target.value)} />
            </FormGroup>
            <FormGroup>
              <Label>Verified</Label>
              <Switch className="switch" data-ison={isOn} onClick={toggleSwitch}>
                <Handle transition={spring}></Handle>
              </Switch>
            </FormGroup>
            <FormGroup>
              <Submit type="submit" value="Submit"/>
            </FormGroup>
        </FormContainer>
      </Container>
    </Section>
  );
};

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30
};

export default Form;
