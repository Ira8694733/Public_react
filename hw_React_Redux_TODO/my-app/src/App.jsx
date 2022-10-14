import Todolist from "./components/Todos/TodoList"
import './App.css'
import {useSelector} from "react-redux";
import {useGetAllTodosQuery} from "./store/API/todos";


function App() {
    const {todos} = useSelector(state => state.todos);
    useGetAllTodosQuery();

  return (
      <>
        <div  className="App">
        <h1>Todo list</h1>
         <Todolist todos={todos}/>
        </div>
      </>
  );
}

export default App;