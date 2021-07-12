import React,{useState} from 'react';
import './App.css';
import Routes from './routes/index';
import styled,{ ThemeProvider } from 'styled-components';
import { dark,light } from './theme';
import ToggleButton from './components/ToggleButton';
const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
  background-color: ${(props) => props.theme.backgroundColor};
  `;
function App() {
  const [themeValue, setThemeValue] = useState('true')
  const sendDataToParent = (status) => { 
    console.log(status)
    setThemeValue(status); 
  }

 
  return (
    <div>
      <ThemeProvider  theme={themeValue ? light : dark}>
        <StyledApp>
        <ToggleButton className="togglebtn" sendDataToParent={sendDataToParent} />
         <Routes />
        </StyledApp>
      </ThemeProvider>
    </div>
  );
}

export default App;
