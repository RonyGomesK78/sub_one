import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import axiosInstance from '@/lib/axios/api';

import { RootState } from '../store';

import { FootballPosition } from '@/interfaces/FootballPosition';

interface FootballPositionState {
  data: FootballPosition[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: FootballPositionState = {
  data: [],
  status: 'idle',
  error: null,
};

export const fetchFootballPositions = createAsyncThunk('footballPositions/fetchfootballPositions', async () => {
  const response = await axiosInstance.get('/football_positions', {
    headers: {
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJmaXJzdG5hbWUiOiJSb255Iiwicm9sZXMiOlt7ImF1dGhvcml0eSI6Ik1BTkFHRVJfU1VCMTMifV0sImxhc3RuYW1lIjoiR29tZXMiLCJzdWIiOiJncm9taWx0b243QGdtYWlsLmNvbSIsImlhdCI6MTcxNDIxMTAwMCwiZXhwIjoxNzQ1NzQ3MDAwfQ.btGKL98aikakmTbi609qXLoEGh-YpLAssuakVy1TGw8"
    }
  });
  
  return response.data;
});

const footballPositionsSlice = createSlice({
  name: 'footballPositions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFootballPositions.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchFootballPositions.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchFootballPositions.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || null;
      });
  },
});

export const footballPositions = (state: RootState) => state.footballPositions;
export default footballPositionsSlice.reducer;