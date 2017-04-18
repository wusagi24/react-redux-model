import assert from 'assert';
import * as actions from './../../src/actions/api';
import * as types from './../../src/constants/ActionTypes/api';

describe('ActionCreators - api', () => {
  describe('requestMusicList', () => {
    let requestMusicList;
    before(() => {
      requestMusicList = actions.requestMusicList;
    });

    it('type プロパティが正しく設定されている', () => {
      const action = requestMusicList();
      assert(action.type);
      assert.strictEqual(action.type, types.REQUEST_MUSIC_LIST);
    });
  });

  describe('successMusicList', () => {
    let successMusicList;
    before(() => {
      successMusicList = actions.successMusicList;
    });

    it('type プロパティが正しく設定されている', () => {
      const action = successMusicList();
      assert(action.type);
      assert.strictEqual(action.type, types.SUCCESS_MUSIC_LIST);
    });
  });

  describe('failureMusicList', () => {
    let failureMusicList;
    before(() => {
      failureMusicList = actions.failureMusicList;
    });

    it('type プロパティが正しく設定されている', () => {
      const action = failureMusicList();
      assert(action.type);
      assert.strictEqual(action.type, types.FAILURE_MUSIC_LIST);
    });
  });
});
