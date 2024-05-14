import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '@/lib/axios/api';

import { RootState } from '../store';

import { PlayerRequest, PlayerResponse } from '@/interfaces/PlayerRequest';

import addAuthHeader from '../../../utils/addAuthHeader';

interface PlayerState {
  data: PlayerResponse[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  createdStatus: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: PlayerState = {
  data: [],
  status: 'idle',
  createdStatus: 'idle',
  error: null,
};

export const fetchPlayers = createAsyncThunk('players/fetchPlayers/api/v1', async (categoryId: string) => {
  addAuthHeader();

  const response = await axiosInstance.get(`/players?category=${categoryId}`);
  
  return response.data;
});

export const addPlayer = createAsyncThunk('players/addPlayer/api/v1', async (data: PlayerRequest, { getState }) => {
  const response = await axiosInstance.post('/players', data);

  const currentState = (getState() as RootState).players;
  
  const updatedData = [...currentState.data, { ...response.data, id: response.data.id }];
  
  return updatedData;
});

const playersSlice = createSlice({
  name: 'players',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPlayers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPlayers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchPlayers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || null;
      })
      .addCase(addPlayer.pending, (state) => {
        state.createdStatus = 'loading';
      })
      .addCase(addPlayer.fulfilled, (state, action) => {
        state.createdStatus = 'succeeded';
        state.data = action.payload;
      })
      .addCase(addPlayer.rejected, (state, action) => {
        state.createdStatus = 'failed';
        state.error = action.error.message || null;
      });
  },
});

export const footballPlayers = (state: RootState) => state.players;
export default playersSlice.reducer;