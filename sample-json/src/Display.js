import React from 'react'
import Detail from './Detail.js'

function Display({ items }) {
  console.log('display items', items)
  return (
    <ul>
      {items.map((item) => 
        <Detail
          item={item}
          key={item.id}
        />  
      )}
    </ul>
  )
}

export default Display