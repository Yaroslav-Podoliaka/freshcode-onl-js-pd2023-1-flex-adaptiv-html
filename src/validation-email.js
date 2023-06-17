'use strict';
const personEmail = document.querySelector('form:last-of-type :nth-child(3)');
const errorContainer = document.createElement('div');
errorContainer.id = 'errorContainer';
const emailInput = document.querySelector('input[name="email"]');

function checkEmail() {
  const regExpCheckEmail =
    /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
  if (!regExpCheckEmail.test(email.value) && email.value) {
    emailInput.parentNode.appendChild(errorContainer);
    errorContainer.textContent = 'not a valid email address';
    emailInput.classList.toggle('error');
  } else {
    if (document.querySelector('#errorContainer')) {
      personEmail.removeChild(errorContainer);
    }
    emailInput.classList.toggle('error');
  }
}
emailInput.addEventListener('change', checkEmail);