function solve(s) {
	const lower = s
		.split('')
		.filter((letter) => letter === letter.toLowerCase()).length
	const upper = s.length - lower
	return lower >= upper ? s.toLowerCase() : s.toUpperCase()
}
