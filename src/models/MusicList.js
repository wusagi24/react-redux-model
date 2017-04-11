import { Record, List, fromJS } from 'immutable';
import { strComparator, intComparator } from '../commons/utils';

const sortTypes = List(['id', 'read', 'spell']);
const orderTypes = List(['asc', 'desc']);

const MusicListRecord = Record({
  sortType: sortTypes.get(0),
  orderType: orderTypes.get(0),
  list: List(),
});

class MusicList extends MusicListRecord {
  static sortTypeList = sortTypes;
  static orderTypeList = orderTypes;

  /**
   * @param {Immutable.List} list
   * @return {Immutable.List}
   */
  static sortListId(list) {
    const key = 'id';
    return list.sort((a, b) => intComparator(a.get(key), b.get(key)));;
  }

  /**
   * @param {Immutable.List} list
   * @return {Immutable.List}
   */
  static sortListTitleRead(list) {
    const key = 'title_kana';
    return list.sort((a, b) => strComparator(a.get(key), b.get(key)));
  }

  /**
   * @param {Immutable.List} list
   * @return {Immutable.List}
   */
  static sortListTitleSpell(list) {
    const key = 'title';
    return list.sort((a, b) => strComparator(a.get(key), b.get(key)));
  }

  /**
   * @param {string} sortType
   * @return {MusicList}
   */
  sortList(sortType) {
    if (sortType === this.get('sortType')) {
      return this;
    }

    const sortedList = (() => {
      const list = this.get('list');
      // FIXME: list をソートするメソッドの選択ロジックの最適化
      switch (sortType) {
        case MusicList.sortTypeList.get(0) :
          return MusicList.sortListId(list);
        case MusicList.sortTypeList.get(1) :
          return MusicList.sortListTitleRead(list);
        case MusicList.sortTypeList.get(2) :
          return MusicList.sortListTitleSpell(list);
        default :
          return list;
      }
    })();

    if (this.get('orderType') === MusicList.orderTypeList.get(1)) {
      return this.set('list', sortedList.reverse()).set('sortType', sortType);
    }
    return this.set('list', sortedList).set('sortType', sortType);
  }

  /**
   * @param {string} order
   * @return {MusicList}
   */
  sortListOrder(order) {
    if (order === this.get('orderType')) {
      return this;
    }
    return this.update('list', list => list.reverse()).set('orderType', order);
  }

  /**
   * @param {Array<Object>} listData
   * @return {MusicList}
   */
  setList(listData) {
    return this.set('list', fromJS(listData)).sortList(this.get('sortType'));
  }
}

export default MusicList;
