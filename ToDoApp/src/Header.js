import React from 'react'

const Header = (props) => {
  return (
    <header style={{
        backgroundColor: "purple",
        color: "white"
    }}>
        <h1>
            {props.title} To Do App
        </h1>
    </header>
  )
}

Header.defaultProps = {
  title: 'Trial'
}
export default Header
