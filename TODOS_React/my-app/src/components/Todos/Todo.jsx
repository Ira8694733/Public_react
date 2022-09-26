import styles from './Todo.module.css'
import {RiDeleteBin2Line} from "react-icons/ri";
import {useContext} from "react";
import MyContext from "../../providers/MyContext";


function Todo ({todo}) {

    const {removeTodoHandler, checkedTodoList} = useContext(MyContext);

    return  (
        <div className={`${styles.todo} ${todo.isComplete ? styles.completedTodo : styles.todo}`}>
            <label htmlFor="subscribe">
                <input type="checkbox" id="checkbox" name="subscribe" onChange={() => checkedTodoList(todo.id)} />
            </label>
        <div className={styles.todoText}>{todo.text}</div>
            <RiDeleteBin2Line onClick={() => removeTodoHandler(todo.id)}/>
        </div>
);
};

export default Todo;