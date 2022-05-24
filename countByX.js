function countBy(x, n) {
    let z = new Array(n).fill(x, 0).map((e, i) => e * (i + 1))
    return z;
  }