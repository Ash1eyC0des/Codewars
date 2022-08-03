function factorial(n) {
  if (n < 0 || n > 12) {
    throw new RangeError()
  } else if (n < 2) {
    return 1
  } else {
    let product = 1;
    for(let i = 1; i <= n; i++) {
      product *= i
    }
    return product
    }
}