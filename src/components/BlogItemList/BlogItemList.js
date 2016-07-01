import React, {PropTypes} from 'react';
import styles from './BlogItemList.css';
import BlogItem from '../BlogItem/BlogItem';

const BlogItemList = ({
  items,
  onMarkRead,
  onMarkUnread,
}) => {
  const onItemMarkClick = (isRead, itemId) => {
    if (isRead) {
      onMarkRead(itemId);
    } else {
      onMarkUnread(itemId);
    }
  };

  return (
    <div className={styles.normal}>
      {items.map((item) => {
        return <BlogItem key={item.id} onMarkClick={(isRead) => onItemMarkClick(isRead, item.id)} {...item} />;
      }, this)}
    </div>
  );
};

BlogItemList.PropTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  onMarkRead: PropTypes.function,
  onMarkUnread: PropTypes.function
};


export default BlogItemList;
