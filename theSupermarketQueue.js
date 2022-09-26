function queueTime(customers, n) {
	const tills = new Array(n).fill(0)
	customers.forEach((customer) => {
		const nextTill = tills.indexOf(Math.min(...tills))
		tills[nextTill] += customer
	})
	return Math.max(...tills)
}
