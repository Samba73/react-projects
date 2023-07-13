import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <main className='About'>
        <p>
          
          This is sample blog post app to learn react router </p>
        <p>
          <Link to="/">Visit Homepage</Link>
        </p>  
    </main>
  )
}

export default About