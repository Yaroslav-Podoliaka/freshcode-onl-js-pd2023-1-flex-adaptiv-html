'use strict';
// import getNewRate from './lesson-017.js';
import { getNewRate as getRate } from "./lesson-017.js";
// import * as proto from "./lesson-017.js";
// 1 way
function showText() {
  console.log('text');
}
// 2 way
const secondPar = document.getElementById('secondP');
console.log(secondPar);
console.dir(secondPar);
secondPar.onclick = function () {
  console.log('Second Par');
}
secondPar.onclick = showText;
secondPar.onclick = function () {
  console.log(`${this.textContent}`);
};
secondPar.onclick = function () {
  console.log(`${this.onclick}`);
};
// 3 way
const par3 = document.querySelector('#thirthP');
par3.addEventListener('click', () => console.log('It is par #3'));
par3.addEventListener("click", () => console.log("Another one par #3"), { once: true });
par3.addEventListener("click", showText, true);
// par3.removeEventListener("click", showText, true);

const btnCalculate = document.querySelector('.btn > button');
console.log(btnCalculate);
btnCalculate.addEventListener('click', (e) => {
  e.preventDefault();
  console.log('Calculating')
});

const winnerRate = document.getElementById('in1');
const looserRate = document.querySelector('#in2');
export const span = document.querySelector('#new-rate');
// export default span;

let winRate;
let losRate;
// function getNewRate(winnerRate, looserRate) {
//   const deltaRate = winnerRate - looserRate;
//   if (
//     winnerRate < 0 ||
//     looserRate < 0 ||
//     typeof winnerRate !== 'number' ||
//     typeof looserRate !== 'number' ||
//     Number.isNaN(deltaRate)
//   ) {
//     return 'You entered wrong rate';
//   }
//   if (winnerRate === 0) {
//     return looserRate;
//   }
//   if (deltaRate >= 0 && deltaRate <= 2) {
//     return winnerRate + 2;
//   }
//   if (deltaRate > 2 && deltaRate < 20) {
//     return winnerRate + 1;
//   }
//   if (deltaRate >= 20) {
//     return winnerRate;
//   }
//   if (deltaRate < 0) {
//     return winnerRate + Math.round((Math.abs(deltaRate) + 5) / 3);
//   }
// }
// function calculateWinRate(event) {
//   event.preventDefault();
//   winRate = Number(winnerRate.value);
//   losRate = Number(looserRate.value);
//   // console.log(winRate, losRate);
//   span.textContent = getRate(winRate, losRate);
// }
// btnCalculate.addEventListener('click', calculateWinRate);






