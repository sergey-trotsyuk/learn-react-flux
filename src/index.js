import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

var blogItems = [
  {
    id: 1,
    title: 'Item title 1',
    text: 'Item text 1',
    isRead: false
  },
  {
    id: 2,
    title: 'Item title 1',
    text: 'Item text 1',
    isRead: false
  }
];

ReactDOM.render(
  React.createElement(
    App,
    {
      items: blogItems
    }
  ),
  document.getElementById('app')
);
