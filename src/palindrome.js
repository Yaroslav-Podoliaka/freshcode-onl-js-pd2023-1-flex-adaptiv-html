'use strict';
const str3 = 'aBcbA'
function wordPalindrome(str) {
  let separator = '';
  return str.toUpperCase() === str.toUpperCase().split(separator).reverse().join(separator);
}
console.log(wordPalindrome(str3));


