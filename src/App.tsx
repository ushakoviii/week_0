import React from 'react';
import './App.css';
import styled from "styled-components";
import {theme} from "./components/styles/Theme";
import {Card} from "./components/Card";

function App() {
    return (
        <StyledBody>
            <Card/>
        </StyledBody>
    );
}

const StyledBody = styled.body`
  background-color: ${theme.colors.backgroundColor};
  height: 100vh;
  display: flex;
  justify-content: center; 
  align-items: center;  
  font-family: Arial;
`
export default App;
