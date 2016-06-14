import React from 'react';
import classNames from 'classnames';
import styles from './BlogItem.css';
import Button from './Button';

export default class BlogItem extends React.Component {
  static propTypes = {
    id: React.PropTypes.number.isRequired,
    title: React.PropTypes.string.isRequired,
    text: React.PropTypes.string.isRequired,
    isRead: React.PropTypes.bool.isRequired
  }

  static defaultProps = {
    id: null,
    title: null,
    text: null,
    isRead: false
  }

  state = {
    isRead: this.props.isRead
  }

  constructor(params) {
    super(params);
  }

  onClick = () => {
    this.setState({
      isRead: !this.state.isRead
    });
  }

  render() {
    // console.log('!!! this.onClick', this.onClick);
    return (
      <article className={styles.normal}>
        <h1 className={classNames(styles.Title, {[styles.TitleIsRead]: this.state.isRead})}>{this.props.title}</h1>
        <Button className={styles.Button} onClick={this.onClick}>{this.state.isRead? 'Mark as Unread': 'Mark as Read'}</Button>
        <p className={styles.Text}>{this.props.text}</p>
      </article>
    );
  }
};
