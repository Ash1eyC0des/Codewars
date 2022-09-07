function duplicateEncode(word){
  return word.toLowerCase()
    .split('')
    .map((letter, index, word) => word.indexOf(letter) === word.lastIndexOf(letter) ? '(' : ')')
    .join('')
}