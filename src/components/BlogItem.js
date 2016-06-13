import React from 'react';
import './BlogItem.css';
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
    return (
      <article className="BlogItem">
        <h1 className="BlogItem-Title" style={{fontWeight: this.state.isRead? 'normal': 'bold'}}>{this.props.title}</h1>
        <Button onClick={this.onClick}>{this.state.isRead? 'Mark as Unread': 'Mark as Read'}</Button>
        <p>{this.props.text}</p>
      </article>
    );
  }
};
