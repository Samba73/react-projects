import React from 'react'
import './Items.css'
import Item from './Item';

function Items({items, handleSelection, handleRemoveItem}) {
    //console.log(items)
  return (
    <ul>
        {items.map((item) => 
            <Item
                item = {item}
                handleSelection = {handleSelection}
                handleRemoveItem = {handleRemoveItem}
            />
        )}
    </ul>
)
}

export default Items