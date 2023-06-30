import React from 'react'
import { FaTrash } from 'react-icons/fa';
import { CgAddR } from 'react-icons/cg';
import './Content.css'


const Content = () => {
    // const [todo, settodo] = React.useState('')
    // const [todos, settodos] = React.useState([])
    const [todocount, settodocount] = React.useState([])
    const [items, setItems] = React.useState([])
    const [todo, settodo] = React.useState('')


function handleAddItem(){
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
                    <input type='text' value = {todo} onChange={(event) => handleItemEntry(event)}/>
                    <button onClick={handleAddItem}><CgAddR role="button" tabIndex="0"/></button>
                </li>
            </ul>
        </div>
        <p>
            <h2>
                Available ToDo's are...
            </h2>
            <ul>
                {items && items.length > 0 ? items.map((item) => 
                    <li className='item' key={item.id}>
                        <input type="checkbox" checked={item.ischecked} onChange={(event)=> handleSelection(item.id)}/>
                        <label 
                        style={(item.ischecked)? {textDecoration: 'line-through'}: null}
                        onDoubleClick={(event)=> handleSelection(item.id)}>{item.title}</label>
                        <button onClick={()=>handleRemoveItem(item.id)}><FaTrash role="button" tabIndex="0"/></button>
                    </li>
                ): <p><h2>Your ToDo list is empty</h2></p>}
            </ul>
        </p>
        </main>
  )
}

export default Content