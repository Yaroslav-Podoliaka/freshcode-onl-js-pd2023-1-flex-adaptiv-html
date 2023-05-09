const fibonacciNMember = (nMember) => {
  let result = 1;
  let add = 0;
  if (nMember < 3) {
    return 'Please enter a number greater than 3';
  }
  for (let i = 2; i <= nMember; i++){
    let tmp = add + result;
    add = result;
    result = tmp;
  }
  return result;
}
console.log(fibonacciNMember(6));