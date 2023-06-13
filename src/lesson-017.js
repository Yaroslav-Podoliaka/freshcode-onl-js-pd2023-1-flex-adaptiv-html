'use strict';
// const obj = {
//   age: 20,
// };
// const arr = [1];
// arr.valueOf();
// console.dir(obj);
// console.dir(arr);
// console.log(arr);

function someFum(a) {
  // return 'I am function';
  return arguments;
}
const someFunExp = function (a) {
  // return 'I am someFunExp';
  return arguments;
}
const someArrowFun = (a, b, ...args) => {
  args.forEach(arg => console.log(arg));
};

// console.dir(someFum);
// console.dir(someFunExp);
// console.dir(someArrowFun);
// console.log(someFum(1, 2, 'Donic'));
// console.log(someFunExp(2));
someArrowFun(1, 5, 8, 10, 15, 17, 18, 25);

const numberArray = [1, 2, 3, 4, 5, 500, 100];
const max = Math.max(...numberArray);
console.log(max);

const newNumbArray = [300, ...numberArray, 800, true];
console.log(newNumbArray)

function MyArray(...args) {
  this.length = 0;
  for (let i = 0; i < args.length; i++){
    this.push(args[i]);
  }
  // this.push = function (item) {
  //   this[this.length] = item;
  //   return ++this.length;
  // }
}

MyArray.isMyArray = function (obj) {
  return obj instanceof MyArray;
}

MyArray.prototype = new MyArrayProto();
console.dir(MyArray);
function MyArrayProto() {
  this.push = function (...args) {
    if (args.length > 0) {
      for (let i = 0; i < args.length; i++) {
        this[this.length++] = args[i];
      }
      return this.length;
    }
  }
  this.pop = function () {
    if (this.length === 0) {
      return;
    }
    const lastEl = this[this.length - 1];
    delete this[--this.length];
    return lastEl;
  }
  this.forEach = function(fn) {
    for (let i = 0; i < this.length; i++){
      fn(this[i], i, this);
    }
  }
  this.some = function (fn) {
    if (this.length === 0) {
      return false;
    }
    for (let i = 0; i < this.length; i++){
      if (fn(this[i], i, this)) {
        return true;
      }
    }
    return false;
  }
  this.every = function (fn) {
    if (this.length === 0) {
      return true;
    }
    for (let i = 0; i < this.length; i++){
      if (fn(this[i], i, this)) {
        
      } else {
        return false;
      }
    }
    return true;
  }
  this.filter = function (fn) { 
    const newArray = new MyArray();
    for (let i = 0; i < this.length; i++){
      if (fn(this[i], i, this)) {
        newArray.push(this[i]);
      }
    }
    return newArray;
  }
  this.map = function (fn) {
    const newArray = new MyArray();
    for (let i = 0; i < this.length; i++) {
      newArray.push(fn(this[i], i, this));
    }
    return newArray;
  }
  this.reverse = function () {
    const lastIndex = this.length - 1;
    let tmp;
    for (let i = 0; i < this.length / 2; i++) {
      // tmp = this[i];
      // this[i] = this[lastIndex - i];
      // this[lastIndex - 1] = tmp;
      [this[i], this[lastIndex - i]] = [this[lastIndex - i], this[i]];
    }
    return this;
  };
}
const arr5 = Array(12, 15, 18);
console.log(arr5);
const myArray2 = new MyArray(20, 30, 50, 80, 100);
console.log(myArray2);
console.log(myArray2.pop());
console.log(myArray2);
myArray2.forEach((el) => console.log(el * 2));
console.log(myArray2.some(el => el % 3 === 0));
console.log(myArray2.every(el => typeof el === 'number'));
console.log(myArray2.filter(el => el >= 30));
console.log(myArray2.map(el => el ** 2));
console.log(myArray2.reverse());
const users = new MyArray('Jhon', 'Bill', 'Peter', 'Jane', 'Greg');
console.log(users);
console.log(users.reverse());
// console.log(users);
console.log(MyArray.isMyArray(arr5));
console.log(MyArray.isMyArray(myArray2));
console.dir(MyArray);

// let jhon = users[0];
// let bill = users[1];
// let petr = users[2];
// let [jhon, bill, petr] = users;
// console.log(jhon);
// console.log(bill);
// console.log(petr);

// const person = {
//   name: 'Jane',
//   age: 20,
// }
// let { name: jane, age } = person;
// console.log(jane);
// console.log(age);
// [jane, petr] = [petr, jane];
// console.log(petr);
// console.log(jane);

// const arr1 = new Array(1, 2);
// console.log(arr1);

// function getObj() {
//   return this;
// }
// function Country(
//   title = 'Ukraine',
//   capital = 'Kiyv',
//   area = 8e5,
//   population = 4.9e6,
// ) {
//   // without new
//   if(!new.target){
//     return new Country(title, capital, area, population);
//   }
//   this.title = title;
//   this.capital = capital;
//   this.area = `${area} square km`;
//   this.population = `${population} persons`;
//   // this.getCountry = getObj;
// }
// console.dir(Country);
// Country.prototype.getCountry = getObj;
// Country.prototype.isEuroMember = true;

// const ukraine = new Country();
// const usa = new Country('USA', 'Washington', 1e6, 15e6);
// function printCountryPropeties(country){
//   for(let key in country) {
//     if(typeof country[key] !== 'function')
//     console.log(`${key}: ${country.getCountry()[key]}`);
//   }
// }
// console.log(usa);
// console.log(ukraine);

// printCountryPropeties(usa);
// console.log('====================');
// printCountryPropeties(ukraine);

export function getNewRate(winnerRate, looserRate) {
  const deltaRate = winnerRate - looserRate;
  if (
    winnerRate < 0 ||
    looserRate < 0 ||
    typeof winnerRate !== "number" ||
    typeof looserRate !== "number" ||
    Number.isNaN(deltaRate)
  ) {
    return "You entered wrong rate";
  }
  if (winnerRate === 0) {
    return looserRate;
  }
  if (deltaRate >= 0 && deltaRate <= 2) {
    return winnerRate + 2;
  }
  if (deltaRate > 2 && deltaRate < 20) {
    return winnerRate + 1;
  }
  if (deltaRate >= 20) {
    return winnerRate;
  }
  if (deltaRate < 0) {
    return winnerRate + Math.round((Math.abs(deltaRate) + 5) / 3);
  }
}
// export default getNewRate;

