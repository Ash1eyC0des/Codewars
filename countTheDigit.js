function nbDig(n, d) {
  let squares = []  
  for (let i = 0; i <= n; i++) {
    squares.push(i ** 2)
  }
  const digits = squares.join('').split('').map(Number)
  return digits.filter(x => x === d).length
}