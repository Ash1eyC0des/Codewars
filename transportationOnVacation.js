function rentalCarCost(d) {
    const subtotal = d * 40
    if(d >= 7) {
      return subtotal - 50
    } else if (d >= 3) {
      return subtotal - 20
    } else {
      return subtotal
    }
  }