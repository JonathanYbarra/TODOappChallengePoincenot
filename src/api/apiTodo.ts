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