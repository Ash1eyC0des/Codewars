function accum(s) {
    const arr = s.toUpperCase().split('').map((e, i) => mumble(e, i))
      
    function mumble (letter, index) {
      let letters = letter.toUpperCase()
      
      for(let i = 1; i <= index; i++) {
        letters += letter.toLowerCase()
      }
      
      return letters 
    }
    
    return arr.join('-')
  }