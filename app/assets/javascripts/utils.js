export function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function age(birthday) {
  const ageDifMs = Date.now() - Date.parse(birthday);
  const ageDate = new Date(ageDifMs);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

export function validationState(props, modelName) {
  const model = (modelName || props.model).split('.');
  const form = props[`${model[0]}Form`];
  const field = form[`${model[1]}`];
  return field && field.errors && field.errors.length ? 'error' : null;
}
