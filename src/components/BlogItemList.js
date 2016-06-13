import React from 'react';
import './BlogItemList.css';
import BlogItem from './BlogItem';

export default class BlogItemList extends React.Component {
  static propTypes = {
    items: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
  }

  static defaultProps = {
    items: []
  }

  render() {
    var items = this.props.items.map((item) => {
      return <BlogItem key={item.id} {...item} />;
    }, this);

    return (
      <div className="BlogItemList">{items}</div>
    );
  }
};
