function gettingNumber(number) {
  if (number < 3) {
    console.log('it is not possible to get the right number')
  }
  else {
    
    if (number >= 3) {
      if (number % 3 !== 0 && number % 5 !== 0) {
        if (number <= 7) {
          if (number === 4) {
            console.log('(1+3)');
          }
          else {
            console.log('((1+3)+3)');
          }
        }
        else {
          console.log('(+5)');
          return number - (gettingNumber(number - 5));
        }
      }
      else {
        if (number % 5 === 0) {
          if (number === 5) {
            console.log('(1*5)');
          }
          else {
            console.log('(+5)');
            return number - (gettingNumber(number - 5));
          }
        }
        if (number % 3 === 0) {
          if (number === 3) {
            console.log('(1*3)');
            // return number - (gettingNumber(number - 3));
          }
          else {
            console.log('(+3)');
            return number - (gettingNumber(number - 3));
          }
        }
      }
    }
  }
  return 1;
}
console.log(gettingNumber(15));