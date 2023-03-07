import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import songsReducer from '../components/musics/songSlice';
import statReducer from '../components/statistics/ststicsSlice';
import addsondReducer from '../components/musics/addMusicSlice';
import editReducer from '../components/musics/editMusicSlice';
import deleteSongReducer from '../components/musics/deleteSlice';
import { watchFetchSongs } from '../components/musics/songsSaga';
import { watchDeleteForm } from '../components/musics/deleteSaga';
import { watchEditForm } from '../components/musics/editMusicSlag';
import { watchSubmitForm } from '../components/musics/addMusicSaga';
import { watchFetchStastics } from '../components/statistics/stasticsSaga';
import { all } from 'redux-saga/effects'

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    songs: songsReducer,
    stastics: statReducer,
    addsong: addsondReducer,
    deleteFile: deleteSongReducer,
    editsong: editReducer
  },
  middleware: [sagaMiddleware],
});


function* rootSaga() {
  yield all([
    watchFetchSongs(),
    watchFetchStastics(),
    watchSubmitForm(),
    watchDeleteForm(),
    watchEditForm()
  ]);
}

sagaMiddleware.run(rootSaga);

export default store;
