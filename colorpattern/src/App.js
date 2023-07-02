import './App.css';
import React from 'react';

function App() {

  const [Color, setColor] = React.useState('')
  const [Hexvalue, setHexvalue] = React.useState('')
  const [Textvalue, setTextvalue] = React.useState('black')

  const display = Color + '\n' +  Hexvalue
  const colorpattern = 
    {
      red: '#FF0000',
      green: '#008000',
      blue: '#0000FF',
      black: '#000000',
      white: '#FFFFFF',
    }

  const handleChange = (e) => {
    setColor(e.target.value)
    //console.log('event value', e.target.value)
    //console.log('set Color state', Color)
  }

  const handleColor = () => {
    console.log(Color)
    console.log(colorpattern[Color])
    setHexvalue(colorpattern[Color])
  }

  const handleText = () => {
    Textvalue === 'black' ? setTextvalue('white') : setTextvalue('black')
  }
  return (
    <div className="App">
      <p>
      <textarea
        style = {{backgroundColor: Hexvalue, color: Textvalue}}
        value = {display}
      /></p>
      <p>
      <input
        type = "text"
        placeholder = "Enter color"
        onChange={(e) => {handleChange(e)}}
      /></p>
      <p><button onClick={()=>handleColor()}>Change Color</button></p>
      <p><button onClick={()=>handleText()}>Change Text</button></p>
    </div>
  );
}

export default App;
