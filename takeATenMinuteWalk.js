function isValidWalk(walk) {
  if (walk.length != 10) {
    return false
  } else {
    let ns = 0
    let ew = 0
    walk.forEach(dir => {
      dir === 'n' ? ns += 1
      : dir === 's' ? ns -= 1
      : dir === 'e' ? ew += 1
      : dir === 'w' ? ew -= 1
      : ''
    })
    return ns === 0 && ew === 0
  }   
}