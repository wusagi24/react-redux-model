import * as types from '../constants/ActionTypes/musicList';

export function musicListUpdate(payload) {
  return {
    type: types.MUSIC_LIST_UPDATE,
    payload,
  };
}

export function musicListOrderAsc() {
  return {
    type: types.MUSIC_LIST_ORDER_ASC,
  };
}

export function musicListOrderDesc() {
  return {
    type: types.MUSIC_LIST_ORDER_DESC,
  };
}

export function musicListSort(key) {
  return {
    type: types.MUSIC_LIST_SORT,
    key,
  };
}
