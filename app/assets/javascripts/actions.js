import { actions } from 'react-redux-form';
import { push } from 'react-router-redux';
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

      dispatch(push(`/households/${response.data.id}/people`));
    }).catch((response) => {
      const errors = JSONAPI.prettify(response);
      Object.keys(errors).forEach(name =>
        dispatch(actions.setErrors(`household.${name}`, errors[name]))
      );
      dispatch(actions.setSubmitFailed('household'));
    });
  };
}

export function deleteHousehold(id, index) {
  return dispatch => fetch(`/api/v1/households/${id}`, { method: 'DELETE' })
    .then(() => dispatch(actions.remove('households', index)));
}
