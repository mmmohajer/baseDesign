function allowedKeys(sourceObject, keys) {
  const newObject = {};
  keys.forEach((key) => {
    if (!!sourceObject[key]) {
      newObject[key] = sourceObject[key];
    }
  });
  return newObject;
}
export default allowedKeys;
