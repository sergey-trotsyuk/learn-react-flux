import React from 'react';

import $ from 'jquery';
import 'jquery-ui/tooltip';

import styles from './Button.css';

export default class Button extends React.Component {
  static propTypes = {
    onClick: React.PropTypes.func,
    children: React.PropTypes.string
  }

  static defaultProps = {
    onClick: () => {},
    children: ''
  }

  buttonNode = null;

  componentDidMount() {
    $(this.buttonNode).tooltip();
  }

  componentWillUnmount() {
    $(this.buttonNode).tooltip('destroy');
  }

  render() {
    return (
      <button
        className={styles.normal}
        onClick={this.props.onClick}
        ref={(node) => this.buttonNode = node}
        title={this.props.children}>{this.props.children}</button>
    );
  }
};
