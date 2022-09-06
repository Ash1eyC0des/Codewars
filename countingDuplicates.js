function duplicateCount(text){
  let chars = text.toLowerCase().split('')
  let dups = []
  for(let i = 0; i <= chars.length; i++) {
    if (chars.indexOf(chars[i]) != chars.lastIndexOf(chars[i])) {
      if (dups.indexOf(chars[i]) == -1) {
        dups.push(chars[i])
      } 
    }
  }
  return dups.length
}