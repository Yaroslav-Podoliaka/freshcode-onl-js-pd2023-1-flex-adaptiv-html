'use strict';
let address = 'Dnipro';
function sayHi() {
  return this.fName;
}
const user = {
  fName: 'Jhon',
  lName: 'Doe',
  age: 30,
  address,
  isMarried: true,
  'home address': 'hhh',
  // say: function () {
  //   console.log('Hi everybody')
  // },
  say() {
    console.log(`Hi ${this.fName + this.lName}`);
  },
  hi:() => {
    console.log(`Hi ${this.fName + this.lName}`);
  },
  sayNow: sayHi,
};
// console.log(user);
user.say();
user.hi();
console.log(user.sayNow());



// function setTitle(rate, lastName) {
//   let title;
//   if (rate >= 60) {
//     title = 'Master';
//   } else if (rate >= 40) {
//       title = 'KMS';
//     } else {
//       title = 'Razryad';
//     }
//   const sportsmen = {
//     [title]: rate,
//     lastName,
//   };
//   return sportsmen;
// }
// console.log(setTitle(40, 'Jhon'));
// user.say();

const car = {
  brand: 'Audi',
  model: 'Q7',
  'year of relise': 2018,
  transmition: 'Automat',
  isWell: true,
  color: 'Black',
  run: function () {
    console.log('Car Start');
  },
  
};
car.run();



// function Car(brand, model, transmition, color) {
//   this.brand = brand;
//   this.model = model;
//   this.transmition = transmition;
//   this.color = color;
//   this.fullBrand = `${brand} ${model}`;
//   this.run = function (driver) {
//     console.log(`Let driver ${driver} on ${this.fullBrand}`)
//   };
// }

// const bmw = new Car('BMW', 'X5', 'automatic', 'grey');
// const toyota = new Car('Toyota', 'Camry', 'mechanic', 'red');
// console.log(bmw.fullBrand);
// console.log(bmw);
// bmw.run('Jhon');
// toyota.run('Jane');




// for (const key in user) {
//   console.log(`${key}: ${user[key]}`)
// }

// const obj = {};
// function isEmpty(obj) {
//   for (let key in obj) {
//     return false;
//   }
//   return true;
// }
// console.log(isEmpty(obj));

// const price = {
//   tea: 20,
//   coffee: 30,
//   meal: 50,
//   onion: 10,
//   waiter: 'Jhon Doe',
//   isPaid: false,
// }

// function multiplyNum(bill) {
//   for (const key in bill) {
//     if (typeof bill[key] === 'number') {
//       bill[key] = bill[key] * 2;
//     }
//   }
// }
//   multiplyNum(price);
//   for (const key in price) {
//     console.log(`${key} : ${price[key]}`)
//     }




// // const person = new Object(user);
// const person = user;
// console.log(person);
// console.log(user === person);

// console.log(user.age);
// console.log(user['home address']);
// person.age = 40;
// console.log(person);
// delete person.address;

// CRUD
// C - create
// R - read
// U - update
// D - delete



