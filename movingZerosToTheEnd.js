function moveZeros(arr) {
	const zeros = arr.filter((e) => e === 0)
	const notZeros = arr.filter((e) => e !== 0)
	return notZeros.concat(zeros)
}
