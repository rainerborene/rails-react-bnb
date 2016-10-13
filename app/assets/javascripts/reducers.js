import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { modelReducer, formReducer } from 'react-redux-form';

export default combineReducers({
  // collections
  households: modelReducer('households'),
  people: modelReducer('people'),

  // forms
  household: modelReducer('household'),
  householdForm: formReducer('household'),

  routing: routerReducer,
});
