function reverseWords(str) {
  const reversed = str.split(' ').map(word => word.split('').reverse().join(''))
  return reversed.join(' ')
}