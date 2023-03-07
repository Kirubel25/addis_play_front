import { createSlice } from '@reduxjs/toolkit';

export const stasticsSlice = createSlice({
  name: 'stastics',
  initialState: {
    stastics: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    fetchStasticsStart: (state) => {
      state.status = 'loading';
    },
    fetchStasticsSuccess: (state, action) => {
      state.status = 'succeeded';
      state.stastics = action.payload;
    },
    fetchStasticsFailure: (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    },
  },
});

export const { fetchStasticsStart, fetchStasticsSuccess, fetchStasticsFailure } = stasticsSlice.actions;

export default stasticsSlice.reducer;
