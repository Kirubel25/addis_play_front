import { createSlice } from '@reduxjs/toolkit';

const editSongsSlice = createSlice({
  name: 'editsong',
  initialState: {
    title: '',
    artist: '',
    album: '',
    genre: '',
  },
  reducers: {
    setTitle: (state, action) => {
      state.title = action.payload;
    },
    setArtist: (state, action) => {
      state.artist = action.payload;
    },
    setAlbum: (state, action) => {
        state.album = action.payload;
    },
    setGener: (state, action) => {
    state.gener = action.payload;
    },
    editForm: (state) => {
      state.isSubmitting = true;
      state.error = null;
    },
    submitFormSuccess: (state) => {
      state.isSubmitting = false;
      state.error = null;
      state.isOpen = false;
    },
    submitFormFailure: (state, action) => {
      state.isSubmitting = false;
      state.error = action.payload;
    }
  },

});

export const { openModal, closeModal, setName, setTitle, setAlbum, setGener,editForm,submitFormSuccess,submitFormFailure } = editSongsSlice.actions;

export default editSongsSlice.reducer;
