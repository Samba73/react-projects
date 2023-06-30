import React from 'react'
import Items from './Items';
import { CgAddR } from 'react-icons/cg';
import './Content.css'


const ToDoAdd = () => {
    // const [todo, settodo] = React.useState('')
    // const [todos, settodos] = React.useState([])
    const [todocount, settodocount] = React.useState([])
    const [items, setItems] = React.useState([])
    const [todo, settodo] = React.useState('')


function handleAddItem(){
    if (!todo) return
    const listItems = [{
        id: todocount+1,
        checked: false,
        title: todo
    }]
    //console.log(listItems)
    setItems([...items, ...listItems])
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
}
function handleSelection(id) {
    const listItems = items.map((item) => 
        item.id === id ? {...item, ischecked:!item.ischecked} : item
    )
    setItems(listItems)
}
  return (
        <main className='main'>
        <p>Welcome to ToDo App. You have total {todocount} ToDo's</p>
        <div>
            <ul>
                <li className="new">
                    <input type='text' placeholder='Add ToDo Item' value = {todo} onChange={(event) => handleItemEntry(event)}/>
                    <button onClick={handleAddItem}><CgAddR role="button" tabIndex="0"/></button>
                </li>
            </ul>
        </div>
        <p>
            <h2>
                Available ToDo's are...
            </h2>
            {(items && items.length > 0) ? 
            (
                <Items 
                    items = {items}
                    handleSelection = {handleSelection}
                    handleRemoveItem = {handleRemoveItem}

                />
            ): <p><h2>Your ToDo list is empty</h2></p>}         
        </p>
        </main>
  )
}

export default ToDoAdd