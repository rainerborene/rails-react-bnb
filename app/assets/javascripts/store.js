import { createStore, applyMiddleware, compose } from 'redux';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';
import thunk from 'redux-thunk';
import reducers from './reducers';
import JSONAPI from './jsonapi';

const initialState = {
  households: JSONAPI.prettify(window.DB.households),
  people: JSONAPI.prettify(window.DB.people),
  vehicles: JSONAPI.prettify(window.DB.vehicles),
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
