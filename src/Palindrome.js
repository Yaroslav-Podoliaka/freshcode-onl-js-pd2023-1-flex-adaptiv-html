'use strict';
const str3 = 'ABcba'
function palindrome(str) {
  let separator = '';
  let array_1 = str.toUpperCase().split(separator);
  let array_2 = str.toUpperCase().split(separator).reverse();
  for (let i = 0; i < array_1.length; i++){
    if (array_1[i] !== array_2[i]) {
      return false;
    }
  }
  return true;
}
console.log(palindrome(str3));