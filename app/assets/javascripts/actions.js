import { actions } from 'react-redux-form';

export const CREATED_HOUSEHOLD = 'CREATED_HOUSEHOLD';
export const DELETE_HOUSEHOLD = 'DELETE_HOUSEHOLD';

function parseErrors(response) {
  const errors = {};

  response.errors.forEach((error) => {
    const field = error.source.pointer.split('/')[3];
    errors[field] = error.title;
  });

  return errors;
}

function request(path, options) {
  return fetch(`/api/v1/${path}`, Object.assign({
    headers: {
      Accept: 'application/vnd.api+json',
      'Content-Type': 'application/vnd.api+json',
    },
  }, options)).then((response) => {
    const json = response.json();
    if (response.status >= 200 && response.status < 300) {
      return json;
    }
    return json.then(Promise.reject.bind(Promise));
  });
}

export function createHousehold(attributes) {
  return (dispatch) => {
    dispatch(actions.resetValidity('household'));

    return request('households', {
      method: 'POST',
      body: JSON.stringify({
        data: { type: 'households', attributes },
      }),
    }).then((response) => {
      const model = Object.assign({}, attributes, { id: response.data.id });
      dispatch(actions.reset('household'));
      dispatch({ type: CREATED_HOUSEHOLD, attributes: model });
    }).catch((response) => {
      const errors = parseErrors(response);
      Object.keys(errors).forEach(name =>
        dispatch(actions.setErrors(`household.${name}`, errors[name]))
      );
    });
  };
}

export function deleteHousehold(id) {
  return dispatch => fetch(`/api/v1/households/${id}`, { method: 'DELETE' })
    .then(() => dispatch({ type: DELETE_HOUSEHOLD, id }));
}
