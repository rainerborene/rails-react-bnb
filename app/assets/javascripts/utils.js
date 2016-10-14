export function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function age(birthday) {
  const ageDifMs = Date.now() - Date.parse(birthday);
  const ageDate = new Date(ageDifMs);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}
