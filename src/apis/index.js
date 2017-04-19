// import { API_BASE_URL } from './../constants/const';
import musicList from '../../assets/json/music.json';

/**
 * 楽曲リストの API からの取得
 * @return {Promise}
 */
export function fetchMusicList() {
  // return fetch(`${API_BASE_URL}/assets/json/music.json`)
  //   .then(res => res.json())
  //   .then(payload => ({ payload }))
  //   .catch(error => ({ error }));

  // TODO: 最終的には上記の API 経由でデータを取得するロジックに切り替える
  return Promise.resolve(musicList)
    .then(payload => ({ payload }))
    .catch(error => ({ error }));
}
