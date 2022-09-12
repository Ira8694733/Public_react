import React from 'react'
import Todo from './Todo'

const TodoList = ({todos, removeTodo, checkedTodo}) => {
    return todos.map((todo) => <Todo key={todo.id} todo={todo}
                                     removeTodo={removeTodo}
                                     checkedTodo={checkedTodo}/>);
}

export default TodoList