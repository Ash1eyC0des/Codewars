function rowWeights(array){
  const team1 = array.filter((e, i) => i % 2 === 0).reduce((a, b) => a + b)
  const team2 = array.length > 1 ? array.filter((e, i) => i % 2).reduce((a, b) => a + b) : 0
  return [team1, team2]
}