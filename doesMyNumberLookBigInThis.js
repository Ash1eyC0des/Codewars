function narcissistic(value) {
	value = value.toString()
	const digits = value.length
	let result = 0
	for (let i = 0; i < digits; i++) {
		result += value[i] ** digits
	}
	return result == value
}
