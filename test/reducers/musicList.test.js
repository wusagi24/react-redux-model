import assert from 'assert';
import { is } from 'immutable';
import reducer from '../../src/reducers/musicList';
import * as actions from '../../src/actions/musicList';
import MusicListModel from '../../src/models/MusicList';
import originList from '../../assets/json/music.json';

describe('reducers - musicList', () => {
  function callReducer(state, action) {
    return reducer(state, action);
  }

  let musicList;
  beforeEach(() => {
    musicList = new MusicListModel();
  });

  it('楽曲リストを更新する', () => {
    const state = callReducer(undefined, actions.musicListUpdate(originList));
    assert(is(state, musicList.setList(originList)) === true);
  });

  it('楽曲リストを特定のプロパティの値でソートする', () => {
    let state = callReducer(undefined, actions.musicListUpdate(originList));
    const sortTypes = MusicListModel.sortTypeList;
    sortTypes.forEach((key) => {
      state = callReducer(state, actions.musicListSort(key));
      assert(is(state, musicList.setList(originList).sortList(key)) === true);
    });
  });

  it('楽曲リストを昇順に並べかえる', () => {
    let state = callReducer(undefined, actions.musicListUpdate(originList));
    state = callReducer(state, actions.musicListOrderAsc());
    assert(is(state, musicList.setList(originList).sortListOrder('asc')) === true);
  });

  it('楽曲リストを降順に並べかえる', () => {
    let state = callReducer(undefined, actions.musicListUpdate(originList));
    state = callReducer(state, actions.musicListOrderDesc());
    assert(is(state, musicList.setList(originList).sortListOrder('desc')) === true);
  });
});
