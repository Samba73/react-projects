import React from 'react';
import './Footer.css'

const Footer = () => {
  const y = new Date().getFullYear()
  return (
    <footer>
        <p>Copyright &copy; {y}</p>
    </footer>
  )
}

export default Footer