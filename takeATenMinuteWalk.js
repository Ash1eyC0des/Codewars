function isValidWalk(walk) {
  if (walk.length != 10) {
    return false
  } else {
    let ns = 0
    let ew = 0
    walk.forEach(dir => {
      switch (dir) {
        case 'n': ns++; break
        case 's': ns--; break
        case 'e': ew++; break
        case 'w': ew--; break
      }
    })
    return ns === 0 && ew === 0
  }   
}