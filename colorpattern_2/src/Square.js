import React from 'react'

const Square = ({ colorValue, hexvalue, isDarkText }) => {
  return (
    <section className='square'
        style={{ backgroundColor: colorValue,
                color: isDarkText ? "#000" : "#FFF"
            }}
    >

    <p>{colorValue ? colorValue : "Empty Value"}</p>
    <p>{hexvalue ? hexvalue : null}</p>
    </section>    
  )
}

Square.defaultProps = {
    colorValue: "Default Color Value"
}
export default Square
