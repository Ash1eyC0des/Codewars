function printerError(s) {
    const errors = 'nopqrstuvwxyz'
    const iterator = errors[Symbol.iterator]()
    let char = iterator.next()
    let numErrors = 0

    while (!char.done) {
      let numChar = s.split(char.value).length - 1
      numErrors += numChar
      char = iterator.next()
    }
  return `${numErrors}/${s.length}`
}