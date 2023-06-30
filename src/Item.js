import React from 'react'
import { FaTrash } from 'react-icons/fa';
import './Items.css'

function Item({item, handleSelection, handleRemoveItem}) {
  return (
    <li className='item'>
        <input type="checkbox" checked={item.ischecked} onChange={(event)=> handleSelection(item.id)}/>
        <label 
        style={(item.ischecked)? {textDecoration: 'line-through'}: null}
        onDoubleClick={(event)=> handleSelection(item.id)}>{item.title}</label>
        <button onClick={()=>handleRemoveItem(item.id)}><FaTrash role="button" tabIndex="0"/></button>
    </li>
  )
}

export default Item