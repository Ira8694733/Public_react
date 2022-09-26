import TodoForm from "./components/Todos/TodoForm"
import Todolist from "./components/Todos/TodoList"
import './App.css'


function App() {

  return (
      <>
        <div  className="App">
        <h1>Todo list</h1>
        <TodoForm/>
        <Todolist/>
        </div>
      </>
  );
}

export default App;
