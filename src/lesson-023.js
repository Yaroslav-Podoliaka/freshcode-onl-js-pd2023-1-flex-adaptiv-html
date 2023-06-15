'use strict';
// const matrix = [[1, 2, 3, 4], [5, 18, 0, 12], [3, 5, 12, 5], [28, 9, 2, 34]];
// const result = matrix.map((array) => Math.max(...array)).sort((a, b,) => a - b);
// const result1 = matrix.map((array) => array.sort((a, b) => a - b)[array.length - 1]).sort((a, b) => a - b);
// console.log(result);
// console.log(result1);

// class Person{
//   constructor(name = 'Lhon', age = 30, salary = 1000) {
//     this.name = name;
//     this.age = age;
//     this.salary = `${salary}$`;
//   }
// }
// const jhon = new Person;
// const julia = new Person('Julia', 25, 2000);
// const bill = new Person('Bill', 35, 3000);
// const arrPerson = [jhon, julia, bill];
// const getPersonProps = (arr, propName) => {
//   arr.forEach((person) => console.log(person[propName]));
//   };
// getPersonProps(arrPerson, 'salary');

// function deleteGaps(str) {
//   const regExp = /\s/g;
//   return str.replace(regExp, '');
// }
// console.log(deleteGaps('I like JavaScript'));

// console.log(location);
// console.log(navigator);

// function success(position){
//   let latitude = position.coords.latitude;
//   let longitude = position.coords.longitude;
//   let altitude = position.coords.altitude;
//   let speed = position.coords.speed;
//   console.log(latitude);
//   console.log(longitude);
//   console.log(altitude);
//   console.log(speed);
// }
// function error(obj) {
//   console.log('Geolocation error');
// }
// navigator.geolocation.getCurrentPosition(success, error);

function openWiki() {
  const popUp = open('https://wikipedia.org', '_blank', 'width = 400, height = 300, top = 100, left = 100');
  popUp.moveTo(500, 300);
  const timerId = setTimeout(() => popUp.close(), 2000);
  clearTimeout(timerId);
  // popUp.close();
  // return popUp;
}
// openWiki();
const span = document.querySelector('#new-rate');
span.addEventListener('click', openWiki);

// function updateTime() {
//   const time = document.getElementById('time');
//   const now = new Date();
//   time.textContent =
//     `${now.getHours() < 10 ? '0' + now.getHours() : now.getHours()} :
//     ${now.getMinutes() < 10 ? '0' + now.getMinutes() : now.getMinutes()} :
//     ${now.getSeconds() < 10 ? '0' + now.getUTCSeconds() : now.getSeconds()}`;
// }
// 
// setInterval(updateTime, 1000);
// // clearInterval(intervalId);
// // updateTime();

// console.log(document.cookie);

// localStorage.setItem('login', 'tom32@gmail.com');
// localStorage.setItem("name", "Jhon");
// const login = localStorage.getItem('login');
// // localStorage.clear();

// console.log(login);
// const user = {
//   fName: 'Jhon',
//   lName: 'Doe',
//   age: 30,
//   isMarried: true,
//   arr: [1, 2, 3],
//   address: {
//     citi: 'San Francisco',
//     country: 'USA',
//   },
//   sayHi() {'hi'},
// }
// // localStorage.setItem('user', user);
// const jsonUser = JSON.stringify(user);
// console.log(jsonUser);
// const person1 = JSON.parse(jsonUser);
// console.log(person1);

// Создать страницу с формой. Можно переделать (сохранив) предыдущую форму.
//     Стилизация минимальная. Основное события.
//     Поля: First name, last name, nick name, email
//     Кнопки: cancel, submit.
//     Не забудьте про preventDefault()
//     На кнопку submit повесить обработчик - собрать данные со всех инпутов и создать из них 
//     объект Person с помощью конструктора (класс).
//     Затем сохранить этот объект в localStarage с ключом lastName.

const btnOk = document.querySelector('#btn-person :first-child');
class Person{
  constructor(firsName, lastname, email, nicName) {
    this.firsName = firsName;
    this.lastname = lastname;
    this.email = email;
    this.nicName = nicName;
  }
}
function collectPropsFromForm(event) {
  event.preventDefault();
  const collectionProps = Array.from(
    document.querySelectorAll('#person input[type="text"]')
  );
  const lastName = document.querySelector('input[name="lastName"]');
  const arrValues = collectionProps.map((item) => item.value);
  const person = new Person(...arrValues);
  localStorage.setItem(`${lastName.value}`, JSON.stringify(person));
  console.log(collectionProps);
  console.log(arrValues);
}
const mick = JSON.parse(localStorage.getItem('Box'));
console.log(mick);
btnOk.addEventListener('click', collectPropsFromForm);

const emailInput = document.querySelector('input[name="email"]');
function checkEmail() {
  emailInput.style.color = "black";
  emailInput.style.border = "1px solid black";
  const regExpCheckEmail =
    /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/g;
  if (!regExpCheckEmail.test(email.value)) {
    emailInput.style.border = "3px solid red";
    emailInput.style.color = "red";
    email.value = "not a valid email address";
  } 
}
emailInput.addEventListener("change", checkEmail);

const cPasswordInput = document.querySelector('input[name="c-password"]');
function checkVerificationPassword() {
  cPasswordInput.type = "password";
  const passwordInrut = document.querySelector('input[name="password"]');
  if (cPasswordInput.value !== passwordInrut.value) {
    cPasswordInput.type = "text";
    cPasswordInput.value = "password entered incorrectly";
  }
}
cPasswordInput.addEventListener('change', checkVerificationPassword);

