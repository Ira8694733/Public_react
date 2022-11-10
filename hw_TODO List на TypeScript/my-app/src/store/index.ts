import {configureStore} from "@reduxjs/toolkit";
import {setupListeners} from "@reduxjs/toolkit/query";
import todosReducer from "./Slice/todos";
import {todosApi} from "./API/todos";

const store = configureStore({
    reducer: {
        todos:todosReducer,

        [todosApi.reducerPath]: todosApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(todosApi.middleware)
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;