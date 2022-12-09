function findMissingLetter(array) {
	let charCode = array[0].charCodeAt(0)

	for (let i = 1; i < array.length; i++) {
		charCode++
		if (array[i].charCodeAt(0) !== charCode) {
			return String.fromCharCode(charCode)
		}
	}
}
