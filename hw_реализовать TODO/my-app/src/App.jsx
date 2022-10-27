import React, {useMemo, useState} from 'react';
import {useSelector} from "react-redux";

import TodoItem from "./components/Todos/TodoItem"
import TodosPagination from "./components/Todos/TodosPagination";
import TodosSort from "./components/Todos/TodosSort";

import {useGetAllTodosQuery} from "./store/API/todos";
import useFilterTodos from "./hooks/useFilterTodos";
import useGetSortedList from "./hooks/useGetSortedList";

import './components/Todos/styles.scss'

const Todos = () =>{
useGetAllTodosQuery ();
const {items} = useSelector (state => state.todos);
const [page, setPage] = useState (1);
const [userSortId, serUserSortId] = useState ('all');
const [showOnlyCompleted, setShowOnlyCompleted] = useState (false);

const onSelect = (e) => {
    serUserSortId(e.target.value);
    setPage(1);
};

const sortedList = useGetSortedList(showOnlyCompleted, items, userSortId);

const filteredTodos = useFilterTodos(page, sortedList);

const userIdArr = useMemo (() => new Set(items.map (t => t.userId)), [items]); // Set удаляет кол-во повторений в Arr.

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
      </div>
          <div className="todos_list">
              {
              filteredTodos.map((todo) => <TodoItem {...todo} key={todo.id}/>)
              }
       </div>
      <TodosPagination {...{page, sortedList, setPage}}/>
    </div>
  );
}

export default Todos;
