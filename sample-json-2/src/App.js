import React from 'react';
import Form from './Form';
// import ListItems from './ListItems';
import Table from './Table';
import './App.css';

function App() {
  const API_URL = 'https://jsonplaceholder.typicode.com/'
  const [reqType, setReqType] = React.useState('users')
  const [errors, setErrors] = React.useState('')
  const [items, setItems] = React.useState([])

  React.useEffect(() => {
    const requests = async() => {
      try {
        const response = await fetch(`${API_URL}${reqType}`);
        console.log(response);
        if (!response.ok) throw new Error ("Data Load issue")
        const data = await response.json();
        setItems(data);
        console.log(items);
      } catch(err) {
        setErrors(err.message);
      } 
    }
    requests();
  },[reqType])

  return (
    <div className="App">
      <Form 
        reqType={reqType}
        setReqType={setReqType}
      />  
      {/* <ListItems
        items={items}
      />   */}
      <Table
        items={items}
      />  
    </div>
  );
}

export default App;
