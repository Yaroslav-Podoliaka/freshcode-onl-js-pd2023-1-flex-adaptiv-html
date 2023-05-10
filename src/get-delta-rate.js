/**
 * 
 * @param {number} ratePlayer 
 * @param {number} rateRival 
 * @returns {number} player rating after the match
 */
const ratingCalculation = (ratePlayer, rateRival) => {
  if (typeof ratePlayer !== 'number' || typeof rateRival !== 'number' || ratePlayer < 0 || rateRival < 0) {
    console.log('Enter wrong number');
  } else {
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
    if (ratePlayer === 0) {
      ratePlayer = rateRival;
      return ratePlayer;
    }
    if (ratePlayer < rateRival) {
      ratePlayer = ratePlayer + (rateRival - ratePlayer + 5) / 3;
      return ratePlayer;
    }
  }
}
console.log(ratingCalculation(25, 10));

