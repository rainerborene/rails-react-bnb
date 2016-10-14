import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import { bindActionCreators } from 'redux';
import { Provider, connect } from 'react-redux';

import * as actionCreators from './actions';
import store, { history } from './store';
import FormWizard from './components/FormWizard';

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const Container = props => (
  <div className="container">
    {React.cloneElement(props.children, props)}
  </div>
);

const Wrapper = connect(mapStateToProps, mapDispatchToProps)(Container);

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Wrapper}>
        <IndexRoute component={FormWizard} />
      </Route>
    </Router>
  </Provider>
, document.getElementById('app'));
