function longestConsec(arr, k) {
	if (k < 1 || k > arr.length) return ''

	let longest = ''

	if (k === 1) {
		for (let str of arr) {
			if (str.length > longest.length) {
				longest = str
			}
		}
	}

	for (let i = k; i < arr.length + 1; i++) {
		const joined = arr.slice(i - k, i).join('')
		if (joined.length > longest.length) {
			longest = joined
		}
	}
	return longest
}
