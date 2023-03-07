import { createSlice } from '@reduxjs/toolkit';

export const songsSlice = createSlice({
  name: 'songs',
  initialState: {
    songs: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    fetchSongsStart: (state) => {
      state.status = 'loading';
    },
    fetchSongsSuccess: (state, action) => {
      state.status = 'succeeded';
      state.songs =action.payload;
    },
    fetchSongsFailure: (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    },
  },
});

export const { fetchSongsStart, fetchSongsSuccess, fetchSongsFailure } = songsSlice.actions;

export default songsSlice.reducer;
