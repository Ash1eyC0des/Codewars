var capitals = function (word) {
  let capitalIndexes = []
  for(let i = 0; i < word.length; i++) {
    if (word.charAt(i) === word.charAt(i).toUpperCase()) {
      capitalIndexes.push(i)
    }
  }
  return capitalIndexes
};