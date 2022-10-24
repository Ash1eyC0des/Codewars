function evaporator(content, evap_per_day, threshold) {
	let remainingContent = content
	let days = 0
	while (remainingContent / content >= threshold / 100) {
		remainingContent -= remainingContent * (evap_per_day / 100)
		days++
	}
	return days
}
