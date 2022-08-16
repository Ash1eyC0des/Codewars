function sumDigits(number) {
  const digits = Math.abs(number).toString().split('')
  return digits.reduce((a, b) => +a + +b, 0)
}