function isPangram(string) {
	string = string.toLowerCase()
	return [...'abcdefghijklmnopqrstuvwxyz'].every((letter) =>
		string.includes(letter)
	)
}
