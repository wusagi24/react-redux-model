import assert from 'assert';
import { fork } from 'redux-saga/effects';

import rootSaga from '../../src/sagas';
import { handleRequestMusicList } from '../../src/sagas/fetchAssetDatas';

describe('rootSaga', () => {
  it('handleRequestMusicList タスクのみが登録されている', () => {
    const saga = rootSaga();

    let ret = saga.next();
    assert.deepEqual(ret.value, fork(handleRequestMusicList));

    ret = saga.next();
    assert(ret.done);
  });
});
