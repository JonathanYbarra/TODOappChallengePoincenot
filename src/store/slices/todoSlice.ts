import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';
import { BACKEND_URL_ADD_TODO } from './../../constans/backend';

interface TodoItem {
    todoId: string;
    message: string;
    completed: boolean;
}

interface TodoState {
    loading: boolean;
    error: {} | null;
    todoList: TodoItem[];
}

const initialState: TodoState = {
    loading: false,
    error: null,
    todoList: [],
};

export const addNewTodoFetch: any = createAsyncThunk('todo/addNewTodoFetch', async ({ userId, todo }: any) => {
    try {
        const { data } = await axios.post(`${BACKEND_URL_ADD_TODO}/${userId}`, {
            title: todo.message,
            message: todo.message
        });
        return data;
    } catch (e: any) {
        throw Error(e);
    }
})

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {},
    extraReducers: {
        [addNewTodoFetch.pending]: (state) => {
            state.loading = true;
            state.error = null;
        },
        [addNewTodoFetch.fulfilled]: (state, action) => {
            state.loading = false;
            state.todoList.push(action.payload)
        },
        [addNewTodoFetch.rejected]: (state, action) => {
            state.error = action.error.message;
            state.loading = false;
        },
    }
});

export default todosSlice.reducer;