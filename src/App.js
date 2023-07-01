import ToDoAdd  from "./ToDoAdd";
import Footer   from "./Footer";
import Header   from "./Header";
import "./App.css"

function App() {
  const todocount = localStorage.getItem('todo_list') ? JSON.parse(localStorage.getItem('todo_list')).length : 0;
  const items = localStorage.getItem('todo_list') ? JSON.parse(localStorage.getItem('todo_list')) : [];
  return (
    <div className="App">
      <Header title="Sam's"/>     
      <ToDoAdd 
        todoCount = {todocount}
        allItems = {items}
      />
      <Footer />
    </div>
  );
}

export default App;