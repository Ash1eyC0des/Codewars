function digitalRoot(n) {
	do {
		n = n
			.toString()
			.split('')
			.reduce((a, c) => a + +c, 0)
	} while (n > 9)
	return n
}
