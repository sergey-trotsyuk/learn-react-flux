import React from 'react';
import styles from './App.css';
import BlogItemList from './BlogItemList';

export default (props) => {
  return (
    <section className={styles.normal}>
      <h1>Blog title</h1>
      <BlogItemList items={props.items} />
    </section>
  );
};
