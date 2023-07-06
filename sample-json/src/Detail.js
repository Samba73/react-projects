import React from 'react'

export default function Detail({ item }) {
    console.log('detail page',JSON.stringify(item))
  return (
    <li>
        {JSON.stringify(item)}
    </li>

  )
}
