import React, {Component, PropTypes} from 'react';

import styles from './BlogItemDetailed.css';

import Article from '../Article/Article';
import Header from '../Header/Header';
import Paragraph from '../Paragraph/Paragraph';

export default class BlogItemDetailed extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    onMarkRead: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.onMarkRead(this.props.id);
  }

  render() {
    return (
      <Article className={styles.normal}>
        <Header>{this.props.title}</Header>
        <Paragraph>{this.props.text}</Paragraph>
      </Article>
    );
  }
}
