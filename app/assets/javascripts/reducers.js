import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { modelReducer, formReducer } from 'react-redux-form';

import { DELETE_HOUSEHOLD, CREATED_HOUSEHOLD } from './actions';

function households(state = {}, action) {
  switch (action.type) {
    case DELETE_HOUSEHOLD: {
      const index = state.findIndex(item => item.id === action.id);
      return [
        ...state.slice(0, index),
        ...state.slice(index + 1),
      ];
    }
    case CREATED_HOUSEHOLD:
      return [
        ...state,
        action.attributes,
      ];
    default:
      return state;
  }
}

export default combineReducers({
  households,

  household: modelReducer('household'),
  householdForm: formReducer('household'),

  routing: routerReducer,
});
