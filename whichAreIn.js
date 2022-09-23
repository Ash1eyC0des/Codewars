function inArray(array1, array2) {
	return array1
		.filter((str1) => array2.some((str2) => str2.includes(str1)))
		.sort()
}
