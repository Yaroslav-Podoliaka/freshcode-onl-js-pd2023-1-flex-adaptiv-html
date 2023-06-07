'use strict';
const user = {
  fName: 'Jhon',
  lName: 'Doe',
  age: 20,
  email: 'doe@example.com',
}
const arrObj = Object.entries(user);
console.log(arrObj);
const map = new Map(arrObj);
console.log(map);
console.dir(map);
const arrArr = [[NaN, '10'], [20, '20'], [30, '30']];
const arrMap = new Map(arrArr);
console.log(arrMap);
arrMap.set(40, '40');
console.log(arrMap);
console.log(arrMap.get(NaN));
console.log(arrMap.has(NaN));
console.log(arrMap.delete(NaN));
console.log(arrMap.get(NaN));
// console.log(arrMap.clear());
console.log(arrMap.size);
arrMap.forEach((el) => console.log(el));
arrMap.forEach((el, key) => console.log(`${key}: ${el}`));
for (const key of arrMap) {
  console.log(key);
}
// set
const str = 'Butterfly';
const arr = [10, 20, 30];
const set = new Set(arr);
console.log(set);
set.add(40).add(50);
console.log(set);
set.delete(40);
console.log(set);
set.forEach((value, key) => console.log(`${key} :${value}`));
console.log(str.length);
console.log(Array.from(set));

const arr1 = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6];
console.log(arr1);
const set1 = new Set(arr1);
console.log(Array.from(set1));
// console.log(set1);
const callRealFunctions = () => 'It is real function';

try {
  callSomeFunction();
  console.log(callRealFunctions());
} catch (error) {
  console.log('an error has happened');
  console.log(error)
}
finally {
  console.log('this message will print any way')
}
console.log('Other part of app will go on');

class User{
  constructor(userName, userAge) {
    const age = parseInt(userAge);
    if (Number.isNaN(age)) throw new TypeError('Age must be a number');
    if (age < 0 || age > 150) throw new RangeError('Age must be between and 150');
    this.age = age;
    this.userName = userName;
  }
  printProps() {
    return `Name is ${this.userName}, age is ${this.age}`;
  }
}
try {
  const bill = new User('Bill', -20);
  console.log(bill.printProps);
} catch (error) {
  console.log(error.name);
  console.log(error.message);
  console.log(error);
}
try {
  getSmth();
} catch (error) {
  console.log(error.name);
  console.log(error.message);
  console.log(error);
}

class UserError extends Error{
  constructor(value, options, ...params) {
    super(...params);
    this.name = 'UserError';
    this.argument = value;
    this.cause = options.cause ?? 'Common Error';
}
}
class User1 {
  constructor(userName, userAge) {
    const age = parseInt(userAge);
    if (Number.isNaN(age)) throw new UserError(userAge, {cause: 'Unexpected value'}, "Age must be a number");
    if (age < 0 || age > 150)
      throw new UserError(userAge, {}, "Age must be between and 150");
    this.age = age;
    this.userName = userName;
  }
  printProps() {
    return `Name is ${this.userName}, age is ${this.age}`;
  }
}
try {
  const bill = new User1('Bill', -20);
  console.log(bill.printProps);
} catch (error) {
  console.log(error.name);
  console.log(error.message);
  console.log(error.cause);
  console.log(error);
}

const symbol = Symbol('id');
const symbol1 = Symbol('id');
const symbol2 = Symbol.for('user-my-ap-12');
console.log(symbol === symbol1);
console.log(Symbol('id') === Symbol('id'));
console.log(String(20));
console.log(String(symbol));
console.log(20 + '30');
console.log(true + '30');
const mySuperSecretPassword = Symbol('sankfrkt');
const obj = {};
obj.myPassword = 'password';
obj[mySuperSecretPassword] = 'qwerty';
console.log(obj.myPassword);
console.log(Object.keys(obj));
console.log(obj)
for (let key in obj) {
  console.log(key);
}
console.log(obj[mySuperSecretPassword]);
console.log(symbol2 === Symbol.for('user-my-ap-12'));
console.log('2' === Symbol.keyFor(symbol2));
class MyArrayIterator{
  /**
   * 
   * @param {MyArray} myArray 
   */
  constructor(myArray) {
    this.array = myArray;
    this.count = 0;
  }
  next() {
    return {
      value: this.array[this.count++],
      done: this.count > this.array.length,
    };
  }
}



[Symbol.iterator](){
  return new MyArrayIterator(this);
}



