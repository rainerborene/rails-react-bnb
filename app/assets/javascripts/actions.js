import { actions } from 'react-redux-form';
import JSONAPI from './jsonapi';

function request(path, options) {
  return JSONAPI.request(`/api/v1/${path}`, options);
}

export function createHousehold(attributes) {
  return (dispatch) => {
    dispatch(actions.setPending('household', true));
    dispatch(actions.resetValidity('household'));

    return request('households', {
      method: 'POST',
      body: JSONAPI.prepare('households', attributes),
    }).then((response) => {
      const model = Object.assign({ id: response.data.id }, response.data.attributes);

      dispatch(actions.push('households', model));
      dispatch(actions.load('household', model));
      dispatch(actions.setSubmitted('household'));

      dispatch({ type: 'CHANGE_STEP', step: 2 });
    }).catch((response) => {
      const errors = JSONAPI.prettify(response);
      Object.keys(errors).forEach(name =>
        dispatch(actions.setErrors(`household.${name}`, errors[name]))
      );
      dispatch(actions.setSubmitFailed('household'));
    });
  };
}

export function createPerson(attributes) {
  return (dispatch) => {
    dispatch(actions.setPending('person', true));
    dispatch(actions.resetValidity('person'));

    return request('people', {
      method: 'POST',
      body: JSONAPI.prepare('people', attributes),
    }).then((response) => {
      const model = Object.assign({ id: response.data.id }, response.data.attributes);

      dispatch(actions.push('people', model));
      dispatch(actions.reset('person'));
      dispatch(actions.setSubmitted('person'));
    }).catch((response) => {
      const errors = JSONAPI.prettify(response);
      Object.keys(errors).forEach(name =>
        dispatch(actions.setErrors(`person.${name}`, errors[name]))
      );
      dispatch(actions.setSubmitFailed('person'));
    });
  };
}

export function deletePerson(id, index) {
  return dispatch => fetch(`/api/v1/people/${id}`, { method: 'DELETE' })
    .then(() => dispatch(actions.remove('people', index)));
}
