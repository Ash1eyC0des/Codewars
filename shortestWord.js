function findShort(s) {
    let words = s.split(' ')
    words.sort((a, b) => a.length - b.length)
    return words[0].length
}