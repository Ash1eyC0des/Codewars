function nbYear(p0, percent, aug, p) {
    const rate = percent / 100
    let years = 0
    
    while (p0 < p) {
      p0 = Math.floor(p0 + (p0 * rate) + aug)
      years++
    }
  
    return years
}