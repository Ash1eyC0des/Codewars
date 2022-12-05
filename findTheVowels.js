function vowelIndices(word) {
	word = word.toLowerCase()
	const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'y'])
	const result = []
	for (let i = 0; i < word.length; i++) {
		if (vowels.has(word[i])) result.push(i + 1)
	}
	return result
}
