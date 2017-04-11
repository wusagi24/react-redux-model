import assert from 'assert';
import _ from 'lodash';
import MusicList from '../../src/models/MusicList';

import origin from '../../assets/json/songs.json';

describe('MusicList モデル', () => {
  let musicList;
  beforeEach((done) => {
    musicList = new MusicList().setList(origin);
    done();
  });

  it('曲リストが格納されている', () => {
    assert.deepEqual(musicList.get('list').toJS(), origin);
  });

  it('曲リストを id で辞書順ソートできる', () => {
    assert.deepEqual(musicList.sortList('id').get('list').toJS(), _.sortBy(origin, 'id'));
    assert.deepEqual(musicList.sortList('id').sortListOrder('asc').get('list').toJS(), _.sortBy(origin, 'id'));
    assert.deepEqual(musicList.sortList('id').sortListOrder('desc').get('list').toJS(), _.sortBy(origin, 'id').reverse());
  });

  it('曲リストをタイトル（書き）で辞書順ソートできる', () => {
    assert.deepEqual(musicList.sortList('spell').get('list').toJS(), _.sortBy(origin, 'title'));
    assert.deepEqual(musicList.sortList('spell').sortListOrder('asc').get('list').toJS(), _.sortBy(origin, 'title'));
    assert.deepEqual(musicList.sortList('spell').sortListOrder('desc').get('list').toJS(), _.sortBy(origin, 'title').reverse());
  });

  it('曲リストをタイトル（読み）で辞書順ソートできる', () => {
    assert.deepEqual(musicList.sortList('read').get('list').toJS(), _.sortBy(origin, 'title_kana'));
    assert.deepEqual(musicList.sortList('read').sortListOrder('asc').get('list').toJS(), _.sortBy(origin, 'title_kana'));
    assert.deepEqual(musicList.sortList('read').sortListOrder('desc').get('list').toJS(), _.sortBy(origin, 'title_kana').reverse());
  });
});
