import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

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

export const fetchUserData: any = createAsyncThunk(
  'auth/fetchUser',
  async () => {
    try {
      const { data } = await axios.get('https://api-3sxs63jhua-uc.a.run.app/v1/userId');
      return data;
    } catch (e: any) {
      throw Error(e);
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {

  },
  extraReducers: {
    [fetchUserData.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [fetchUserData.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.loading = false;
      state.isLoggedIn = true;
    },
    [fetchUserData.rejected]: (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    },
  },
});

export default authSlice.reducer;