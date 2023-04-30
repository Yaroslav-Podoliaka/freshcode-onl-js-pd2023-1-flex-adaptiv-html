'use strict';
let number = 100;

for (let i = 1; i <= number; i++) {
  let divider = 2;
  for (let j = 0; j <= number; j++){
    if (i % divider === 0) {
      break;
    }
    divider++
    if (divider === i) {
      console.log(`simple numbers - ${i}`);
      break;
    }
  }
}