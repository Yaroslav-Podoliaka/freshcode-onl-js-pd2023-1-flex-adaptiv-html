'use strict';
let variant = Number(prompt('Enter a number from 0 to 7'));
switch (variant) {
  case 0:
    console.log(`${variant} --- not allowed to read, modify, execute`);
    break;
  case 1:
    console.log(`${variant} --x only file execution allowed`);
    break;
  case 2:
    console.log(`${variant} -w- only file modification allowed`);
    break;
  case 3:
    console.log(`${variant} -wx file modification and execution allowed`);
    break;
  case 4:
    console.log(`${variant} r-- only read file allowed`);
    break;
  case 5:
    console.log(`${variant} r-x allowed to read and execute the file`);
    break;
  case 6:
    console.log(`${variant} rw- allowed to read and modify the file`);
    break;
  case 7:
    console.log(`${variant} rwx allowed to read, modify and execute the file`);
    break;
  default:
    console.log('Value entered incorrectly')
}
