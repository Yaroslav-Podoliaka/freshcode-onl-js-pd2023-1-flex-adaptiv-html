'use strict';
// let a = 20;
// a = a + 2;
// a += 1;
// a /= 2;
// a **= 2;
// a++;
// a--;
// ++a;
// --a;

// console.log(50 + ++a);

// let year = Number(prompt('Enter a year'));
// console.log(Number.isNaN(NaN));
// if (Number.isNaN(year) && year === 0) {
//   console.log('Enter number, please')
// } else {
//   if (year % 100 === 0) {
//     if (year % 400 === 0) {
//       console.log('This is leap year');
//     } else {
//       console.log('This is a not leap year');
//     }
// } else {
//   if (year % 4 === 0 && year > 4) {
//     console.log('This is leap year');
//   } else {
//     console.log('This is a not leap year');
//   }
// }
// }

// let b = 0;
// if (b || 10) {
//   console.log(true)
// } else {
//   console.log(false)
// }

// console.log(b && 10 && 'dvfgth');
// console.log(b || 20);
// console.log(b ?? 20);

// let year = Number(prompt('Enter a year'));
// console.log(Number.isNaN(NaN));

// let year = 1900;
// if (Number.isNaN(year) && year === 0) {
//   console.log('Enter number, please')
// } else {
//   if ((year % 100 === 0 && year % 400 === 0) && year % 4 === 0 && year > 4) {
//     console.log('This is leap year');
// } else {
//     console.log('This is a not leap year');
//   }
// }

// let count = 0;
// do {
//   console.log(count);
//   count++;
// }
// while (count < 10) {
  
// }

// for (let i = 0; i < 10; i++){
//   // console.log('counter = ' + i);
//   if (i === 5) continue;
//   console.log(`counter =  = ${i * 2}`);
// }

// for (let i = 1; i < 10; i++){
//   for (let j = 1; j < 10; j++){
//     console.log(`${i} * ${j} = ${i * j}`)
//   }
// }

// outer: for (let i = 1; i < 10; i++){
//   inner: for (let j = 1; j < 10; j++){
//     if (i === 3) continue outer;
//     if (j === 3) continue inner;
//     console.log(`${i} * ${j} = ${i * j}`)
//   }
// }

// let a = Number(prompt('Enter number'));
// let result = 0;
// if (Number.isNaN(a) || a > 0){
//   console.log('Enter wrong number');
// } else {
  
// for (let a = 0; a <= 100; a++){
//   result += a;
// }
// console.log(result)
// }

// let a = 0;
// for (; a <= 100; a++){
//   if (a % 3 === 0) {
//     console.log(a)
//   }
// }

let rad = 0.5 / 2;
let res = 0;
for (let i = 0; i < 12; i++){
  let v = 4 / 3 * Math.PI * rad ** 3
  rad += + 0.01;
  res += v;
}
console.log(res);

