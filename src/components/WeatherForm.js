import React, { useState } from "react";
import styled from "styled-components";

const WeatherForm = ({ setuserInput }) => {
  const [userInput, setUserInput] = useState({
    city: "",
    country: "",
  });

  const handleChange = (event) => {
    setUserInput({
      ...userInput,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("SUBMIT");
    setuserInput(userInput);
  };
  console.log("UI:", userInput);
  return (
    
    <Container>
      <AppLabel>Weather App</AppLabel>
      <SearchBox onSubmit={(event) => handleSubmit(event)}>
        <input type='text' value={userInput.city} name="city" 
          onChange={handleChange} placeholder="City"/>
        <input type='text' value={userInput.country} name="country" 
          onChange={handleChange} placeholder="Country"/>
        <button type="submit">Submit</button>
      </SearchBox>
    </Container>
  );
};

export default WeatherForm;
const Container=styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  margin:auto;
  max-width: 600px;
  
`;
const AppLabel=styled.span`
  color:black;
  margin:20px auto;
  font-size:30px;
  font-weight:bold;
`;
const SearchBox=styled.form`
  display:flex;
  flex-direction:row;
  max-width:400px;
  gap:10px;
  padding:10px;
  
  & input{
    padding:10px;
    border:none;
    border-bottom:2px dotted black;
    background:#ADD8E6;
  }
  & button{
    border-radius:20%;
    background:#ADD8E6;
  }
`;

