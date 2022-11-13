function validParentheses(parens) {
	if (parens.length === 0) {
		return true
	}
	if (parens[0] !== '(' || parens[parens.length - 1] !== ')') {
		return false
	}

	let open = 0
	for (let i = 0; i < parens.length; i++) {
		if (parens[i] === '(') {
			open++
		} else {
			if (open > 0) {
				open--
			} else {
				return false
			}
		}
	}
	return !open
}
