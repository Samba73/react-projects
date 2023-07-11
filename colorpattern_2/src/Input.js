import React from 'react'
import colorNames from 'colornames'

const Input = ({ colorValue, setColorValue, setHexValue, 
                    isDarkText, setIsDarkText}) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
        <label>Add Color Name </label>
        <input
            autoFocus
            required
            type="text"
            placeholder='Enter color'
            value={colorValue}
            onChange={(e) => {
                setColorValue(e.target.value)
                setHexValue(colorNames(e.target.value))
                } 
            }
        />
        <button
            type="button"
            onClick={()=>setIsDarkText(!isDarkText)}
        > Toggle Text Color
        </button>    

    </form> 
  )
}

export default Input