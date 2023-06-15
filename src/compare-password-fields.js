'use strict';
const cPasswordInput = document.querySelector('input[name="c-password"]');
function checkVerificationPassword() {
  const passwordInrut = document.querySelector('input[name="password"]');
  if (cPasswordInput.value !== passwordInrut.value) {
    console.log("password entered incorrectly");
  } else {
    console.log("password confirmed correctly");
  }
}
cPasswordInput.addEventListener("change", checkVerificationPassword);