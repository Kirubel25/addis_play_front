import { put, takeLatest, all } from 'redux-saga/effects';


function* editFormSaga(action) {
  const { id, name, title, artist, album, gener } = action.payload;
  
  try {
    yield fetch(`http://localhost:8000/api/songs/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, title, artist, album, gener }),
    });
  } catch (error) {
    console.error(error);
  }
}



export function* watchEditForm() {
  yield takeLatest('editsong/editForm', editFormSaga);
}

