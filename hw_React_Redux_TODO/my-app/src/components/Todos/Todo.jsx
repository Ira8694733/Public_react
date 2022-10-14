import styles from './Todo.module.css'
import {RiDeleteBin2Line} from "react-icons/ri";
import {useDispatch} from "react-redux";
import {deleteTodo, toggleTodo} from "../../store/Slice/todos";


function Todo ({todo}) {
    const dispatch = useDispatch();

    return  (
        <div className={`${styles.todo} ${todo.completed ? styles.completedTodo : styles.todo}`}>
            <label htmlFor="subscribe">
                <input type="checkbox" id="checkbox" name="subscribe" onChange={() => dispatch(toggleTodo(todo.id))} />
            </label>
        <div className={styles.todoText}>{todo.title}</div>
            <RiDeleteBin2Line onClick={() => dispatch(deleteTodo(todo.id))}/>
        </div>
);
};

export default Todo;