import React from 'react';
import classNames from 'classnames';

import styles from './BlogItem.css';

import {Link} from 'react-router';
import Article from '../../presentational/Article/Article';
import Header from '../../presentational/Header/Header';
import Paragraph from '../../presentational/Paragraph/Paragraph';
import Button from '../../presentational/Button/Button';

export default class BlogItem extends React.Component {
  static propTypes = {
    id: React.PropTypes.number.isRequired,
    title: React.PropTypes.string.isRequired,
    text: React.PropTypes.string.isRequired,
    isRead: React.PropTypes.bool.isRequired,
    onMarkClick: React.PropTypes.func.isRequired
  }

  static defaultProps = {
    id: null,
    title: null,
    text: null,
    isRead: false
  }

  render() {
    return (
      <Article className={styles.normal}>
        <Header className={classNames(styles.Title, {[styles.TitleIsRead]: this.props.isRead})}>{this.props.title}</Header>
        <Button className={styles.Button} onClick={() => this.props.onMarkClick(!this.props.isRead)}>{this.props.isRead? 'Mark as Unread': 'Mark as Read'}</Button>
        <Paragraph className={styles.Text}>{this.props.text}</Paragraph>
        <Link to={`/blog-item-detailed/${this.props.id}`}>Read more</Link>
      </Article>
    );
  }
};
