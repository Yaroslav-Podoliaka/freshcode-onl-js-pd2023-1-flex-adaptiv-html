'use strict';
const btnOk = document.querySelector("#btn-person :first-child");
class Person {
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
const personInfo = JSON.parse(localStorage.getItem("Box"));
console.log(personInfo);
btnOk.addEventListener("click", collectPropsFromForm);
