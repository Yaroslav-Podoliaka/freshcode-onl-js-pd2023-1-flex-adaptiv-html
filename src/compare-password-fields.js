'use strict';
const cPasswordInput = document.querySelector('input[name="c-password"]');
function checkVerificationPassword() {
  cPasswordInput.type = "password";
  const passwordInrut = document.querySelector('input[name="password"]');
  if (cPasswordInput.value !== passwordInrut.value) {
    cPasswordInput.type = "text";
    cPasswordInput.value = "password entered incorrectly";
  }
}
cPasswordInput.addEventListener("change", checkVerificationPassword);