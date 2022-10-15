function solution(digits) {
	let greatest = 0
	for (let i = 0; i < digits.length - 4; i++) {
		const num1 = digits.slice(i, i + 5)
		greatest = num1 > greatest ? +num1 : greatest
	}
	return greatest
}
