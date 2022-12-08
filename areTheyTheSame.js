function comp(a, b) {
	if (!a || !b || a.length !== b.length) {
		return false
	}

	let counter1 = {}
	let counter2 = {}

	for (let num of a) {
		counter1[num] = (counter1[num] || 0) + 1
	}

	for (let num of b) {
		counter2[num] = (counter2[num] || 0) + 1
	}

	for (let key in counter1) {
		if (!(key ** 2 in counter2) || counter2[key ** 2] !== counter1[key]) {
			return false
		}
	}
	return true
}
