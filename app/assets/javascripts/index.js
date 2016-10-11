import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import { Provider, connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actionCreators from './actions';
import store, { history } from './store';

import App from './components/App';
import Households from './components/Households';
import HouseholdForm from './components/HouseholdForm';

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const Main = connect(mapStateToProps, mapDispatchToProps)(App);

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Main}>
        <IndexRoute component={Households} />
        <Route path="households/new" component={HouseholdForm} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
