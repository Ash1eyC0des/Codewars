function DNAStrand(dna){
    let string = ''
    for(let i = 0; i <= dna.length; i++) {
      switch (dna[i]) {
          case 'A':
            string += 'T'
            break
          case 'T':
            string += 'A'
            break
          case 'C':
            string += 'G'
            break
          case 'G':
            string += 'C'
            break
          default:
            break
      }
    }
        return string
  }