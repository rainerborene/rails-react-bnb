import { createStore, applyMiddleware, compose } from 'redux';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';
import thunk from 'redux-thunk';
import reducers from './reducers';
import { prettify } from './jsonapi';

const DB = window.DB || {};

const initialState = {
  households: prettify(DB.households || []),
  people: prettify(DB.people || []),
  vehicles: prettify(DB.vehicles || []),
  wizard: { step: 1 },
};

const enhancers = compose(
  applyMiddleware(thunk, routerMiddleware(browserHistory)),
  window.devToolsExtension ? window.devToolsExtension() : f => f,
);

const store = createStore(reducers, initialState, enhancers);

const history = syncHistoryWithStore(browserHistory, store);

export { history };

export default store;
