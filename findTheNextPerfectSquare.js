function findNextSquare(sq) {
    if (!Number.isInteger(Math.sqrt(sq))){
      return -1
    } else {
      let i = sq
      do {
        i++
      } while (!Number.isInteger(Math.sqrt(i)))
      console.log(i)
      return i;
    }
  }