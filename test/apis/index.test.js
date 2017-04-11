import assert from 'assert';
import { fetchMusicList } from '../../src/apis';
import originData from '../../assets/json/songs.json';

describe('API', () => {
  describe('fetchMusicList()', () => {
    it('曲リストが取得できる', () => {
      return fetchMusicList()
        .then(({ payload, error }) => {
          assert(payload && !error);
          assert.deepStrictEqual(payload, originData);
        });
    });
  });
});
