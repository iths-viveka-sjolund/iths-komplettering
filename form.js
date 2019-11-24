const name = document.querySelector('.name');
const email = document.querySelector('.email');
const firstpassword = document.querySelector('.password1');
const secondpassword = document.querySelector('.password2');
const textName = document.querySelector('.nameText');
const textEmail = document.querySelector('.emailText');
const textPassword = document.querySelector('.passwordText');
const textPassword2 = document.querySelector('.passwordText2');
const regex = /^[a-z0-9]+$/
const checkChar = regex.test(document.querySelector(".password1").value);
const button = document.querySelector('button');
const popup = document.querySelector(".popup");
const closeButton = document.querySelector(".close-button");

button.addEventListener('click', validateForm);
closeButton.addEventListener("click", toggleModal);

function toggleModal() {
  popup.classList.toggle("show-confirm");
}

function validateForm() {
  let formValidated = true;
  [textName, textEmail, textPassword, textPassword2].forEach(errorText => {
    errorText.innerText = '';
  });
  if (name.value.length < 3) {
    textName.innerText = 'Name must be at least 3 characters long';
    formValidated = false;
    return;
  }
  if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
    textEmail.innerText = 'Insert a valid email.';
    formValidated = false;
    return;
  }
   
  if (firstpassword.value.length <= 8 && !checkChar) {
    textPassword.innerText = 'Password must contant at least 8 characters and one lowercase';
    formValidated = false;
    return;
  }

  if (firstpassword.value !== secondpassword.value) {
    textPassword2.innerText = 'Passwords do not match';
    formValidated = false;
    return;
  }
  if (formValidated) {
    toggleModal()
  }
}

