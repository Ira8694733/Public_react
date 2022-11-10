import {ChangeEvent} from "react";
import {ITodo} from "../../types";

export interface ITodoSortProps {
    userSortId: string,
    onSelect:(e: ChangeEvent<HTMLSelectElement>)=> void,
    userIdArr: Set<number>
}

export interface ITodoItemProps extends ITodo{}

export interface ITodoTodosPaginationProps {
    sortedList: ITodo[],
    page: number,
    setPage: (page: number) => void,
}