import React,{useState} from 'react';
import './App.css';
function App() {
  const [themeValue, setThemeValue] = useState('true')
  const sendDataToParent = (status) => setThemeValue(status);
 
  return (
		<p> Initialization</p>
  );
}

export default App;
