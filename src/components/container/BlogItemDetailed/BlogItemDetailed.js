import React from 'react';

import styles from './BlogItemDetailed.css';

import Article from '../../presentational/Article/Article';
import Header from '../../presentational/Header/Header';
import Paragraph from '../../presentational/Paragraph/Paragraph';
import BlogItemListStore from '../../../stores/BlogItemListStore';
import BlogItemListActions from '../../../actions/BlogItemListActions';

export default class BlogItem extends React.Component {
  static propTypes = {
    params: React.PropTypes.shape({
      id: React.PropTypes.string.isRequired
    }).isRequired
  }

  static defaultProps = {
    id: null
  }

  state = {
    item: BlogItemListStore.getItemById(parseInt(this.props.params.id, 10))
  }

  componentDidMount() {
    BlogItemListActions.markRead();
  }

  render() {
    return (
      <Article className={styles.normal}>
        <Header>{this.state.item.title}</Header>
        <Paragraph>{this.state.item.text}</Paragraph>
      </Article>
    );
  }
};
