var number = function(busStops){
    return busStops.reduce((a, b) => a + (b[0] - b[1]), 0)
  }