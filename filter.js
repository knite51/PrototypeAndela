/* eslint-disable no-console */
const arrString = ((inputArray) => {
  if (Array.isArray(inputArray)) {
    const filteredArray = inputArray.filter((item) => {
      if (typeof item === 'string') {
        return item;
      }
    });
    return filteredArray;
  }
  return 'Argument is not an Array';
});
