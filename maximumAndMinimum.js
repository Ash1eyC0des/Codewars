function max(...args) {
	if (!args.length) return 0
	const flat = [...args]
		.flat(Infinity)
		.map((n) => Number(n))
		.sort((a, b) => a - b)
	return !flat.length ? 0 : flat.includes(NaN) ? NaN : flat[flat.length - 1]
}

function min(...args) {
	if (!args.length) return 0
	const flat = [...args]
		.flat(Infinity)
		.map((n) => Number(n))
		.sort((a, b) => a - b)
	return !flat.length ? 0 : flat.includes(NaN) ? NaN : flat[0]
}
