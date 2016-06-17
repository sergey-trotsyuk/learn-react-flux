import React from 'react';
import styles from './BlogItemList.css';
import BlogItem from '../BlogItem/BlogItem';

import BlogItemListStore from '../../../stores/BlogItemListStore';
import BlogItemListActions from '../../../actions/BlogItemListActions';

export default class BlogItemList extends React.Component {
  state = this.getLatestState();

  componentDidMount() {
    BlogItemListStore.addChangeListener(this.onStoreChange);
  }

  componentWillUnmount() {
    BlogItemListStore.removeChangeListener(this.onStoreChange);
  }

  getLatestState() {
    return {
      items: BlogItemListStore.getItems()
    }
  }

  onStoreChange = () => {
    this.setState(this.getLatestState());
  }

  onItemMarkClick = (isRead, itemId) => {
    if (isRead) {
      BlogItemListActions.markRead(itemId);
    } else {
      BlogItemListActions.markUnread(itemId);
    }
  }

  render() {
    var items = this.state.items.map((item) => {
      return <BlogItem key={item.id} onMarkClick={(isRead) => this.onItemMarkClick(isRead, item.id)} {...item} />;
    }, this);

    return (
      <div className={styles.normal}>{items}</div>
    );
  }
};
