import assert from 'assert';
import _ from 'lodash';
import * as allActionTypes from '../../../src/constants/ActionTypes';
import * as apiActionTypes from '../../../src/constants/ActionTypes/api';
import * as musicListActionTypes from '../../../src/constants/ActionTypes/musicList';

describe('ActionTypes', () => {
  let types = {};
  before(() => {
    types = {
      ...apiActionTypes,
      ...musicListActionTypes,
    };
  });

  it('値に重複がない', () => {
    const typeValues = Object.values(types);
    assert.equal(typeValues.length, _.uniq(typeValues).length);
  });

  it('一括 import が正しく行われる', () => {
    assert.deepEqual(allActionTypes, types);
  });
});
