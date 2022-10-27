import React, {useMemo} from 'react';

const TodosPagination = ({sortedList, page, setPage}) => {

    const paginationNumbers = useMemo (
        () => sortedList?.length > 20 ? Math.round(sortedList.length / 20) : 1,
        [sortedList]);

    return (
    <div className="todos_pagination todos-pagination">
        {
            [...Array(paginationNumbers)].map((_, idx) => (
                <button key={idx}
                        className={`todos-pagination_item ${(page === idx +1) && 'todos-pagination_item--active'}`}
                        onClick={() => setPage(idx +1)}>
                    <span className="todos-pagination_text">{idx + 1}</span>
                </button>
            ))
        }
    </div>
    );
};

export default TodosPagination