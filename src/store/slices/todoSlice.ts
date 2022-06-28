import { createSlice } from '@reduxjs/toolkit'
import { AddNewTodo, DeleteTodo, GetTodos, GetTodosCompleted, ResetTodo } from '../../api/apiTodo';
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
    reducers: {
        FILTERTODOS(state, action) {
            switch (action.payload) {
                case "COMPLETEDTODOS":
                    state.todoList = state.todoList.filter((todo: TodoItem) => todo.completed);
                    break;
                case "UNCOMPLETEDTODOS":
                    state.todoList = state.todoList.filter((todo: TodoItem) => !todo.completed);
                    break;
            }

        },
    },
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
        // FilterTodo
        [GetTodos.pending]: (state) => {
            state.loading = true;
            state.error = null;
        },
        [GetTodos.fulfilled]: (state, action) => {
            state.loading = false;
            state.todoList = action.payload;
        },
        [GetTodos.rejected]: (state, action) => {
            state.error = action.error.message;
            state.loading = false;
        },
        [GetTodosCompleted.pending]: (state) => {
            state.loading = true;
            state.error = null;
        },
        [GetTodosCompleted.fulfilled]: (state, action) => {
            state.loading = false;
            state.todoList = action.payload;
        },
        [GetTodosCompleted.rejected]: (state, action) => {
            state.error = action.error.message;
            state.loading = false;
        },
        //ResetTodos
        [ResetTodo.pending]: (state) => {
            state.loading = true;
            state.error = null;
        },
        [ResetTodo.fulfilled]: (state, action) => {
            state.loading = false;
            state.todoList = [];
        },
        [ResetTodo.rejected]: (state, action) => {
            state.error = action.error.message;
            state.loading = false;
        },
    }
});

export const selectAllTodos = (state: any) => state.todos;
export const { FILTERTODOS } = todosSlice.actions;
export default todosSlice.reducer;