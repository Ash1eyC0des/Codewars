function count(string) {
	let count = {}
	string.split('').forEach((letter) => {
		count[letter] ? count[letter]++ : (count[letter] = 1)
	})
	return count
}
