import React from 'react';
import './Button.css';

export default function (props) {
  return React.createElement(
    'button',
    {
      className: 'Button',
      onClick: props.onClick
    },
    props.children
  );
};
