'use strict';
function searchFactorial(position) {
  if (position > 1) {
    return position * (searchFactorial(position - 1));
  }
  return 1;
}
console.log(searchFactorial(4));
