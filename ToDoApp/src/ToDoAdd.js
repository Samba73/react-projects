import React from 'react'
import Items from './Items';
<<<<<<< HEAD
import { CgAddR } from 'react-icons/cg';
import './Content.css'
=======
import Search from './Search';
import { CgAddR } from 'react-icons/cg';
import './Content.css'
import './Search.css'
>>>>>>> 4beac05719b94765f7c12ee4464dd99453bb8f6e


const ToDoAdd = ({todoCount, allItems}) => {
    // const [todo, settodo] = React.useState('')
    // const [todos, settodos] = React.useState([])
    const [todocount, settodocount] = React.useState(todoCount)
    const [items, setItems] = React.useState(allItems)
    const [todo, settodo] = React.useState('')
<<<<<<< HEAD

    //console.log('todoCount from App', todoCount)
    //console.log('items from App', allItems)
=======
    const [search, setSearch] = React.useState('')


    //console.log('todoCount from App', todoCount)
    //console.log('items from App', allItems)



>>>>>>> 4beac05719b94765f7c12ee4464dd99453bb8f6e
function handleAddItem(){
    if (!todo) return
    const listItems = [{
        id: todocount+1,
        checked: false,
        title: todo
    }]
    //console.log(listItems)
    const updatedItems = [...items, ...listItems]
    setItems(updatedItems)
    localStorage.setItem('todo_list',JSON.stringify(updatedItems))
    //console.log(items)
    settodocount(+todocount+1)
    settodo('')
}  

function handleItemEntry(event){
    settodo(event.target.value)
    //console.log(event)
    //event.target.value = ""
    
}
function handleRemoveItem(id){
    //alert(id)
    let listItems = items.filter(item => item.id !== id)
    setItems(listItems)
    localStorage.setItem('todo_list', JSON.stringify(listItems))
}
function handleSelection(id) {
    const listItems = items.map((item) => 
        item.id === id ? {...item, ischecked:!item.ischecked} : item
    )
    setItems(listItems)
    localStorage.setItem('todo_list', JSON.stringify(listItems))
}
  return (
        <main className='main'>
        <p>Welcome to ToDo App. You have total {todocount} ToDo's</p>
        <div>
            <ul>
                <li className="new">
                    <input type='text' placeholder='Add ToDo Item' value = {todo} onChange={(event) => handleItemEntry(event)}/>
<<<<<<< HEAD
                    <button onClick={handleAddItem}><CgAddR role="button" tabIndex="0"/></button>
                </li>
=======
                    <button onClick={handleAddItem}><CgAddR role="button" tabIndex="0"/></button>  
                </li>
                <Search
                    Search={search}
                    setSearch={setSearch} 
                />
>>>>>>> 4beac05719b94765f7c12ee4464dd99453bb8f6e
            </ul>
        </div>
        <p>
            <h2>
                Available ToDo's are...
            </h2>
            {(items && items.length > 0) ? 
            (
                <Items 
<<<<<<< HEAD
                    items = {items}
=======
                    items = {items.filter(item => (item.title).includes(search))}
>>>>>>> 4beac05719b94765f7c12ee4464dd99453bb8f6e
                    handleSelection = {handleSelection}
                    handleRemoveItem = {handleRemoveItem}

                />
            ): <p><h2>Your ToDo list is empty</h2></p>}         
        </p>
        </main>
  )
}

export default ToDoAdd
