'use strict';
function myReduceRight(arr, callback, startValue) {
  let result;
  if (startValue) {
    result = startValue;
    for (let i = arr.length; i > 0 ; i--){
      result = callback(result, arr[i], i, arr);
  }
  }  else {
    result = arr[arr.length - 1];
    for (let i = arr.length - 1; i > 0; i--){
      result = callback(result, arr[i - 1], i, arr);
  }
  }
  return result;
}
const arrArr2 = [
  [0, 1],
  [2, 3],
  [4, 5],
];
console.log(myReduceRight(arrArr2, (a, b) => a.concat(b)));