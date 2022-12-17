function deleteNth(arr, n) {
	let map = {}
	return arr.filter((num) => (map[num] = map[num] + 1 || 1) <= n)
}
