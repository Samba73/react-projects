import ToDoAdd  from "./ToDoAdd";
import Footer   from "./Footer";
import Header   from "./Header";
import "./App.css"

function App() {

  return (
    <div className="App">
      <Header title="Sam's"/>
      <ToDoAdd />
      <Footer />
    </div>
  );
}

export default App;