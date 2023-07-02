import React from 'react'

function Search({search, setSearch}) {
   
    const handleSearchEntry = (event) => {
        event.preventDefault()
        setSearch(event.target.value)
    }
  return (
    <main className='mainSearch'>
        <div>
            <ul>
                <li className='search'>
                    <input type='text' value={search} placeholder='Enter search string here'  onChange={(event) => handleSearchEntry(event)}/>
                </li>
            </ul>
        </div>
    </main>
  )
}

export default Search