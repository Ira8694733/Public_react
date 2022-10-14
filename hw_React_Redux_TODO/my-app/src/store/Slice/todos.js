import {createSlice} from "@reduxjs/toolkit";
import todosApi from "../API/todos";

const initialState = {
    todos: [],
}

export const todosSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
            addTodo: (state, {payload}) => {
                state.todos.push({
                    id: Math.max(...state.todos?.map(todo => todo.id), 0) + 1,
                    title: payload,
                    completed: false
                });
        },
        toggleTodo: (state, {payload}) => {
            const todo = state.todos.find(todo => todo.id === payload);
            todo.completed = !todo.completed;

        },
        deleteTodo: (state,) => {
            state.todos = state.todos.filter(todo => !todo.completed);
        },

    },
    extraReducers: (builder) => {
        builder.addMatcher(
            todosApi.endpoints.getAllTodos.matchFulfilled,
            (state, {payload}) => {
                console.log(payload, 'payload');
                state.todos = payload
            }
        )
    }
});

export const {addTodo, toggleTodo, deleteTodo} = todosSlice.actions;

export default todosSlice.reducer;