function correct(string) {
  return [...string].map(c => c == '0' ? 'O' : c == 1 ? 'I' : c == 5 ? 'S' : c).join('')
}