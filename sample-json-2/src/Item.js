import React from 'react'

const Item = ( { item }) => {
  console.log('item comp', item)
  return (
    <li>
        {JSON.stringify(item)}
    </li>
  )
}

export default Item