import React from 'react'

const Footer = () => {
  const d = new Date().getFullYear()
  return (
    <footer className='Footer'>
        <p>Copyright &copy; {d}</p>
    </footer>
  )
}

export default Footer