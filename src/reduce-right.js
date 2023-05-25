"use strict";
function myReduceRight(arr, callback, startValue) {
  let result;
  let index;
  if (startValue) {
    result = startValue;
    index = arr.length - 1;
  } else {
    result = arr[arr.length - 1];
    index = arr.length - 2;
  }
  for (; index >= 0; index--) {
    result = callback(result, arr[index], index, arr);
  }
  return result;
}
const arrArr1 = [
  [0, 1],
  [2, 3],
  [4, 5],
];
console.log(myReduceRight(arrArr1, (a, b) => a.concat(b), []));
