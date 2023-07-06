import React from 'react'
import Display from './Display.js'
import './Header.css'

function Header() {
  const API_URL = 'https://jsonplaceholder.typicode.com'
  const [btnselect, setBtnSelect] = React.useState('users')
  const [errors, setErrors] = React.useState([])
  const [items, setItems] = React.useState([])

  async function handleItems(e){
    console.log('e value', e.target.value)
    setBtnSelect(e.target.value)
    console.log('btnselect', btnselect)
    try {
      const response = await fetch(`${API_URL}/${btnselect}`)
      console.log(response)
      if (response.status === 200) {
        const data = await response.json()
        setItems(data)
        console.log('users', items)
      } else {
        throw new Error ('Users Data Load: Error Occured')
      }
    } catch (e) {
      setErrors(e.message)
    } finally {
      //setBtnSelect(null)
    }
  }
  
  return (
    <main className='main'>
      <ul>
        <li className='new'>
          <button value='users' onClick={(event)=>handleItems(event)}>Users</button>
          <button value='posts' onClick={(event)=>handleItems(event)}>Posts</button>
          <button value='comments' onClick={(event)=>handleItems(event)}>Comments</button>
        </li>
      </ul>
       <Display
        items={items}
       />
    </main>
  );
}

export default Header