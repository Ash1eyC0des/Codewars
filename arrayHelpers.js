Array.prototype.square = function () {
	return this.map((num) => num ** 2)
}
Array.prototype.cube = function () {
	return this.map((num) => num ** 3)
}
Array.prototype.sum = function () {
	return this.reduce((a, b) => a + b, 0)
}
Array.prototype.average = function () {
	return this.sum() / this.length
}
Array.prototype.even = function () {
	return this.filter((num) => num % 2 === 0)
}
Array.prototype.odd = function () {
	return this.filter((num) => num % 2 !== 0)
}
