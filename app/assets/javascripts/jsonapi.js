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

function prettify(json) {
  if (Array.isArray(json)) {
    return json.map(resource);
  } else if ('errors' in json) {
    return errors(json);
  }

  return resource(json);
}

function prepare(type, attributes) {
  return JSON.stringify({
    data: { type, attributes },
  });
}

function request(path, options) {
  return fetch(path, Object.assign({
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

export default { prettify, prepare, request };
