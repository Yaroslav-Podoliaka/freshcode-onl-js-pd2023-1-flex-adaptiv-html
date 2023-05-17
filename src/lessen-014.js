'use strict';
let firstName = 'Jhon';
let lastNane = 'Doe';
  function sayHi() {
    console.log('Hi, ' + firstName);
    return function () {
      return`Hello ${lastNane}`;
    }
  }
sayHi();
firstName = 'Pete';
const hello = sayHi();
console.log(hello());
sayHi();

function makeWolker() {
  let secondName = 'Adam';
  return function () {
    return secondName;
  }
}
let secondName = 'Rebecca';
let work = makeWolker();
console.log(work());

function counter() {
  let count = 0;
  return function () {
    count++;
    return count
  }
}
const counter1 = counter();
const counter2 = counter();

console.log(counter1());
console.log(counter1());
console.log(counter1());
console.log(counter1());
console.log('-----------------')
console.log(counter2());
console.log(counter2());
console.log(counter2());
console.log(counter2());

const someFunc = new Function('a', 'b', 'return a + b');
console.log(someFunc(10, 20));

function fibonacci(position) {
  if (position < 3) {
    return 1;
  }
  return fibonacci(position - 1) + fibonacci(position - 2);
}
console.log(fibonacci(7));

function Car(brand, model, transmition, color) {
  this.brand = brand;
  this.model = model;
  this.transmition = transmition;
  this.color = color;
  // this.fullBrand = `${brand} ${model}`;
  this.run = function (driver) {
    console.log(`Let driver ${driver} on ${this.fullBrand}`)
  };
}
const bmw = new Car('BMW', 'X5', 'automatic', 'grey');
console.log(bmw);
bmw.brand = 'Alpina';
console.log(bmw);
console.log(Object.getOwnPropertyDescriptor(bmw, 'brand'));
console.log(Object.getOwnPropertyDescriptors(bmw));
// console.log(Object.defineProperty(bmw, 'color',
//   { value: 'red', enumerable: false,writable: false }));
console.log(Object.defineProperties(bmw, {
  maxSpeed: { value: 300 },
  power: {value: 200, writable: true},
},
))
console.log(Object.getOwnPropertyDescriptor(bmw, 'color'));
for (const key in bmw) {
  console.log(`${key}`);
}
console.log(bmw);
const phone = {
  price: 200,
  resolution: '800x400',
}
const carPone = Object.assign({}, bmw, phone);
console.log(carPone)
console.log(Object.getOwnPropertyDescriptor(carPone, 'color'))

// Object.preventExtensions(phone);
// Object.seal(phone);
// phone.color = 'red';
// delete phone.price;
// Object.freeze(phone);
// phone.price = 300;

console.log(Object.entries(bmw));

const obj = Object.create(bmw);
console.dir(obj);
