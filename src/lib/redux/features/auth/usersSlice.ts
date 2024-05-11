import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '@/lib/axios/api';
import { setCookie, parseCookies, destroyCookie } from 'nookies';

import { RootState } from '../../store';

import { User, LoginUser } from '@/interfaces/User';
import api from '@/lib/axios/api';

interface UserState {
  data: User;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  createdStatus: 'idle' | 'loading' | 'succeeded' | 'failed';
  logoutStatus: 'idle' | 'succeeded';
  error: string | null;
}

const initialState: UserState = {
  data: {
    firstname: '',
    lastname: '',
    sub: '',
    token: '',
  },
  status: 'idle',
  createdStatus: 'idle',
  logoutStatus: 'idle',
  error: null,
};

const setSession = () => {
  const { 'subone.token': token } = parseCookies();

  axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const fetchUser = createAsyncThunk('user/fetchUser', async () => {
  setSession();

  const response = await axiosInstance.get('/auth/users');
  
  return response.data;
});

export const login = createAsyncThunk('user/login', async (data: LoginUser) => {
  delete api.defaults.headers.common.Authorization;
  const response = await axiosInstance.post('/auth/authenticate', data);

  const { token } = response.data;

  const oneYearInSeconds = 365 * 24 * 60 * 60;

  setCookie(undefined, 'subone.token', token, {
    maxAge: oneYearInSeconds, path: '/'
  });

  return response.data;
});

export const logout = createAsyncThunk('user/logout', async () => {
  delete api.defaults.headers.common.Authorization;
  destroyCookie(null, 'subone.token', { path: '/' });
  return;
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
      })
      .addCase(logout.fulfilled, (state) => {
        state.logoutStatus = 'succeeded';
        state.createdStatus = 'idle';
        state.status = 'idle';
        state.data = {
          firstname: '',
          lastname: '',
          sub: '',
          token: '',
        }
      });
  },
});

export const users = (state: RootState) => state.users;
export default usersSlice.reducer;