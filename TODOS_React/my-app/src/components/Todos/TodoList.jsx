import React, {useContext} from 'react'
import Todo from './Todo'
import MyContext from "../../providers/MyContext";

const TodoList = () => {
    const {todos} = useContext(MyContext);


    return todos.map((todo) => <Todo key={todo.id} todo={todo}/>);
};

export default TodoList