'use strict';
// import { span } from "./lesson-022.js";
// import span from "./lesson-022.js"; // для дефолтного экспорта
const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve('Is done'), 2000);
  // setTimeout(()=>reject(new Error('Something went wrong')))
})
  .then((done) => {
    getSTH();
    console.log(done);
    return done + ' it all';
  })
  .finally(() => console.log('This code will execute any way'))
  .then((done) => {
    // getSTH();
    console.log(done);
    return done + " add something else";
  })
  .catch((err) => console.log(err.message))
  // .then(null, (err) => err.message)
console.log(promise);

// function sum(a, b,) {
//   return new Promise((resolve) => {
//     const result = a + b;
//     resolve(result);
//   })
// }
// const summ = sum(5, 20)
//   .then((value) => `${value} $`)
//   .then((str) => {
//     console.log(str);
//     return parseInt(str);
//   })
//   .then((value) => value * 4)
// // .then((done) => span.textContent = done)
// console.log(summ);

const prom1 = Promise.resolve(5);
// const prom2 = Promise.reject(new Error('Promice'));
console.log(prom1);
// console.log(prom2);

const prom3 = Promise.resolve(5);
const prom4 = 2023;
const prom5 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, 'Donic');
})
const arrProm = [prom3, prom4, prom5, promise];
// Promise.all(arrProm)
//   .then((result) => console.log(result));
// Promise.allSettled(arrProm)
//   .then((result) => console.log(result));
// Promise.race(arrProm)
//   .then((result) => console.log(result));
// Promise.any(arrProm)
//   .then((result) => console.log(result));

async function sum1(a, b,) {
  try {
    const result = a + b;
    const value = await Promise.resolve(result + 5);
    throw new Error("Invalid");
    const final = (await value) + "end";
    return final;
  } catch (error) {
    console.log(error);
  }finally{
    console.log('This new code will execute any way');
  }
}
console.log(sum1(10, 20).catch((err) => err));

let i = 0;
let start = Date.now();
// function count() {
//   for (let j = 0; j < 1e9; j++)
//   {
//     i++;
//   }
//   console.log('Done in ' + (Date.now() - start) + 'ms');
// }
// count();

function showProgress() {
  do {
    i++
    progress.innerHTML = i;
  } while (i % 1e3 !== 0)
  if (i < 1e6) {
    setTimeout(showProgress);
    // queueMicrotask(showProgress);
  }
  showProgress();
}
