import React, {ChangeEvent, FC, useMemo, useState} from 'react';

import TodoItem from "./TodoItem"
import TodosPagination from "./TodosPagination";
import TodosSort from "./TodosSort";

import {useGetAllTodosQuery} from "../../store/API/todos";
import useFilterTodos from "../../hooks/useFilterTodos";
import useGetSortedList from "../../hooks/useGetSortedList";

import './styles.scss'
import {useAppSelector} from "../../store/hooks";

const Todos:FC = () => {
    useGetAllTodosQuery ();
    const {items} = useAppSelector(state => state.todos);
    const [page, setPage] = useState<number> (1);
    const [userSortId, serUserSortId] = useState('all');
    const [showOnlyCompleted, setShowOnlyCompleted] = useState<boolean> (false);
    const [searchValue, setSearchValue] = useState<string> ('');


    const onSelect = (e: ChangeEvent<HTMLSelectElement>): void => {
        serUserSortId(e.target.value);
        setPage(1);
    };

    const onSearch = (e: ChangeEvent<HTMLInputElement>): void => {
        setSearchValue(e.target.value);
        setPage(1);
    }

    const sortedList = useGetSortedList(showOnlyCompleted, items, userSortId, searchValue);

    const filteredTodos = useFilterTodos(page, sortedList);

    const userIdArr: Set<number> = useMemo (() => new Set(items.map (t => t.userId)), [items]); // Set удаляет кол-во повторений в Arr.

    return (
        <div className="todos">
            <div className="todos-header todos-header">
                <h1 className="todos-header_title">
                    TODOS COUNT:{items.length}</h1>
                <TodosSort {...{userSortId, onSelect, userIdArr}}/>
                <label>
                    <input type="checkbox" onChange={() => setShowOnlyCompleted(!showOnlyCompleted)} checked={showOnlyCompleted}/>
                    <span>Only completed</span>
                </label>
                <input type="search" onChange={onSearch} value={searchValue}/>
            </div>
            <div className="todos_list">
                {
                    filteredTodos.map((todo) => <TodoItem {...todo} key={todo.id}/>)
                }
            </div>
            {
                !filteredTodos.length &&
                <h2 className="todos_empty">No Todos</h2>
            }
            {!! filteredTodos.length &&
                <TodosPagination {...{page, sortedList, setPage}} />}
        </div>
    );
}

export default Todos;
