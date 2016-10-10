import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

function households(state = [], action) {
  switch (action.type) {
    case 'DELETE_HOUSEHOLD': {
      console.log('State => ', state);
      const index = state.findIndex(item => item.id === action.id);
      return [
        ...state.slice(0, index),
        ...state.slice(index + 1),
      ];
    }
    default:
      return state;
  }
}

export default combineReducers({ households, routing: routerReducer });
