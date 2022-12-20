function twoSum(numbers, target) {
	const cache = {}
	for (let i = 0; i < numbers.length; i++) {
		const difference = target - numbers[i]
		if (cache[difference]) {
			return [numbers.indexOf(difference), i]
		}
		cache[numbers[i]] = cache[numbers[i]] + 1 || 1
	}
}
