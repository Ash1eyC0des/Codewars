function getSum( a,b ) {
    let low = Math.min(a, b)
    let high = Math.max(a, b)
    let sum = 0
    for (let i = low; i <= high; i++) {
      sum += i
    }
    return sum
 }