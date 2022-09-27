multiplicationTable = function (size) {
	let outerArray = new Array(size).fill(new Array(size).fill(0))
	let result = outerArray.map((innerArray, index) => {
		return innerArray.map((num, i) => (num = (index + 1) * (i + 1)))
	})
	return result
}
