import { createSlice } from '@reduxjs/toolkit';

const addSongsSlice = createSlice({
  name: 'addsong',
  initialState: {
    isOpen: false,
    title: '',
    artist: '',
    album: '',
    genre: '',
  },
  reducers: {
    openModal: (state) => {
      state.isOpen = true;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
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
    submitForm: (state) => {
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

export const { openModal, closeModal, setName, setTitle, setAlbum, setGener,submitForm,submitFormSuccess,submitFormFailure } = addSongsSlice.actions;

export default addSongsSlice.reducer;
