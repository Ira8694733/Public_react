import React, {FC} from 'react';
import {changeStatus, removeTodo} from "../../store/Slice/todos";
import {ReactComponent as RemoveIcon} from "../../assets/icons/remove-button.svg";
import {ReactComponent as EditIcon} from "../../assets/icons/edit.svg";
import {ITodoItemProps} from "./types";
import {useAppDispatch} from "../../store/hooks";

const TodoItem: FC<ITodoItemProps> = ({id, completed, title}) => {
    const dispatch = useAppDispatch();

    return (
        <div key={id} className={`todos_item todos-item${completed ? ' todos-item--completed' : ''}`}>
            <span className="todos-item_title">#{id}-{title}</span>
            <div className="todos-item_actions">
                <button type="button"
                        className="todos-item_button"
                        onClick={() => dispatch(changeStatus(id))} >
                    <RemoveIcon/>
                </button>
                {
                    completed && (
                        <button type="button"
                                className="todos-item_button"
                                onClick={() => dispatch(removeTodo(id))}>
                            <EditIcon/>
                        </button>
                    )
                }
            </div>
        </div>

    )
};

export default TodoItem;