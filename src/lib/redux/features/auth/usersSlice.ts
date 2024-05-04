import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '@/lib/axios/api';
import { setCookie, parseCookies } from 'nookies';

import { RootState } from '../../store';

import { User, LoginUser } from '@/interfaces/User';

interface UserState {
  data: User;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  createdStatus: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: UserState = {
  data: {
    firstname: '',
    lastname: '',
    token: '',
  },
  status: 'idle',
  createdStatus: 'idle',
  error: null,
};

const setSession = () => {
  const { 'subone.token': token } = parseCookies();
  console.log("🚀 ~ setSession ~ token:", token)

  axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
  console.log("axiosInstance.defaults.headers", axiosInstance.defaults.headers);
};

export const fetchUser = createAsyncThunk('user/fetchUser', async () => {
  setSession();

  const response = await axiosInstance.get('/auth/users');
  console.log("🚀 ~ fetchUser ~ response:", response)
  
  return response.data;
});

export const login = createAsyncThunk('user/login', async (data: LoginUser) => {
  const response = await axiosInstance.post('/auth/authenticate', data);

  const { token } = response.data;

  const oneYearInSeconds = 365 * 24 * 60 * 60;

  setCookie(undefined, 'subone.token', token, {
    maxAge: oneYearInSeconds
  });

  setSession();

  return response.data;
});

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || null;
      })
      .addCase(login.pending, (state) => {
        state.createdStatus = 'loading';
      })
      .addCase(login.fulfilled, (state, action) => {
        state.createdStatus = 'succeeded';
        state.data = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.createdStatus = 'failed';
        state.error = action.error.message || null;
      });
  },
});

export const users = (state: RootState) => state.users;
export default usersSlice.reducer;