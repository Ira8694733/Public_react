import { useState } from "react"
import MyContext from "./MyContext"
import {v4 as uuidv4} from "uuid";

const MyProvider = ({children}) => {
    const [todos, setTodos] = useState([])

    const addTodoHandler = (text) => {
        const newTodo = {
            text: text,
            isComplete: false,
            id: uuidv4(),
        }
        setTodos([...todos, newTodo])}

    const removeTodoHandler = (id) => {
        setTodos(todos.filter((todo)  => {return !todo.isComplete}))
    }

    const checkedTodoList = (id) => {
        setTodos(todos.map((todo) => todo.id === id ? { ...todo, isComplete:!todo.isComplete } : {...todo}))
    }

    return(
        <MyContext.Provider value={{todos, setTodos, addTodoHandler , removeTodoHandler, checkedTodoList}}>
            {children}
        </MyContext.Provider>
    )
}

export default MyProvider;