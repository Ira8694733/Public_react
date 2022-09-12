import {useState} from "react";
import { v4 as uuidv4 } from 'uuid';
import TodoForm from "./components/Todos/TodoForm"
import Todolist from "./components/Todos/TodoList"
import './App.css'

function App() {

    const [todos, setTodos] = useState([])

    const addTodoHandler = (text) => {
        const newTodo = {
            text: text,
            isComplete: false,
            id: uuidv4(),
        }
        setTodos([...todos, newTodo])}

    const removeTodoHandler = (id) => {
        setTodos(todos.filter((todo) => {return !todo.isComplete}))
    }

      const CheckedTodoList = (id) => {
         setTodos(todos.map((todo) => todo.id === id ? { ...todo, isComplete:true } : {...todo}))
     }

  return (
      <>
        <div  className="App">
        <h1>Todo list</h1>
        <TodoForm addTodo={addTodoHandler}/>
        <Todolist
            todos={todos}
            removeTodo={removeTodoHandler}
            checkedTodo={CheckedTodoList}/>
    </div>
      </>
  );
}

export default App;
