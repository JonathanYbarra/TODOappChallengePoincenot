import { createSlice } from '@reduxjs/toolkit'
import { AddNewTodo, DeleteTodo } from '../../api/apiTodo';
import { SetCompletionTodo } from './../../api/apiTodo';

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

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {},
    extraReducers: {
        // AddTodo
        [AddNewTodo.pending]: (state) => {
            state.loading = true;
            state.error = null;
        },
        [AddNewTodo.fulfilled]: (state, action) => {
            state.loading = false;
            state.todoList.push(action.payload);
        },
        [AddNewTodo.rejected]: (state, action) => {
            state.error = action.error.message;
            state.loading = false;
        },
        // DeleteTodo
        [DeleteTodo.pending]: (state) => {
            state.loading = true;
            state.error = null;
        },
        [DeleteTodo.fulfilled]: (state, action) => {
            state.loading = false;
            state.todoList = state.todoList.filter((todo) => todo.todoId !== action.meta.arg.todoId);
        },
        [DeleteTodo.rejected]: (state, action) => {
            state.error = action.error.message;
            state.loading = false;
        },
        // SetCompletionTodo
        [SetCompletionTodo.pending]: (state) => {
            state.loading = true;
            state.error = null;
        },
        [SetCompletionTodo.fulfilled]: (state, action) => {
            state.loading = false;
            const objIndex = state.todoList.findIndex(((todo: TodoItem) => todo.todoId === action.meta.arg.todo.todoId));
            state.todoList[objIndex].completed = action.payload.completed;
        },
        [SetCompletionTodo.rejected]: (state, action) => {
            state.error = action.error.message;
            state.loading = false;
        },
    }
});

export const selectAllTodos = (state: any) => state.todos;

export default todosSlice.reducer;