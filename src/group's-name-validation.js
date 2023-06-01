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
function checkNameGroup(str) {
  const reg = /^(F[DEM]|f[dem])20\d{2}(-\d+)?$/g;
    if (reg.test(str)) {
      return `${str} is Success`;
    } else {
      return `${str} is Error`;
    }
}
for (const name of arrGroups) {
  console.log(checkNameGroup(name));
}










