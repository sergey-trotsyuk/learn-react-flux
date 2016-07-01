import React from 'react';
import styles from './App.css';

import Header from '../Header/Header';

export default (props) => {
  return (
    <section className={styles.normal}>
      <Header>Blog title!</Header>
      {props.children}
    </section>
  );
};
