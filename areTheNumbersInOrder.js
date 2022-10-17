function inAscOrder(arr) {
	return arr.every((num, i) => !i || num > arr[i - 1])
}
