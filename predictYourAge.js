function predictAge(age1, age2, age3, age4, age5, age6, age7, age8) {
	const ages = [age1, age2, age3, age4, age5, age6, age7, age8]
		.map((n) => n ** 2)
		.reduce((a, c) => a + c, 0)
	return Math.floor(Math.sqrt(ages) / 2)
}
