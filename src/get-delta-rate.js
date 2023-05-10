const ratingCalculation = (ratePlayer, rateRival) => {
  let result = 0;
  if (ratePlayer >= rateRival) {
    if (ratePlayer - rateRival <= 2) {
      return ratePlayer + 2;
    }
    if (ratePlayer - rateRival > 2 && ratePlayer - rateRival < 20) {
      return ratePlayer + 1;
    }
    else {
      return ratePlayer;
    }
  }
  if (rateRival > ratePlayer) {
    ratePlayer = + (rateRival - ratePlayer + 5) / 3;
    return ratePlayer;
  }
  if (ratePlayer === 0) {
    ratePlayer === rateRival;
    return ratePlayer;
  }
  
}
console.log(ratingCalculation(1, 16));