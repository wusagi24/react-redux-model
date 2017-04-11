import * as types from '../constants/ActionTypes/musicList';
import MusicListModel from '../models/MusicList';

const initialState = new MusicListModel();

function musicList(state = initialState, action) {
  switch (action.type) {
    case types.MUSIC_LIST_UPDATE: {
      return state.setList(action.payload);
    }
    case types.MUSIC_LIST_ORDER_ASC: {
      return state.sortListOrder('asc');
    }
    case types.MUSIC_LIST_ORDER_DESC: {
      return state.sortListOrder('desc');
    }
    case types.MUSIC_LIST_SORT: {
      return state.sortList(action.key);
    }
    default: {
      return state;
    }
  }
}

export default musicList;
