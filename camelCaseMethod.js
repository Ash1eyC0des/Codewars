String.prototype.camelCase = function () {
	if (this.length === 0) return ''
	return this.trim()
		.split(' ')
		.map((e) => e[0].toUpperCase() + e.slice(1))
		.join('')
}
