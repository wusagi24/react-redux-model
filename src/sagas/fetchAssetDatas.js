import { take, call, put } from 'redux-saga/effects';

import { REQUEST_MUSIC_LIST } from '../constants/ActionTypes/api';
import { successMusicList, failureMusicList } from '../actions/api';
import { musicListUpdate } from '../actions/musicList';
import * as API from '../apis';

export function* handleRequestMusicList() {
  while (true) {
    yield take(REQUEST_MUSIC_LIST);
    const { payload, error } = yield call(API.fetchMusicList);
    if (payload && !error) {
      yield put(musicListUpdate(payload));
      yield put(successMusicList());
    } else {
      yield put(failureMusicList(error));
    }
  }
}
