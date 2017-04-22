import assert from 'assert';
import * as allActions from '../../src/actions';
import * as apiActions from '../../src/actions/api';
import * as musicListActions from '../../src/actions/musicList';

describe('ActionCreators - index', () => {
  it('一括 export が正しく行われている', () => {
    const actions = {
      ...apiActions,
      ...musicListActions,
    };
    assert.deepEqual(actions, allActions);
  });
});
