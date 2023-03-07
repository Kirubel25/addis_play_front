import { put, takeLatest, all } from 'redux-saga/effects';


function* submitFormSaga(action) {
  const { name, title, artist, album, gener } = action.payload;
  
  try {
    yield fetch('https://addis-pay-back-app.onrender.com/api/songs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, title, artist, album, gener }),
    });
  } catch (error) {
    console.error(error);
  }
}



export function* watchSubmitForm() {
  yield takeLatest('addsong/submitForm', submitFormSaga);
}

