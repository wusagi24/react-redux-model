import assert from 'assert';
import { take, call, put } from 'redux-saga/effects';

import { handleRequestMusicList } from '../../src/sagas/fetchAssetDatas';
import { REQUEST_MUSIC_LIST } from '../../src/constants/ActionTypes/api';
import { successMusicList, failureMusicList } from '../../src/actions/api';
import { musicListUpdate } from '../../src/actions/musicList';
import * as API from '../../src/apis';

describe('saga タスク', () => {
  describe('曲リスト取得（handleRequestMusicList）タスク', () => {
    let saga;
    beforeEach(() => {
      saga = handleRequestMusicList();
    });

    it('APIから曲リスト取得に成功した場合の処理', () => {
      let ret = saga.next();
      assert.deepEqual(ret.value, take(REQUEST_MUSIC_LIST));

      ret = saga.next();
      assert.deepEqual(ret.value, call(API.fetchMusicList));

      ret = saga.next({ payload: 'success' });
      assert.deepEqual(ret.value, put(musicListUpdate('success')));

      ret = saga.next();
      assert.deepEqual(ret.value, put(successMusicList()));

      ret = saga.next();
      assert.deepEqual(ret.value, take(REQUEST_MUSIC_LIST));
    });

    it('APIから曲リスト取得に失敗した場合の処理', () => {
      let ret = saga.next();
      assert.deepEqual(ret.value, take(REQUEST_MUSIC_LIST));

      ret = saga.next();
      assert.deepEqual(ret.value, call(API.fetchMusicList));

      ret = saga.next({ error: 'faild' });
      assert.deepEqual(ret.value, put(failureMusicList('faild')));

      ret = saga.next();
      assert.deepEqual(ret.value, take(REQUEST_MUSIC_LIST));
    });
  });
});
