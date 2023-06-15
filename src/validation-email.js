'use strict';
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