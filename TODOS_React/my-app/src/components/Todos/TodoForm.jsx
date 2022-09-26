import React, {useState}   from 'react'
import styles from './TodoForm.module.css'
import {useContext} from "react";
import MyContext from "../../providers/MyContext";


const TodoForm =() => {
   const {addTodoHandler} = useContext (MyContext);

    const [text, setText] = useState('');

    const onSubmitHandler = (event) => {
        event.preventDefault();
        addTodoHandler(text);
        setText('');
    }

    return (
        <div className={styles.todoFormContainer}>
        <form onSubmit={onSubmitHandler}>
            <input placeholder='Enter new task' value={text} onChange={(e) => setText(e.target.value)}/>
        </form>
        </div>
    );
};

export default TodoForm