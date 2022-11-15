function isPrime(num) {
	if (num <= 1 || (num !== 2 && !(num % 2)) || (num !== 3 && !(num % 3)))
		return false
	for (var i = 5; i <= Math.sqrt(num); i += 6) {
		if (!(num % i) || !(num % (i + 2))) return false
	}
	return true
}
