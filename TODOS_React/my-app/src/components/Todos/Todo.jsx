import styles from './Todo.module.css'
import {RiDeleteBin2Line} from "react-icons/ri";




function Todo ({todo, removeTodo, checkedTodo}) {

    return  (
        <div className={`${styles.todo} ${todo.isComplete ? styles.completedTodo : styles.todo}`}>
            <label htmlFor="subscribe">
                <input type="checkbox" id="checkbox" name="subscribe" onChange={() => checkedTodo(todo.id)} />
            </label>
        <div className={styles.todoText}>{todo.text}</div>
            <RiDeleteBin2Line onClick={() => removeTodo(todo.id)}/>
        </div>
)
}

export default Todo