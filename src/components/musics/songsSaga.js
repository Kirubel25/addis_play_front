import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { fetchSongsStart, fetchSongsSuccess, fetchSongsFailure } from './songSlice';
import { API_BASE } from '../../config';

function* fetchSongsHandler() {
  try {
    const response = yield call( () => fetch(API_BASE));
    const data = yield response.json()

    yield put(fetchSongsSuccess(data));
    
  } catch (error) {
    yield put(fetchSongsFailure(error.message));
  }
}

export function* watchFetchSongs() {
  yield takeLatest("songs/fetchSongsStart", fetchSongsHandler);
}
