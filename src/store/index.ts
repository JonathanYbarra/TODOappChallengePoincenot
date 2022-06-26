import { configureStore } from "@reduxjs/toolkit";
// Reducers
import todos from "./slices/todoSlice";
import auth from "./slices/authSlice";

const store = configureStore({
  reducer: {
    auth: auth,
    todos: todos
  },
});

export type RootState = ReturnType<typeof store.getState>

export default store;