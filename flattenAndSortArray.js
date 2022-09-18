function flattenAndSort(array) {
  const flatAndSorted = array.flat().sort((a, b) => a - b)
  return flatAndSorted;
}