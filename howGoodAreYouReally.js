function betterThanAverage(classPoints, yourPoints) {
    const average = classPoints.reduce((a,b) => a+b) / classPoints.length;
    return average < yourPoints
  }