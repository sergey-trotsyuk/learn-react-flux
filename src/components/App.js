import React from 'react';
import './App.css';
import BlogItemList from './BlogItemList';

export default function (props) {
  return React.createElement(
    'section',
    {
      className: 'App'
    },
    React.createElement(
      'h1',
      null,
      'Blog title'
    ),
    React.createElement(
      BlogItemList,
      {
        items: props.items
      }
    )
  );
};
