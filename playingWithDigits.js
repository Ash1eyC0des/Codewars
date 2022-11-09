function digPow(n, p) {
	const pow = n
		.toString()
		.split('')
		.reduce((a, c, i) => a + c ** (p + i), 0)
	return pow % n ? -1 : pow / n
}
