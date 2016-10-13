import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { bindActionCreators } from 'redux';
import { Provider, connect } from 'react-redux';
import { actions } from 'react-redux-form';

import * as actionCreators from '../actions';
import store, { history } from '../store';
import HouseholdTable from './HouseholdTable';
import HouseholdForm from './HouseholdForm';
import PeopleForm from './PeopleForm';
import VehiclesForm from './VehiclesForm';

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

class App extends React.Component {

  constructor(props) {
    super(props);

    this.fetchHousehold = this.fetchHousehold.bind(this);
    this.resetForms = this.resetForms.bind(this);

    // Configure routes here as this solves a problem with hot loading where
    // the routes are recreated each time.
    this.routes = (
      <Route path="/" component={Wrapper}>
        <IndexRoute component={HouseholdTable} onEnter={this.resetForms} />
        <Route path="households/new" component={HouseholdForm} />
        <Route path="households/:id/people" component={PeopleForm} onEnter={this.fetchHousehold} />
        <Route path="households/:id/vehicles" component={VehiclesForm} />
      </Route>
    );
  }

  resetForms() {
    store.dispatch(actions.reset('household'));
  }

  fetchHousehold(state, replace, _) {
    const household = store.getState().households.find(
      record => record.id === state.params.id
    );

    if (household) {
      store.dispatch(actions.load('household', household));
    } else {
      replace({ pathname: '/' });
    }
  }

  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          {this.routes}
        </Router>
      </Provider>
    );
  }

}

export default App;
