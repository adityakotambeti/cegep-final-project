import React, { useState, use } from 'react';
import './App.css';
import Routes from './routes';
import styled, { ThemeProvider } from 'styled-components';
import { dark, light } from './theme';
import ToggleButton from './components/ToggleButton';

const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
  background-color: ${(props) => props.theme.backgroundColor};
  `;

const getLocalStorageTheme = () => {
  if (!localStorage.getItem('theme')) {
    setLocalStorageTheme(true);
  }
  return localStorage.getItem('theme') !== "false";
}

const setLocalStorageTheme = (theme) => {
  localStorage.setItem('theme', theme);
}

function App() {
  const [themeValue, setToggle] = useState(getLocalStorageTheme())
  const updateTheme = (status) => {
    setLocalStorageTheme(!themeValue)
    setToggle(!themeValue);
  }
  return (
    <div>
      <ThemeProvider theme={themeValue ? light : dark}>
        <StyledApp>
          <ToggleButton className="toggler" isChecked={themeValue}  onChange={updateTheme}/>
          <Routes />
        </StyledApp>
      </ThemeProvider>
    </div>
  );
}

export default App;
