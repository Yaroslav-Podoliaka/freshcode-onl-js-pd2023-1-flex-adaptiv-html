'use strict';
const arrGroups = [
            'FE2021-5',
            'Fe2020-2',
            'FD2021',
            'fD2022-1',
            'FE2020-3',
            'FD2020/2',
            'FU2022-333',
            'fe2021-3',
            'FD2020$5',
            'FE2008-52',
            'Fm2008-23',
            'FM2022-1',
            'FM1920'
];
function checkNameGroup(arr) {
  const reg = /^\w[FDEMfdem]\d[20]\d{2}\S*\d*/gu;
  for (let i = 0; i < arr.length; i++) {
    if (reg.test(arrGroups[i])) {
      console.log(arrGroups[i], 'Success');
    } else {
      console.log(arrGroups[i], 'Error');
    }
  }
  return 0
}
console.log(checkNameGroup(arrGroups));









