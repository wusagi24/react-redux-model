import { fork } from 'redux-saga/effects';
import { handleRequestMusicList } from './fetchAssetDatas';

function* rootSaga() {
  yield fork(handleRequestMusicList);
}

export default rootSaga;
