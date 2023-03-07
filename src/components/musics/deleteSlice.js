// import { createSlice } from '@reduxjs/toolkit';

// const deleteSongsSlice = createSlice({
//   name: 'deletesong',
//   initialState: {
//     isOpen: false,
//     id: '',
//   },
//   reducers: {
//     openModal: (state) => {
//       state.isOpen = true;
//     },
//     closeModal: (state) => {
//       state.isOpen = false;
//     },
//     setTitle: (state, action) => {
//       state.title = action.payload;
//     },
//     setId: (state, action) => {
//       state.id = action.payload;
//     },
//     deleteForm: (state) => {
//       state.isSubmitting = true;
//       state.error = null;
//     },
//     submitFormSuccess: (state) => {
//       state.isSubmitting = false;
//       state.error = null;
//       state.isOpen = false;
//     },
//     submitFormFailure: (state, action) => {
//       state.isSubmitting = false;
//       state.error = action.payload;
//     }
//   },

// });

// export const { openModal, closeModal, setId, deleteForm,submitFormSuccess,submitFormFailure } = deleteSongsSlice.actions;

// export default deleteSongsSlice.reducer;


import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  error: null,
};

const deleteFileSlice = createSlice({
  name: 'deleteFile',
  initialState,
  reducers: {
    deleteFileStart(state) {
      state.loading = true;
      state.error = null;
    },
    deleteFileSuccess(state) {
      state.loading = false;
      state.error = null;
    },
    deleteFileFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { deleteFileStart, deleteFileSuccess, deleteFileFailure } = deleteFileSlice.actions;

export default deleteFileSlice.reducer;

