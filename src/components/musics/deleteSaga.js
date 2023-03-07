import { put, takeLatest, all, call } from 'redux-saga/effects';
import { deleteFileStart, deleteFileSuccess, deleteFileFailure } from './deleteSlice';
import axios from 'axios';


function* deleteFormSaga(action) {

  const id  = action.payload;
  console.log(id,'ggd')
  try {
    yield call(axios.delete, `http://localhost:8000/api/songs/${id}`);

    // yield fetch(`http://localhost:8000/api/songs/${id}`, {
    //     method: 'DELETE',
    //   });
    yield put(deleteFileSuccess());
} catch (error) {
  yield put(deleteFileFailure(error.message));
}
}



export function* watchDeleteForm() {
    yield takeLatest(deleteFileStart.type, deleteFormSaga);
}
