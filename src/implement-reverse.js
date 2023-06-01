'use strict';
function MyArray(...args) {
  this.length = 0;
  for (let i = 0; i < args.length; i++) {
    this.push(args[i]);
  }
}
MyArray.prototype = new MyArrayProto();
function MyArrayProto() {
  this.push = function (...args) {
    if (args.length > 0) {
      for (let i = 0; i < args.length; i++) {
        this[this.length++] = args[i];
      }
      return this.length;
    }
  };
  this.pop = function () {
    if (this.length === 0) {
      return;
    }
    const lastEl = this[this.length - 1];
    delete this[--this.length];
    return lastEl;
  };
  this.forEach = function (fn) {
    for (let i = 0; i < this.length; i++) {
      fn(this[i], i, this);
    }
  };
  this.some = function (fn) {
    if (this.length === 0) {
      return false;
    }
    for (let i = 0; i < this.length; i++) {
      if (fn(this[i], i, this)) {
        return true;
      }
    }
    return false;
  };
  this.every = function (fn) {
    if (this.length === 0) {
      return true;
    }
    for (let i = 0; i < this.length; i++) {
      if (fn(this[i], i, this)) {
      } else {
        return false;
      }
    }
    return true;
  };
  this.filter = function (fn) {
    const newArray = new MyArray();
    for (let i = 0; i < this.length; i++) {
      if (fn(this[i], i, this)) {
        newArray.push(this[i]);
      }
    }
    return newArray;
  };
  this.map = function (fn) {
    const newArray = new MyArray();
    for (let i = 0; i < this.length; i++) {
      newArray.push(fn(this[i], i, this));
    }
    return newArray;
  };
  this.reverse = function () {
    const lastIndex = this.length - 1;
    let tmp;
    for (let i = 0; i < this.length / 2; i++) {
      [this[i], this[lastIndex - i]] = [this[lastIndex - i], this[i]];
    }
    return this;
  };
}
const arr5 = Array(12, 15, 18);
const users = new MyArray('Jhon', 'Bill', 'Peter', 'Jane', 'Greg');
console.log(arr5);
const myArray2 = new MyArray(20, 30, 50, 80);
console.log(myArray2);
console.log(myArray2.pop());
console.log(myArray2);
myArray2.forEach((el) => console.log(el * 2));
console.log(myArray2.some((el) => el % 3 === 0));
console.log(myArray2.every((el) => typeof el === "number"));
console.log(myArray2.filter((el) => el >= 30));
console.log(myArray2.map((el) => el ** 2));
console.log(users);
console.log(users.reverse());

