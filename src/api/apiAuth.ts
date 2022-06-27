import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BACKEND_URL_CREATE_USER } from '../constans/backend';

export const CreateUser: any = createAsyncThunk(
    'auth/CreateUser',
    async () => {
      try {
        const { data } = await axios.get(BACKEND_URL_CREATE_USER);
        return data;
      } catch (e: any) {
        throw Error(e);
      }
    }
  );