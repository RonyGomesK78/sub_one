import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../store';
import axiosInstance from '@/lib/axios/api';

interface Player {
  id: number;
  name: string;
}

interface PlayerState {
  data: Player[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: PlayerState = {
  data: [],
  status: 'idle',
  error: null,
};

export const fetchPlayers = createAsyncThunk('players/fetchPlayers', async () => {
  const response = await axiosInstance.get('/players');
  
  return response.data;
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
      });
  },
});

export const selectPlayers = (state: RootState) => state.players;
export default playersSlice.reducer;