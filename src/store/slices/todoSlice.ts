import { createSlice, nanoid } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface TodoItem {
    todoId: string;
    message: string;
    completed: boolean;
}

const todosSlice = createSlice({
    name: 'todos',
    initialState: [] as TodoItem[],
    reducers: {
        addTodo: {
            reducer: (state, action: PayloadAction<TodoItem>) => {
                state.push(action.payload)
            },
            prepare: ({ message, completed }) => {
                const todoId = nanoid()
                return { payload: { todoId, message, completed } }
            },
        },
    },
});

export const { addTodo } = todosSlice.actions;

export default todosSlice.reducer;