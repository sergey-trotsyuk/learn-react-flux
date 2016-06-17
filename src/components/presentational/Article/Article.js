import React from 'react';
import classNames from 'classnames';

import styles from './Article.css';

export default class Article extends React.Component {
  propTypes: {
    className: React.PropTypes.string
  }
  
  render() {
    // Classes
    var className = classNames(
      styles.normal,
      this.props.className
    );
    
    // Props
    var props = Object.assign({}, this.props, {
      className:  className
    });
    
    return (
      <article {...props}>{this.props.children}</article>
    );
  }
};
