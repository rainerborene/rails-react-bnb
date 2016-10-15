import { actions } from 'react-redux-form';

function resource(json) {
  return { id: json.data.id, ...json.data.attributes };
}

function errors(json) {
  const output = {};

  json.errors.forEach((error) => {
    const field = error.source.pointer.split('/')[3];
    output[field] = error.title;
  });

  return output;
}

function prepare(type, attributes) {
  return JSON.stringify({
    data: { type, attributes },
  });
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

export function prettify(json) {
  if (Array.isArray(json)) {
    return json.map(resource);
  } else if ('errors' in json) {
    return errors(json);
  }

  return resource(json);
}

export function create({ model, collection, attributes, reset, after }) {
  return (dispatch) => {
    dispatch(actions.setPending(model, true));
    dispatch(actions.resetValidity(model));

    return request(collection, {
      method: 'POST',
      body: prepare(collection, attributes),
    }).then((response) => {
      const record = Object.assign({ id: response.data.id }, response.data.attributes);

      dispatch(actions.push(collection, record));
      dispatch(actions.load(model, record));
      dispatch(actions.setSubmitted(model));

      if (reset) dispatch(actions.reset(model));
      if (after) after(dispatch);
    }).catch((response) => {
      const errorMessages = prettify(response);
      Object.keys(errorMessages).forEach(name =>
        dispatch(actions.setErrors(`${model}.${name}`, errorMessages[name]))
      );
      dispatch(actions.setSubmitFailed(model));
    });
  };
}

export function destroy({ collection, id, index }) {
  return dispatch => fetch(`/api/v1/${collection}/${id}`, { method: 'DELETE' })
    .then(() => dispatch(actions.remove(collection, index)));
}
