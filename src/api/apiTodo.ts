import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';
import { BACKEND_URL_TODO } from '../constans/backend';

export const AddNewTodo: any = createAsyncThunk('todo/AddNewTodo', async ({ userId, todo }: any) => {
    try {
        const { data } = await axios.post(`${BACKEND_URL_TODO}/${userId}`, {
            title: todo.message,
            message: todo.message
        });
        return data;
    } catch (e: any) {
        throw Error(e);
    }
});

export const DeleteTodo: any = createAsyncThunk('todo/DeleteTodo', async ({ userId, todoId }: { userId: string, todoId: string }) => {
    try {
        const { data } = await axios.delete(`${BACKEND_URL_TODO}/${userId}`, {
            data: {
                todoId
            }
        });
        return data;
    } catch (e: any) {
        throw Error(e);
    }
});

export const SetCompletionTodo: any = createAsyncThunk('todo/SetCompletionTodo', async ({ userId, todo }: { userId: string, todo: any }) => {
    try {
        const { data } = await axios.put(`${BACKEND_URL_TODO}/${userId}`, {
            completed: !todo.completed,
            todoId: todo.todoId
        });
        return data;
    } catch (e: any) {
        throw Error(e);
    }
});

export const GetTodos: any = createAsyncThunk('todo/GetTodos', async ({ userId }: { userId: string }) => {
    try {
        const { data } = await axios.get(`${BACKEND_URL_TODO}/${userId}`);
        const newData = data.map((todo: any) => {
            return { ...todo, todoId: todo.id }
        });
        return newData;
    } catch (e: any) {
        throw Error(e);
    }
});

export const GetTodosCompleted: any = createAsyncThunk('todo/GetTodosCompleted', async ({ userId, completed }: { userId: string, completed: boolean }) => {
    try {
        const { data } = await axios.get(`${BACKEND_URL_TODO}/${userId}/${completed}`);
        const newData = data.map((todo: any) => {
            return { ...todo, todoId: todo.id }
        });
        return newData;
    } catch (e: any) {
        throw Error(e);
    }
});

export const ResetTodo: any = createAsyncThunk('todo/ReseTodo', async ({ userId }: any) => {
    try {
        const { data } = await axios.delete(`${BACKEND_URL_TODO}/${userId}/reset`);
        return data;
    } catch (e: any) {
        throw Error(e);
    }
});