'use strict';
let a = Number(prompt('Enter number'));
let result = 0;
if (Number.isNaN(a) && a > 0){
  console.log('Enter wrong number');
} else {
  for (let i = 1; i <= a; i++){
  if(i % 5 === 0)
  console.log(`multiples of 5 - ${i}`);
}
}