import Square from './Square.js'
import Input from './Input.js'
import './App.css';
import React from 'react';

function App() {
  const [colorValue, setColorValue] = React.useState('')
  const [hexvalue, setHexValue] = React.useState('')
  const [isDarkText, setIsDarkText] = React.useState(true)
  return (
    <div className="App">
      <Square 
        colorValue={colorValue}
        hexvalue={hexvalue}
        isDarkText={isDarkText}
      />
      <Input 
        colorValue={colorValue}
        setColorValue={setColorValue}
        setHexValue={setHexValue}
        isDarkText={isDarkText}
        setIsDarkText={setIsDarkText}
      />

    </div>
  );
}

export default App;
