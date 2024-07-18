function titleValidation(title) {
  let validationsTitle = /^[a-z][0-9]+$/i;
  if (title.match(validationsTitle)) {
    return true;
  }
  return false;
}

function descriptionValidation(description) {
  let validationsDescription = /^[a-z][0-9]+$/i;
  if (description.match(validationsDescription)) {
    return true;
  }
  return false;
}
export default {
  titleValidation,
  descriptionValidation,
};
