function wave(str) {
	let result = []
	if (!str) {
		return result
	}
	for (let i = 0; i < str.length; i++) {
		let wordArr = str.split('')
		if (wordArr[i] === ' ') {
			continue
		}
		result.push(
			wordArr
				.map((char, ind) => (ind === i ? char.toUpperCase() : char))
				.join('')
		)
	}
	return result
}
