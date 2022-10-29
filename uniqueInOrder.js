let uniqueInOrder = function (iterable) {
	return [...iterable].filter((e, i, arr) => arr[i + 1] !== e)
}
