import React from 'react'
import Display from './Display.js'
import './Header.css'

function Header() {
  const API_URL = 'https://jsonplaceholder.typicode.com'
  const [btnselect, setBtnSelect] = React.useState('users')
  const [errors, setErrors] = React.useState([])
  const [items, setItems] = React.useState([])
  
  async function handleUsers(e){
    setBtnSelect(e.target.value)
    console.log(btnselect)
    try {
      const response = await fetch(`${API_URL}/users`)
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
      setBtnSelect(null)
    }
  }  
  async function handlePosts(e){
    setBtnSelect(e.target.value)
    console.log('posts', e.target.value)
    try {
      const response = await fetch(`${API_URL}/posts`)
      if (response.status === 200) {
        const data = await response.json()
        setItems(data)
        console.log('posts',items)
      } else {
        throw new Error ('Posts Data Load: Error Occured')
      }
    } catch (e) {
      setErrors(e.message)
    } finally {
      setBtnSelect(null)
    }
  }
  async function handleComments(e){
    console.log('comments', e.target.value)
    setBtnSelect(e.target.value)
    try {
      const response = await fetch(`${API_URL}/comments`)
      if (response.status === 200) {
        const data = await response.json()
        setItems(data)
        console.log('comments', items)
      } else {
        throw new Error ('Comments Data Load: Error Occured')
      }
    } catch (e) {
      setErrors(e.message)
    } finally {
      setBtnSelect(null)
    }
  }
  
  return (
    <main className='main'>
      <ul>
        <li className='new'>
          <button value='users' onClick={(event)=>handleUsers(event)}>Users</button>
          <button value='posts' onClick={(event)=>handlePosts(event)}>Posts</button>
          <button value='comments' onClick={(event)=>handleComments(event)}>Comments</button>
        </li>
      </ul>
       <Display
        items={items}
       />
    </main>
  );
}

export default Header