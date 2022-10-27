import {useMemo} from "react";

const useFilterTodos = (page, sortedList) => {
    return useMemo (() => {
        const start = (page - 1) * 20; // 0 //20
        const end = start + 20; //20 //40
        return sortedList.slice (start, end); // вернутся первые 20 эл.
    }, [page, sortedList])
};

export default useFilterTodos;