function findOutlier(integers) {
	let odds = integers.filter((n) => n % 2)
	return odds.length === 1 ? odds[0] : integers.filter((n) => !(n % 2))[0]
}
