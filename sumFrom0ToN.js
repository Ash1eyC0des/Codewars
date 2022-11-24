var SequenceSum = (function () {
	function SequenceSum() {}

	SequenceSum.showSequence = function (count) {
		if (count < 0) return `${count}<0`
		if (count === 0) return '0=0'

		const arr = []

		for (let i = 0; i <= count; i++) {
			arr.push(i)
		}

		return `${arr.join('+')} = ${arr.reduce((a, c) => a + c, 0)}`
	}

	return SequenceSum
})()
