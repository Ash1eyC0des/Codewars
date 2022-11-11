function humanReadable(seconds) {
	const hours = Math.floor(seconds / 3600)
	seconds -= hours * 3600
	const minutes = Math.floor(seconds / 60)
	seconds -= minutes * 60
	return `${hours.toString().padStart(2, '0')}:${minutes
		.toString()
		.padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
}
