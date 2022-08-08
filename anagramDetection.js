const isAnagram = function(test, original) {
  test = [...test.toLowerCase()].sort().join()
  original = [...original.toLowerCase()].sort().join()
  return test === original
  }