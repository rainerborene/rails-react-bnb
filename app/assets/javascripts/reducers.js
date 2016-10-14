import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { modelReducer, formReducer } from 'react-redux-form';

function wizard(state = {}, action) {
  switch (action.type) {
    case 'NEXT_STEP':
      return { step: state.step + 1 };
    case 'PREVIOUS_STEP':
      return { step: state.step - 1 };
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

  // models
  household: modelReducer('household'),
  person: modelReducer('person'),
  vehicle: modelReducer('vehicle'),

  // forms
  householdForm: formReducer('household'),
  personForm: formReducer('person'),
  vehicleForm: formReducer('vehicle'),

  wizard,
});
