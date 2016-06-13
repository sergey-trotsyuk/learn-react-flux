import React from 'react';
import './App.css';
import BlogItemList from './BlogItemList';

export default (props) => {
  return (
    <section className="App">
      <h1>Blog title</h1>
      <BlogItemList items={props.items} />
    </section>
  );
};
