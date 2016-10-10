export function deleteHousehold(id) {
  return function (dispatch) {
    return fetch(`/api/v1/households/${id}`, { method: 'DELETE' }).then(
      () => dispatch({ type: 'DELETE_HOUSEHOLD', id })
    );
  };
}
