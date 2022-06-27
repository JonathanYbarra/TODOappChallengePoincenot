import { createSlice } from '@reduxjs/toolkit';
import { CreateUser } from './../../api/apiAuth';

interface AuthState {
  isLoggedIn: boolean;
  user: string;
  loading: boolean;
  error: {} | null;
}

const initialState: AuthState = {
  isLoggedIn: false,
  user: "",
  loading: false,
  error: null,
};


const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {

  },
  extraReducers: {
    [CreateUser.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [CreateUser.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.loading = false;
      state.isLoggedIn = true;
    },
    [CreateUser.rejected]: (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    },
  },
});

export default authSlice.reducer;