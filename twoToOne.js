function longest(s1, s2) {
    const arr = s1.concat(s2).split('').sort()
    return [...new Set(arr)].join('')
  }