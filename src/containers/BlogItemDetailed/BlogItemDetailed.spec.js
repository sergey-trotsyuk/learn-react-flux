import {expect} from 'chai';
import {spy} from 'sinon';
import deepFreeze from 'deep-freeze';

import { mapStateToProps, mapDispatchToProps } from './BlogItemDetailed';
import { MARK_AS_READ } from '../../constants/blogItem'


describe('container: BlogItemDetailed', () => {
  it('should map state to props', () => {
    const containerBlogItem = {
      id: 1,
      title: 'Title'
    };
    const state = deepFreeze({
      blogItemList: [
        containerBlogItem,
        {
          id: 2,
          title: 'Title 2'
        }
      ]
    });
    const ownProps = deepFreeze({
      params: {
        id: 1
      }
    });
    const expectedProps = containerBlogItem;

    const props = mapStateToProps(state, ownProps);

    expect(props).to.deep.equal(expectedProps);
  });

  describe('should map dispatch to props', () => {
    it('should create props', () => {
      const dispatch = () => {};
      const expectedPropList = [
        'onMarkRead'
      ];

      const props = mapDispatchToProps(dispatch);
      expect(props).to.be.an('object');
      for (let prop of expectedPropList) {
        expect(props[prop]).to.be.a('function');
      }
    });

    it('should create valid prop: onMarkRead', () => {
      const dispatch = spy();
      const blogItemId = 1;

      const expectedDispatchArguments = {
        type: MARK_AS_READ,
        id: blogItemId
      };


      const props = mapDispatchToProps(dispatch);
      props.onMarkRead(blogItemId);

      expect(dispatch.calledWith(expectedDispatchArguments)).to.be.ok;
    });
  });
});
