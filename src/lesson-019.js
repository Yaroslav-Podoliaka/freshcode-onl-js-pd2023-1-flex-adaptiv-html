'use strict';
class MyArray {
  constructor(...args) {
    this.length = 0;
    for (let i = 0; i < args.length; i++) {
      this.push(args[i]);
    }
  }
  static isCar(obj) {
    return obj instanceof this;
  }
  push(...args) {
    if (args) {
      for (let i = 0; i < args.length; i++) {
        this[this.length++] = args[i];
      }
      return this.length;
    }
  }
  some(fn) {
    for (let i = 0; i < this.length; i++) {
      if (fn(this[i], i, this)) {
        return true;
      }
    }
    return false;
  }
  every(fn) {
    if (this.length === 0) {
      return true;
    }
    for (let i = 0; i < this.length; i++) {
      if (!fn(this[i], i, this)) {
        return false;
      }
    }
    return true;
  }
  reverse() {
    const lastIndex = this.length - 1;
    let tmp;
    for (let i = 0; i < this.length / 2; i++) {
      [this[i], this[lastIndex - i]] = [this[lastIndex - i], this[i]];
    }
    return this;
  }
  concat(...args) {
    const result = this;
    for (let i = 0; i < args.length; i++) {
      if (Array.isArray(args[i])) {
        result.push(...args[i]);
      } else if (MyArray.isMyArray(args[i])) {
        for (let j = 0; j < args[i].length; j++) {
          result.push(args[i][j]);
        }
      } else {
        result.push(args[i]);
      }
    }
    return result;
  }
  flat(depth = 1) {
    let newMyArray = new MyArray();
    this.forEach(item => {
      if (MyArray.isMyArray(item) && depth) {
        const tmpArr = item.flat(depth - 1);
        newMyArray = newMyArray.concat(tmpArr);
      } else if (item !== undefined) {
        newMyArray.push(item);
      }
    })
    return newMyArray;
  }
}

const myArr = new MyArray(10, 20, 30);
// const myArrArr = new MyArray(10, [20], 30);
console.log(myArr);
console.log(myArr.some((el)=> el % 3 === 0));
console.log(myArr.every((el) => el % 10 === 0 && el !== 0));
console.log(myArr.reverse());
// console.log(myArr.concat)

// ругулярные выражения

let strForReg = 'Stiga';
let reg = /lo/gis;
let reg1 = new RegExp('ol', 'gim');
let reg3 = /[lo]/gis;
let reg4 = /[^lo]/gis;
let reg5 = /lo{2,3}/is;
let reg6 = /(lo){2,3}/is;
const str = 'MaLong';
const str2 = 'Trololooo Trololoooo Trololooooo Trololoo';
let str3 = 'Donic Stiga DHS TSP Bonic';
console.dir(reg)
console.dir(reg1);
// search()
console.log(str2.search(reg));
// match()
console.log(str2.match(reg));
console.log(str2.match(reg3));
console.log(str2.match(reg4));
console.log(str2.match(reg5));
console.log(str2.match(reg6));
// replace()
console.log(str3.replace(/onic/ig, 'enic'));
console.log(str3.replace(/\W/gi, '-'));
console.log(str3.replace(/\W/gi, '$`'));
// test()
console.log(reg.test(str2));
// exec()
console.log(reg.exec(str2));

const password = '12528dgi112';
function checkPassword(str) {
  const reg10 = /^\w{8,15}$/ig;
  if (reg10.test(password)) {
    return `${password} is valid password`;
  }
  return `${password} is not valid password`;
}
console.log(checkPassword(password));





