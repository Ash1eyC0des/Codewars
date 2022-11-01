function stringTransformer(str) {
	const reversedString = str.split(' ').reverse().join(' ')
	return reversedString
		.split('')
		.map((letter) =>
			letter === letter.toLowerCase()
				? letter.toUpperCase()
				: letter.toLowerCase()
		)
		.join('')
}
