import assert from 'assert';
import _ from 'lodash';
import MusicList from '../../src/models/MusicList';

import origin from '../../assets/json/music.json';

describe('MusicList モデル', () => {
  let musicList;

  it('楽曲リストが格納されている', () => {
    musicList = new MusicList().setList(origin);

    assert.deepEqual(musicList.get('list').toJS(), _.sortBy(origin, 'id'));
    assert.equal(musicList.get('sortType'), 'id');
    assert.equal(musicList.get('orderType'), 'asc');
  });

  describe('楽曲リストのソート', () => {
    beforeEach(() => {
      musicList = new MusicList().setList(origin);
    });

    it('id で辞書順ソート', () => {
      const type = 'id';
      const key = 'id';
      musicList = musicList.sortList(type);
      assert.deepEqual(musicList.get('list').toJS(), _.sortBy(origin, key));
      assert.equal(musicList.get('sortType'), type);
      assert.equal(musicList.get('orderType'), 'asc');
    });

    it('タイトル（読み）で辞書順ソート', () => {
      const type = 'read';
      const key = 'title_kana';
      musicList = musicList.sortList(type);
      assert.deepEqual(musicList.get('list').toJS(), _.sortBy(origin, key));
      assert.equal(musicList.get('sortType'), type);
      assert.equal(musicList.get('orderType'), 'asc');
    });

    it('タイトル（文字）で辞書順ソート', () => {
      const type = 'spell';
      const key = 'title';
      musicList = musicList.sortList(type);
      assert.deepEqual(musicList.get('list').toJS(), _.sortBy(origin, key));
      assert.equal(musicList.get('sortType'), type);
      assert.equal(musicList.get('orderType'), 'asc');
    });
  });

  describe('楽曲リストの昇降順並べ替え', () => {
    beforeEach(() => {
      musicList = new MusicList().setList(origin).sortList('id');
    });

    it('昇順', () => {
      const type = 'asc';
      musicList = musicList.sortListOrder(type);
      assert.deepEqual(musicList.get('list').toJS(), _.sortBy(origin, 'id'));
      assert.equal(musicList.get('orderType'), type);
    });

    it('降順', () => {
      const type = 'desc';
      musicList = musicList.sortListOrder(type);
      assert.deepEqual(musicList.get('list').toJS(), _.sortBy(origin, 'id').reverse());
      assert.equal(musicList.get('orderType'), type);
    });
  });
});
