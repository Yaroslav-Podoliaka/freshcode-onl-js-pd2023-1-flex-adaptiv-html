/**
 * 
 * @param {number} ratePlayer 
 * @param {number} rateRival 
 * @returns {number} player rating after the match
 */
const ratingCalculation = (ratePlayer, rateRival) => {
  let deltaRate = ratePlayer - rateRival;
  if (
    Number.isNaN(deltaRate) ||
    typeof ratePlayer !== 'number' ||
    typeof rateRival !== 'number' ||
    ratePlayer < 0 || rateRival < 0
  ) {
    return 'Enter wrong rate';
  } 
  if (ratePlayer === 0) {
      return rateRival;
    }
  if (deltaRate <= 2) {
      return ratePlayer + 2;
    }
  if (deltaRate > 2 && deltaRate < 20) {
      return ratePlayer + 1;
    }
  if (deltaRate >= 20) {
    return ratePlayer;
  }
  if (ratePlayer < rateRival) {
      return ratePlayer + Math.round((Math.abs(deltaRate) + 5) / 3);
    }
  
}
console.log(ratingCalculation(15, 10));

