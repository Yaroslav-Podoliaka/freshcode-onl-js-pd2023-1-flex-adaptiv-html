'use strict';
// let a = '20.2b';
// console.log(a);
// console.log(Number(a));
// console.log(typeof Number(a));
// let hi = 'Hi everybody';
// alert(hi);
// let res = confirm('Hi everybody');
// console.log(res);
// let res2 = prompt('Hi everybody');
// console.log(res2);
// console.log(typeof res2);
// let passangerNumber = 4;
// let wegh = 200;
// if (passangerNumber <= 4) {
//   console.log('go');
// }
let variant = 1 / 0;
let result = typeof variant;
//console.log(result);
switch (result) {
  case 'string':
    console.log(`${variant} is a string`);
    break;
  case 'number':
    console.log(`${variant} is a number`);
    break;
  case 'bidint':
    console.log(`${variant} is a bigint`);
    break;
  case 'boolean':
    console.log(`${variant} is a boolean`);
    break;
  case 'function':
    console.log(`${variant} is a function`);
    break;
  case 'object':
    console.log(`${variant} is a object`);
    break;
  case 'undefined':
    console.log(`${variant} is a undefined`);
    break;
  default:
    console.log(`${variant} is I don't know what`);
}
