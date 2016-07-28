import { expect } from 'chai';

import * as actions from './blogItem';
import { MARK_AS_READ } from '../constants/blogItem'

describe('actions: tabSettings', () => {
  it('should create action: toggle tab', () => {
    const id = 1;
    const expectedAction = {
      type: MARK_AS_READ,
      id
    };

    const resultAction = actions.markRead(id);
    expect(resultAction).to.deep.equal(expectedAction);
  });
});
