import React from 'react'

const Cell = ( { cellData }) => {
    let cellValue = ''
    const data = JSON.parse(cellData)
    //console.log('typeof ', typeof(data))
    if (typeof data !== 'object') {
         cellValue = data
    } else {
        for (let item in data) {
            console.log('item', item)
            console.log('data', data)
            console.log('typeof', typeof item)
            if (item !== 'geo') {
                cellValue += (item + ":" + data[item] + '\n')
            } else {
                for (let i in data.geo) {
                    console.log('hello', i)
                    console.log('heloooo', data.geo)
                    cellValue += (i + ":" + data.geo[i] + '\n')
                }
            }
        }
    }
    console.log('cellvalue', cellValue)
  return (
    <td>
        {cellValue}
    </td>
  )
}

export default Cell