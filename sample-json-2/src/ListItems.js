import React from 'react';
import Item from './Item';

const ListItems = ( { items }) => {
  return (
    <ul>
        {items.map((item)=> 
            <Item
                item={item}
                key={item.id}
            />
        )}
    </ul>

  )
}

export default ListItems