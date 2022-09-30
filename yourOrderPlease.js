function order(words) {
	const wordsArr = words.split(' ')
	const result = []
	for (let i = 1; i <= wordsArr.length; i++) {
		const word = wordsArr.find((e) => e.includes(i))
		result.push(word)
	}
	return result.join(' ')
}
