'use strict';
// console.log(Math.abs(-20));
// console.log(Math.ceil(20.005));
// console.log(Math.floor(20.995));
// console.log(Math.round(20.455));
// console.log(Math.max(20.45, 15, 100, 125,37));
// console.log(Math.max());
// console.log(Math.min(20.45, 15, 100, 125,37));
// console.log(Math.min());
// console.log(Math.pow(2, 5));
// console.log(2 ** 5);
// console.log(Math.random());
// function getRandom(min, max) {
//   return (Math.random(min, max) * (max - min) + min);
//   // return (Math.round(Math.random(min, max) * (max - min) + min));
// }
// console.log(getRandom(10, 100));

// console.log(new Date());
// console.log(new Date().toDateString());
// console.log(new Date().toLocaleDateString());
// console.log(Date.now());
// console.log(Date.parse('1985-11-05'));

// console.log(Number('12'));
// console.log(Date.now());
// console.log(Date.now().toExponential());
// console.log(Date.now().toExponential(2));
// let numb = 30.25684514522265;
// console.log(numb.toPrecision(5));
// let numb1 = 312540.25684514522265;
// console.log(numb1.toPrecision(5));

let sams = 'Samsung Galaxy';
let xiomi = 'Mi Pro 11T';
let together = sams.concat(' ', xiomi, ' Nokia');
let sliseStr = together.slice(5, -10);
let url = 'https://classroom.google.com/c/NjAwODU3MDc3Nzgz';
let arrStr = together.split('', 20);
let subStr = together.substring(3, 10);
let samsGap = '  Samsung Galaxy  ';
console.log(sams.length);
console.log(sams[2]);
console.log(sams.charAt(2));
console.log(sams.charCodeAt(2));
console.log(sams.concat(' ', xiomi, ' Nokia'));
console.log(sams + ' ' + xiomi + ' Nokia');
console.log(together.includes('Nokia'));
console.log(together.includes('Nokia', 30));
console.log(together.indexOf('o'));
console.log(together.lastIndexOf('o'));
console.log(sams.repeat(3));
console.log(sliseStr);
console.log(url.slice(url.indexOf('/') + 2, url.lastIndexOf('/')));
console.log(arrStr);
console.log(subStr);
console.log(together.toUpperCase());
console.log(together.toLocaleLowerCase());
console.log(samsGap);
console.log(samsGap.trim());

const arr1 = ['0', '1', '2'];
const arr1_1 = [10, 20];
const arr1_2 = [10];
console.log(arr1);
console.log(arr1_1);
console.log(arr1_2);
const arr2 = new Array(10, 20);
const arr2_1 = new Array(10);
console.log(arr2);
console.log(arr2_1);
// const obj = {
//   0: '0',
//   1: '1',
//   2: '2',
// }
// console.log(obj);
arr1[0] = 10;
console.log(arr1[0]);
console.log(arr1);
// delete arr1[1];
console.log(arr1);
const fruits = ['Apple', 'Orange', 'Pear', 'Peach', 'Pineaple', 'Plum']
fruits[6] = 'Cherry';
console.log(fruits);
console.log(fruits.push('Lemon', 'Banana', 'Strawberry'));
console.log(fruits);
console.log(fruits.pop());
console.log(fruits);
console.log(fruits.shift());
console.log(fruits);
console.log(fruits.unshift('Apple', 'Pineaple', 'Melon'));
console.log(fruits);
console.log(fruits.at(-1));
console.log(fruits[fruits.length - 1]);
console.log(fruits.at(-3));
console.log(fruits.concat(arr1, ['Dhs', 'TSP']));
const concatArr = fruits.concat(arr1, ['Dhs', 'TSP']);
console.log(concatArr);
const arr3 = Array(10);
console.log(arr3);
console.log(arr3.fill('Donic', '2', '6'));
const arr4 = [1, [2, 3], 4, [5, 6, [7, 8, [9, 10]]]];
console.log(arr4.flat(Math.min));
console.log(arr4.flat(Infinity));
console.log(fruits.includes('Lemon'));
console.log(fruits.indexOf('Lemon'));
console.log(Array.isArray({fruits}));
console.log(concatArr instanceof Array);
console.log(concatArr instanceof Object);
console.log(concatArr.join(' '));
console.log(arr4.join(' '));
console.log(arr1.reverse());
console.log(arr1);
console.log(concatArr.slice(9));
console.log(fruits.sort());
console.log(arr1.sort());
console.log(arr1.sort((a, b) => a - b));
console.log(arr1.sort((a, b) => b - a));
console.log(concatArr.splice(11, 0, 'Watermelon'));
console.log(concatArr);

const str1 = 'Watermelon';
const str2 = 'Kyev City';
const revStr = (str, separator) => str.split(separator).reverse().join(separator);
// const revStr = (str1, separator) => str1.split(separator).reverse().join(separator);
console.log(revStr(str1, ''));
console.log(revStr(str2, ' '));

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

