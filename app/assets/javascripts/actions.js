import { create, destroy } from './jsonapi';

export function previousStep() {
  return dispatch => dispatch({ type: 'PREVIOUS_STEP' });
}

export function nextStep() {
  return dispatch => dispatch({ type: 'NEXT_STEP' });
}

export function createHousehold(attributes) {
  return create({
    model: 'household',
    collection: 'households',
    attributes,
    after: dispatch => dispatch({ type: 'CHANGE_STEP', step: 2 }),
  });
}

export function createPerson(attributes) {
  return create({
    model: 'person',
    collection: 'people',
    attributes,
  });
}

export function createVehicle(attributes) {
  return create({
    model: 'vehicle',
    collection: 'vehicles',
    attributes,
    reset: true,
  });
}

export function deleteVehicle(id, index) {
  return destroy({ collection: 'vehicles', id, index });
}

export function deletePerson(id, index) {
  return destroy({ collection: 'people', id, index });
}
