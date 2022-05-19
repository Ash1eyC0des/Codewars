function points(games) {
    let total = 0
    games.forEach((game, index) => {
      if(game[0] > game[2]) {
        total += 3
      } else if(game[0] < game[2]) {
        total += 0
      } else {
        total += 1
      }   
    })
    return total
  }