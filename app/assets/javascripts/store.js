import { createStore, combineReducers, compose } from 'redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import { browserHistory } from 'react-router';
import reducers from './reducers';

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(
  combineReducers({ ...reducers, routing: routerReducer }), {}, enhancers
);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
