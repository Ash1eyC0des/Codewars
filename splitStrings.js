function solution(str) {
	if (str.length % 2) {
		str = `${str}_`
	}
	return str.match(/.{2}/g) || []
}
