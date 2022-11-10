import {useMemo} from "react";
import {ITodo} from "../types";

const useGetSortedList =(
    showOnlyCompleted: boolean,
    items: ITodo[],
    userSortId: string,
    searchValue: string
): ITodo[] => {
    return useMemo(() => {

        const searchList = items.filter(
            item => item.title.includes(searchValue));

        const filteredList = !!searchValue ? searchList : items;

        const sortList = showOnlyCompleted ? filteredList.filter(
            item => item.completed) : filteredList;

        if (userSortId === 'all') {
            return sortList;
        }
        return sortList.filter (item => item.userId === +userSortId);
    }, [items, userSortId, showOnlyCompleted, searchValue]);
};

export default useGetSortedList;