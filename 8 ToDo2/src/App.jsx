import ToDoName from "./components/ToDoName";
import ToDoAdd from "./components/ToDoAdd";
import ToDoItems from "./components/ToDoItems";
import "./App.css";

function App() {

  let toDoItems = [
    { toDoName: "Buy Milk", toDoDate: new Date().toLocaleDateString() },
    { toDoName: "Go to College", toDoDate: new Date().toLocaleDateString() },
    {
      toDoName: "Buy Clothes",
      toDoDate: new Date().toLocaleDateString(),
    },
  ];

  return (
    <div class="todo-container">
      <ToDoName />
      <ToDoAdd />
      <ToDoItems toDoItems={toDoItems}></ToDoItems>
    </div>
  );
}

export default App;
