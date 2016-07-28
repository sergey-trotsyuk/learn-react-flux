import { expect } from 'chai';
import deepFreeze from 'deep-freeze';
import clone from 'clone';

import reducer from './blogItemList';
import { MARK_AS_READ } from '../constants/blogItem'

describe('reducer: searchResults', () => {
  let stateNotFroze;
  let state;

  function createAction(type, payload) {
    return  {
      type,
      ...payload
    };
  }

  beforeEach(() => {
    state = deepFreeze([
      {
        id: 1,
        title: 'Item title 1',
        text: 'Item text 1',
        isRead: false
      },
      {
        id: 2,
        title: 'Item title 2',
        text: 'Item text 2',
        isRead: false
      }
    ]);
  });

  it('should set initialState', () => {
    expect(reducer(undefined, createAction('SOME_INIT_ACTION'))).to.deep.equal(state);
  });

  it('should set state for action: MARK_AS_READ', () => {
    const expectedMarkReadItemIndex = 0;

    const expectedState = clone(state);
    const expectedMarkReadItem = expectedState[expectedMarkReadItemIndex];
    expectedMarkReadItem.isRead = true;

    const action = createAction(
      MARK_AS_READ,
      {
        id: expectedMarkReadItem.id
      }
    );

    const resultState = reducer(state, action);

    expect(resultState).to.deep.equal(expectedState);
  });
});
