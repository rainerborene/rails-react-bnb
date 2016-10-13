import { createStore, applyMiddleware, compose } from 'redux';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';
import thunk from 'redux-thunk';
import reducers from './reducers';
import JSONAPI from './jsonapi';

const DB = window.DB || {};

const initialState = {
  households: JSONAPI.prettify(DB.households),
  people: JSONAPI.prettify(DB.people),
};

const enhancers = compose(
  applyMiddleware(thunk, routerMiddleware(browserHistory)),
  window.devToolsExtension ? window.devToolsExtension() : f => f,
);

const store = createStore(reducers, initialState, enhancers);

const history = syncHistoryWithStore(browserHistory, store);

export { history };

export default store;
