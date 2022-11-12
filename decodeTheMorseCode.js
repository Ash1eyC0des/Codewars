decodeMorse = function (morseCode) {
	return morseCode
		.split(' ')
		.map((e) => (e === '' ? ' ' : MORSE_CODE[e]))
		.join('')
		.trim()
		.replace(/\s+/g, ' ')
}
