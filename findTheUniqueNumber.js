function findUniq(arr) {
	return arr.find((num) => arr.indexOf(num) === arr.lastIndexOf(num))
}
