import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { modelReducer, formReducer } from 'react-redux-form';

function wizard(state = {}, action) {
  switch (action.type) {
    case 'CHANGE_STEP':
      return { step: action.step };
    default:
      return state;
  }
}

export default combineReducers({
  routing: routerReducer,

  // collections
  households: modelReducer('households'),
  people: modelReducer('people'),
  vehicles: modelReducer('vehicles'),

  // forms
  household: modelReducer('household'),
  householdForm: formReducer('household'),
  person: modelReducer('person'),
  personForm: formReducer('person'),
  vehicle: modelReducer('vehicle'),
  vehicleForm: formReducer('vehicle'),

  wizard,
});
