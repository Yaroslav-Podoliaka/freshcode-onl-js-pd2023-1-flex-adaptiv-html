'use strict';
function gettingNumber(number) {
  function find(current, tmpNumber) {
    if (current === number) {
      return tmpNumber;
    } else {
      return (
        find(current + 5, `(${tmpNumber} + 5)`) ||
        find(current * 3, `(${tmpNumber} * 3)`) ||
        find(current * 5, `(${tmpNumber} * 5)`) ||
        find(current + 3, `(${tmpNumber} + 3)`)
      );
    }
  }
  return find(1, '1');
}
console.log(gettingNumber(14));

