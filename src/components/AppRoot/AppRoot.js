import React from 'react';
import {Provider} from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { configureStore } from '../../store';

import routes from '../../routes';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

function AppRoot() {
  return (
    <Provider store={store}>
      <Router history={history} routes={routes} />
    </Provider>
  );
}

export default AppRoot;

