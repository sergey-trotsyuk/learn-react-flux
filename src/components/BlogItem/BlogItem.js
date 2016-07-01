import React, {PropTypes} from 'react';
import classNames from 'classnames';

import styles from './BlogItem.css';

import {Link} from 'react-router';
import Article from '../Article/Article';
import Header from '../Header/Header';
import Paragraph from '../Paragraph/Paragraph';
import Button from '../Button/Button';

const BlogItem = ({
  id,
  title,
  text,
  isRead,
  onMarkClick
}) => {
  return (
    <Article className={styles.normal}>
      <Header className={classNames(styles.Title, {[styles.TitleIsRead]: isRead})}>{title}</Header>
      <Button className={styles.Button} onClick={() => onMarkClick(!isRead)}>{isRead? 'Mark as Unread': 'Mark as Read'}</Button>
      <Paragraph className={styles.Text}>{text}</Paragraph>
      <Link to={`/blog-item-detailed/${id}`}>Read more</Link>
    </Article>
  );
};

BlogItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  isRead: PropTypes.bool.isRequired,
  onMarkClick: PropTypes.func.isRequired
};

export default BlogItem;
