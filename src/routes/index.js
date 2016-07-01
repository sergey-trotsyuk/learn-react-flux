import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from '../components/App/App';
import BlogItemList from '../containers/BlogItemList/BlogItemList';
import BlogItemDetailed from '../containers/BlogItemDetailed/BlogItemDetailed';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={BlogItemList}/>

    <Route path="/blog-item-detailed/:id" component={BlogItemDetailed} />
  </Route>
);
