const reverse = function (array) {
	return array.reduce((a, b) => [b, ...a], [])
}
