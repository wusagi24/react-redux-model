import assert from 'assert';
import * as actions from './../../src/actions/musicList';
import * as types from './../../src/constants/ActionTypes/musicList';

describe('ActionCreators - musicList', () => {
  describe('musicListUpdate', () => {
    let musicListUpdate;
    before(() => {
      musicListUpdate = actions.musicListUpdate;
    });

    it('type プロパティが正しく設定されている', () => {
      const action = musicListUpdate();
      assert(action.type);
      assert.strictEqual(action.type, types.MUSIC_LIST_UPDATE);
    });

    it('引数を payload プロパティとして格納して返す', () => {
      const data = [
        { id: 1 },
        { id: 2 },
      ];
      const action = musicListUpdate(data);
      assert(action.payload);
      assert.strictEqual(action.payload, data);
    });
  });

  describe('musicListOrderAsc', () => {
    let musicListOrderAsc;
    before(() => {
      musicListOrderAsc = actions.musicListOrderAsc;
    });

    it('type プロパティが正しく設定されている', () => {
      const action = musicListOrderAsc();
      assert(action.type);
      assert.strictEqual(action.type, types.MUSIC_LIST_ORDER_ASC);
    });
  });

  describe('musicListOrderDesc', () => {
    let musicListOrderDesc;
    before(() => {
      musicListOrderDesc = actions.musicListOrderDesc;
    });

    it('type プロパティが正しく設定されている', () => {
      const action = musicListOrderDesc();
      assert(action.type);
      assert.strictEqual(action.type, types.MUSIC_LIST_ORDER_DESC);
    });
  });

  describe('musicListSort', () => {
    let musicListSort;
    before(() => {
      musicListSort = actions.musicListSort;
    });

    it('type プロパティが正しく設定されている', () => {
      const action = musicListSort();
      assert(action.type);
      assert.strictEqual(action.type, types.MUSIC_LIST_SORT);
    });

    it('引数を key プロパティとして格納して返す', () => {
      const data = 'hoge';
      const action = musicListSort(data);
      assert(action.key);
      assert.strictEqual(action.key, data);
    });
  });
});
