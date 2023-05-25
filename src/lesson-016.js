'use strict';
// function Player(fistName, lastName, foreHand, backHand, age, rate, city){
//   this.fistName = fistName;
//   this.lastName = lastName;
//   this.foreHand = foreHand;
//   this.backHand = backHand;
//   this.age = age;
//   this.rate = rate;
//   this.city = city;
// }
// const maLong = new Player(
//   'Ma',
//   'Long',
//   'Butterfly Tenergy 19',
//   'Donic Acuda S1',
//   35,
//   40,
//   'Dnipro'
// );
// const xuXin = new Player(
//   'Xu',
//   'Xin',
//   'Butterfly Tenergy 05',
//   'Stiga Calibra',
//   30,
//   38,
//   'Kiev'
// );
// const kokiNiva = new Player(
//   'Koki',
//   'Niva',
//   'DHS Huricane',
//   'TSP',
//   25,
//   35,
//   'Odessa'
// );
// const players = [maLong, xuXin, kokiNiva];
// function getProbs(limAge) {
//   if (this.age > limAge) {
//     console.log(`${this.fistName} ${this.lastName} 'is too old'`);
//   } else {
//     for (let key in this) {
//       console.log(`${key} = ${this[key]}`);
//     }
//   }
// }
// const limAge = 25;
// for (let i = 0; i < players.length; i++){
//   getProbs.call(players[i], limAge);
//   console.log('==================');
// }
// for (let i = 0; i < players.length; i++){
//   // console.log('==================');
//   getProbs.apply(players[i], [limAge]);
//   console.log('==================');
// }

// const getProbsWithThis = getProbs.bind(maLong, 34);
// getProbsWithThis();
// const getProbsWithThis1 = getProbs.bind(kokiNiva, 34);
// getProbsWithThis1();

// find, findIndex
const arr1 = [1, 2, 4, 8, 11, 15];
const arr2 = ['Donic', 'Stiga', 'DHS', 'TSP'];
const arr3 = [{ name: 'Bob' }, { name: 'Jhon' }, { name: 'Bill' }];
console.log(arr1.find((el)=> el % 2 === 0));
console.log(arr3.find((el)=> el.name === 'Bill'));
console.log(arr1.findIndex((el)=> el % 3 === 0));
// for.Each
arr2.forEach(el => console.log(el));
arr1.forEach((el, index, arr) => { 
  arr[index] = el * 10;
})
console.log(arr1);
// map
const arr4 = ['1', '2', '3', '4', '5', '6'];
function parseToInt(el) {
  return parseInt(el);
}
const intArr = arr4.map(parseToInt);
console.log(intArr);
console.log(arr2.map((el, i) => `${el} is #${i + 1} in the world`));
// every, some
console.log(arr1.every(el => typeof el === 'string'));
console.log(arr1.every(el => typeof el === 'number'));
console.log(arr1.some(el => el % 2 === 0));
// filter
const arr5 = [1, 2, 4, 8, 11, 15];
const filteredArray = arr5.filter(el => el % 2 === 0);
console.log(filteredArray);
const filteredArray1 = arr3.filter(el => el.name === 'Jhon');
console.log(filteredArray1);
// reduce
/*
array.reduce(callback,[initialValue])
callback(accum, currentValue, i, arr);
if(initialValue){
  accum = initialValue;
  currentValue=arr[0]
}else{
  accum = arr[0];
  currentValue = arr[1]
}
*/
console.log(arr5.reduce((a, b) => a + b));
console.log(arr5.reduce((a, b) => a + b, 100));
const arrArr = [
  [0, 1],
  [2, 3],
  [4, 5],
];
console.log(arrArr);
console.log(arrArr.reduce((a, b) => a.concat(b)));

function myForEach(arr, callback, thisArg) {
  for (let i = 0; i < arr.length; i++){
    callback.call(thisArg, arr[i], i, arr);
  }
}
const arrBrand = ['Donic', 'Stiga', 'DHS', 'TSP']
myForEach(arrBrand, (el, i) => console.log(`${el} is number ${i + 1}`));

function myMap(arr, callback, thisArg) {
  const result = [];
  for (let i = 0; i < arr.length; i++){
    result.push(callback.call(thisArg, arr[i], i, arr));
  }
  return result;
}
const numberArray = [10, 20, 30];
console.log(myMap(numberArray, (el) => el / 2));

function mySome(arr, callback, thisArg) {
  for(let i = 0; i < arr.length; i++) {
    if (callback.call(thisArg, arr[i], i, arr)) {
      return true;
    }
  }
  return false;
}
console.log(mySome(numberArray, (el) => el === 10));

function myFilter(arr, callback, thisArg) {
  const result = [];
  for (let i = 0; i < arr.length; i++){
    if (callback.call(thisArg, arr[i], i, arr));
    result.push(callback.call(thisArg, arr[i], i, arr));
    result.push(arr[i]);
  }
  return result;
}
console.log(myFilter(numberArray, (el) => el % 3 === 0));

function myReduce(arr, callback, startValue) {
  let result;
  if (startValue) {
    result = startValue;
    for (let i = 0; i < arr.length; i++){
      result = callback(result, arr[i], i, arr);
  }
  }  else {
    result = arr[0];
    for (let i = 0; i < arr.length - 1; i++){
      result = callback(result, arr[i + 1], i, arr);
  }
  }
  return result;
}
const arrArr1 = [
  [0, 1],
  [2, 3],
  [4, 5],
];
console.log(myReduce(arrArr1, (a, b) => a.concat(b)));

function myReduceRight(arr, callback, startValue) {
  let result;
  if (startValue) {
    result = startValue;
    for (let i = arr.length - 1; i >= 0 ; i--){
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

function myEvery(arr, callback, thisArg) {
  for(let i = 0; i < arr.length; i++) {
    if (callback.call(thisArg, arr[i], i, arr)) {
    } else {
      return false;
    }
  }
  return true;
}
console.log(myEvery(numberArray, (el) => typeof el === 'number'));

