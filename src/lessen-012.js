'use strict'
// console.log(summ(10, 20));

// // Funtion Declaration
// function summ(a, b) {
//   return a + b;
// }
// console.log(summ(3, 5));
// // Function Expression
// const divide = function (a, b) {
//   return a / b;
// }
// console.log(divide(10, 20));
// let welcome;
// let age = 20;
// if (age < 18) {
//   // function welcome() {
//   //   console.log('You are too muth young')
//   // }
//   welcome = function () {
//     console.log('You are too muth young')
//   }
// } else {
//   // function welcome() {
//   //   console.log('You are too enough adult')
//   // }
//   welcome = function () {
//     console.log('You are too enough adult')
//   }
//   }
// welcome()

// стрелочные функции
// const summ = (a, b) => a + b;
//   console.log(summ(50, 70));

// const mult = a => {
//   return a * 2;
// }
//   console.log(mult(50, 70));

// const summ1 = (a, b) => a + b;
// console.log(summ1(45, 20, 30));

// const summ2 = (a, b) => a + b;
// console.log(summ2(45, 'Jane'));

// let brand = 'Stiga';
// let ttBlade = 'Donic'
// function changeArg(brand, ttBlade) {
//   console.log(brand);
//   console.log(ttBlade);
//   brand = 'Butterfly';
//   ttBlade = 'DHS';
//   console.log(brand);
//   console.log(ttBlade);
// }
// changeArg(brand, ttBlade);
// console.log(brand);
// console.log(ttBlade);

// const summ = (a, b = 5) => a / b;
// console.log(summ(50));

// старый вариант
// const summ = (a, b) => {
//   return (a || 20) + (b || 5);
// }
// console.log(summ());

// function divide(a, b) {
//   return(
//     a / b
//   );
// }
// console.log(divide(20, 5))

// let age = 16;
// function chekAge(age = 16) {
//   if (typeof age !== 'number' && !Number.isNaN(age)) {
//     return 'EnEnter number please';
//   }
//   if (age < 18) {
//     return 'You are too muth young';
//   }
//   if (age >= 18) {
//     return 'Yoa are enoogh adult';
//   }
// }
// console.log(chekAge(20));

// const summ = (a, b) => a + b;
// const sub = (a, b) => a - b;
// const div = (a, b) => a / b;
// const mult = (a, b) => a * b;

// const calcilate = function (oper1, oper2, mathOperation) {
//   let operatoin;
//   switch (mathOperation) {
//     case '+': {
//       operatoin = summ;
//       break;
//     }
//     case '-': {
//       operatoin = sub;
//       break;
//     }
//     case '*': {
//       operatoin = mult;
//       break;
//     }
//     case '/': {
//       operatoin = div;
//       break;
//     }
//       default: console.log('Unknown math operation')
//   }
//   if (typeof operatoin === 'function') {
//     return operatoin(oper1, oper2)
//   }
//   return 'Entered wrong math operatoin'
// }
// const userNumb1 = Number(prompt('Enter first number'));
// const userNumb2 = Number(prompt('Enter second number'));
// const mathOperation = (prompt('Enter math operation'));
// const result = calcilate(userNumb1, userNumb2, mathOperation)
// console.log(result)

// const printFissBuss = (n) => {
//   for (let i = 1; i <= n; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log('fiss-buss');
//     }else
//     if (i % 3 === 0) {
//       console.log('fiss');
//     }else
//     if (i % 5 === 0) {
//       console.log('buss');
//     }else
//     console.log(i);
//   }
// };
// printFissBuss(100);

// let numb1 = 10;
// function chengeGlobal() {
//   return numb1 * Math.random();
// }
// console.log(chengeGlobal());

// function greet(person) {
//   console.log(`Hello ${person}`);
// }
// greet('Jhon');
// console.log('Bye-Bye');

// function chicken(){
//   return egg();
// }
// function egg() {
//   return chicken();
// }
//chicken();

// /**
//  * 
//  * @param {number} a first operator
//  * @param {number} b second operator
//  * @returns {number} Result a + b
//  */
// function summ(a, b) {
//   return a + b;
// }
// summ(10, 20);

// let rad = 0.5 / 2;
// let res = 0;
const volumeOfSpheres = (rad, res) => {
  for (let i = 0; i < 12; i++) {
    let v = 4 / 3 * Math.PI * rad ** 3
    rad += + 0.01;
    res += v;
  }
  return res;
}
console.log(volumeOfSpheres(0.25, 0))

/**
 * 
 * @param {number} sonAge 
 * @param {number} fatherAge 
 * @returns {number} year when father was/will be twofild older than son
 */
const ageTwoFold = (sonAge, fatherAge) => {
  let result = 0;
  if (fatherAge - sonAge < 15 || sonAge <= 0) {
    return 'You entered wrong information';
  }
  for (let i = 0; i < fatherAge - sonAge; i++){
    if (fatherAge / sonAge === 2) {
    return result;
    }
    sonAge++;
    fatherAge++;
    result++
  }
}
console.log(ageTwoFold(1, 39));
