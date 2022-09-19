function high(x){
  const scores = x.split(' ').map(word => [...word].reduce((a, b) => a + b.charCodeAt(0) - 96, 0))
  const highScore = Math.max(...scores)
  return x.split(' ')[scores.indexOf(highScore)]
 }