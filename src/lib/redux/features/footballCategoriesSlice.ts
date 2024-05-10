import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../store';

import axiosInstance from '@/lib/axios/api';

import { FootballCategory } from '@/interfaces/FootballCategory';

import addAuthHeader from '../../../utils/addAuthHeader';


interface FootballCategoryState {
  data: FootballCategory[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: FootballCategoryState = {
  data: [],
  status: 'idle',
  error: null,
};

export const fetchFootballCategories = createAsyncThunk('footballCategories/fetchfootballCategories', async () => {
  addAuthHeader();

  const response = await axiosInstance.get('/football_categories');
  
  return response.data;
});

const footballCategoriesSlice = createSlice({
  name: 'footballCategories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFootballCategories.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchFootballCategories.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchFootballCategories.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || null;
      });
  },
});

export const footballCategories = (state: RootState) => state.footballCategories;
export default footballCategoriesSlice.reducer;