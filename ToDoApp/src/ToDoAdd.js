import React from 'react'
import Items from './Items';
import Search from './Search';
import Requests from './Requests';
import { CgAddR } from 'react-icons/cg';
import './Content.css'
import './Search.css'


export default function ToDoAdd () {
    const API_URL = 'http://localhost:3500/items'
    const [todocount, settodocount] = React.useState(0)
    const [items, setItems] = React.useState([])
    const [todo, settodo] = React.useState('')
    const [search, setSearch] = React.useState('')
    const [fetchError, setFetchError] = React.useState(null)
    const [isLoading, setIsLoading] = React.useState(true)
    const inputRef = React.useRef()

    async function handleAddItem(){
        if (!todo) return
        const listItems = {
            id: todocount+1,
            checked: false,
            title: todo
        }
        //console.log(listItems)
        const updatedItems = [...items, listItems]
        setItems(updatedItems)
        //localStorage.setItem('todo_list',JSON.stringify(updatedItems))
        //console.log(items)
        settodocount(+todocount+1)
        settodo('')
        inputRef.current.focus()

        const addItem = Requests(API_URL, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(listItems)
        } )
        if(addItem) {
            setFetchError(addItem)
        }
        await fetchItems()
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
        settodocount(listItems.length)

        const removeItem = Requests(`API_URL/${id}`, {
            method: "DELETE"
        })
        if (removeItem) {
            setFetchError(removeItem)
        }

    }
    function handleSelection(id) {
        const listItems = items.map((item) => 
            item.id === id ? {...item, checked:!item.checked} : item
        )
        setItems(listItems)
   
    }

    const fetchItems = async () => {
        try {
            const response = await fetch(API_URL)
            console.log(response)
            if (response.status === 200) {
                const listItems = await response.json()
                console.log('listitems',listItems)
                setItems(listItems)
                settodocount(listItems.length)
                console.log('item', items)
                setFetchError(null)
            } else {
                throw new Error('No Data Retrieved')
            }
        }catch (err) {
            console.log('Error occured', err.message)
            setFetchError(err.message)
            console.log('error', fetchError)
        }finally {
            setIsLoading(false)
        }

    }
    React.useEffect(()=>{
        setTimeout(() => {
            fetchItems();
        },2000)
        },[])

return (
    <main className='main'>
        {(isLoading) ? <p>Loading Items...</p> :
            <main className='main'>
                <p>Welcome to ToDo App. You have a total of {todocount} ToDo's</p>
                    <div>
                    <ul>
                        <li className="new">
                        <input
                            type='text'
                            autoFocus
                            ref={inputRef}
                            placeholder='Add ToDo Item'
                            value={todo}
                            onChange={(event) => handleItemEntry(event)}
                        />
                        <button onClick={handleAddItem}>
                            <CgAddR role="button" tabIndex="0" />
                        </button>
                        </li>
                        <Search Search={search} setSearch={setSearch} />
                    </ul>
                    </div>
                    {fetchError ? (
                    <p>{fetchError}</p>
                    ) : (
                    <div className='main'>
                        <h2>Available ToDo's are...</h2>
                        {items && items.length > 0 ? (
                        <Items
                            key = {items.length}
                            items={items.filter(item =>
                            item.title.toLowerCase().includes(search.toLowerCase())
                            )}
                            handleSelection={handleSelection}
                            handleRemoveItem={handleRemoveItem}
                        />
                        ) : (
                        <p>
                            <h2>Your ToDo list is empty</h2>
                        </p>
                        )}
                    </div>
                    )}
            </main> 
        }
    </main>
)
}
