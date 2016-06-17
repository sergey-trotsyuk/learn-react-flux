import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import App from '../App/App';
import BlogItemList from '../BlogItemList/BlogItemList';
import BlogItemDetailed from '../BlogItemDetailed/BlogItemDetailed';

export default (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={BlogItemList}/>

      <Route path="/blog-item-detailed/:id" component={BlogItemDetailed} />
    </Route>
  </Router>
);
