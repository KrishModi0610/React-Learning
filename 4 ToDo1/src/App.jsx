import ToDoName from "./components/ToDoName";
import ToDoAdd from "./components/ToDoAdd";
import ToDoItem1 from "./components/ToDoItem1";
import ToDoItem2 from "./components/ToDoItem2";
import "./App.css";


function App() {
  return (
    <center class="todo-container">
      <ToDoName />
      <div className="item-container">
      <ToDoAdd />
        <ToDoItem1 />
        <ToDoItem2 />
      </div>
    </center>
  );
}

export default App;
