import React from 'react'

const Item = ( { item }) => {
  return (
    <li>
        {JSON.stringify(item)}
    </li>
  )
}

export default Item