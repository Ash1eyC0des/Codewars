function XO(str) {
    const arr = str.toLowerCase().split('')
    return arr.filter(e => e === 'x').length === arr.filter(e => e === 'o').length
}