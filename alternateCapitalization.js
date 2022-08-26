function capitalize(s){
  const even = s.split('').map((e, i) => i % 2 === 0 ? e.toUpperCase(): e)
  const odd = s.split('').map((e, i) => i % 2 !== 0 ? e.toUpperCase(): e)
  return [even.join(''), odd.join('')]
}