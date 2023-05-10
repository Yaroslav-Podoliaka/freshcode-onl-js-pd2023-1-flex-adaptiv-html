/**
 * 
 * @param {number} sonAge 
 * @param {number} fatherAge 
 * @returns {number} year when father was/will be twofild older than son
 */
const ageTwoFold = (sonAge, fatherAge) => {
  let result = 0;
  if (fatherAge - sonAge < 15 || sonAge < 0) {
    return 'You entered wrong information';
  }
  if (fatherAge / sonAge === 2) {
    // эту проверку можно не делать, т.к. в следующем условии всего два действия 
    return result;
    }
  if (fatherAge - sonAge >= sonAge) {
    result = fatherAge - 2 * sonAge;
    return result;
  } else {
    result = sonAge * 2 - fatherAge;
    return result;
  }
}
console.log(ageTwoFold(30, 58));