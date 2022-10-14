import {configureStore} from "@reduxjs/toolkit";
import todosReducer from "./Slice/todos";
import todosApi from "./API/todos";

export default configureStore({
    reducer: {
        todos:todosReducer,
        [todosApi.reducerPath]: todosApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(todosApi.middleware)
});