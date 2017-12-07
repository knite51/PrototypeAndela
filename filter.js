export const arrString = ((inputArray) => {
  if (Array.isArray(inputArray)) {
    const filteredArray = inputArray.filter((item) => {
      return (typeof item === 'string') && item;
    });
    return filteredArray;
  }
  return 'Argument is not an Array';
});

export function arr() {
  return 'Ayo';
}
