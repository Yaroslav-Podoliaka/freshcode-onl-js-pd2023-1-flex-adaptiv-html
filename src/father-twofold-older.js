/**
 * 
 * @param {number} sonAge 
 * @param {number} fatherAge 
 * @returns {number} year when father was/will be twofild older than son
 */
const ageTwoFold = (sonAge, fatherAge) => {
  let result = 0;
  if (fatherAge - sonAge < 15 || sonAge <= 0) {
    return 'You entered wrong information';
  }
  for (let i = 0; i < fatherAge - sonAge; i++){
    if (fatherAge / sonAge === 2) {
    return result;
    }
    sonAge++;
    fatherAge++;
    result++
  }
}
console.log(ageTwoFold(1, 16));