import Reflux from 'reflux';
import React from 'react';

import styles from './BlogItemDetailed.css';

import Article from '../../presentational/Article/Article';
import Header from '../../presentational/Header/Header';
import Paragraph from '../../presentational/Paragraph/Paragraph';
import BlogItemListStore from '../../../stores/BlogItemListStore';
import BlogItemListActions from '../../../actions/BlogItemListActions';

export default React.createClass({
  displayName: 'BlogItem',

  mixins: [
    Reflux.connectFilter(BlogItemListStore, 'item', function (items) {
      return items.find((item) => {
        return (item.id === parseInt(this.props.params.id, 10));
      });
    })
  ],

  propTypes: {
    params: React.PropTypes.shape({
      id: React.PropTypes.string.isRequired
    }).isRequired
  },

  getDefaultProps() {
    return {
      params: {
        id: null
      }
    };
  },

  componentDidMount() {
    BlogItemListActions.markRead(this.state.item.id);
  },

  render() {
    return (
      <Article className={styles.normal}>
        <Header>{this.state.item.title}</Header>
        <Paragraph>{this.state.item.text}</Paragraph>
      </Article>
    );
  }
});
