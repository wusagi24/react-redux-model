import * as types from './../constants/ActionTypes/api';

export function requestMusicList() {
  return {
    type: types.REQUEST_MUSIC_LIST,
  };
}

export function successMusicList() {
  return {
    type: types.SUCCESS_MUSIC_LIST,
  };
}

export function failureMusicList() {
  return {
    type: types.FAILURE_MUSIC_LIST,
  };
}
