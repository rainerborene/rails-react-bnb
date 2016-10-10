import React from 'react';
import { render } from 'react-dom';
import { Router, Route } from 'react-router';
import { Provider, connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actionCreators from './actions';
import store, { history } from './store';
import Households from './components/Households';

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(Households);

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App} />
    </Router>
  </Provider>,
  document.getElementById('app')
);
