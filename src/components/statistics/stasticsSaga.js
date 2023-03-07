import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { fetchStasticsStart, fetchStasticsSuccess, fetchStasticsFailure } from './ststicsSlice';

function* fetchStasticsHandler() {
  try {
    const response = yield call( () => fetch("http://localhost:8000/api/songs/stasitics"));
    const data = yield response.json()
    yield put(fetchStasticsSuccess(data));

  } catch (error) {
    yield put(fetchStasticsFailure(error.message));
  }
}

export function* watchFetchStastics() {
  yield takeEvery("stastics/fetchStasticsStart", fetchStasticsHandler);
}
