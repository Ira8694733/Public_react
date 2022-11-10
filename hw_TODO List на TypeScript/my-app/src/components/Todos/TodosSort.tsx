import React, {FC} from 'react';
import {ITodoSortProps} from "./types";

const TodosSort:FC<ITodoSortProps> = ({userSortId, onSelect, userIdArr}) => {
    return (
        <select value={userSortId} onChange={onSelect}>
            <option selected value="all"> All</option>
            {
                [...userIdArr].map(id =>
                    <option key={id} value={id}> userId: {id}</option> )
            }
        </select>
    );
};

export default TodosSort