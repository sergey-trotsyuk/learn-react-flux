import { createStore } from 'redux';

import rootReducer from '../reducer';

const global = typeof window !== 'undefined'? window: this;

export function configureStore() {
  const store = createStore(
    rootReducer,
    {},
    global.devToolsExtension ? global.devToolsExtension() : f => f
  );

  // Reducer hot reload
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducer', () => {
      const nextRootReducer = require('../reducer').default;
      store.replaceReducer(nextRootReducer)
    })
  }

  return store;
}
