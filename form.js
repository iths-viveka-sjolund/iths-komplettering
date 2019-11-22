
const name = document.querySelector('.name')
const email = document.querySelector('.email')
let error = document.querySelector('.error')
const firstpassword = document.querySelector('.password1') 
const secondpassword = document.querySelector('.password2') 
const textName = document.querySelector('.nameText') 
const textEmail = document.querySelector('.emailText') 
const textPassword = document.querySelector('.passwordText') 

const button = document.querySelector('button')
button.addEventListener('click', checkForm)


function checkForm(){ 
    if (name.value.length < 3){  
        textName.innerText = ("Name must be at least 3 characters long..");
        return false;
    } 
    // else{
    //     textName.innerText = ("");
    // }

    else if (email.value.indexOf('@') == -1 ||
        email.value.indexOf('.') == -1) {
        textEmail.innerText = ('Insert a valid email..');
    }
    // else{
    //     textEmail.innerText = ('');
    // }
    else if (firstpassword.value !== secondpassword.value){  
        textPassword.innerText = ('password doesnt match'); 

        }  
    else{  
        textPassword.innerText = ('');
        }  
        window.confirm('you are registrered'); 
}
    {
  }

//   if (condition a) {
//     // code that will execute if condition a is true
// } else if (condition b) {
//     // code that will execute if condition b is true
// } else if (condition c) {
//     // code that will execute if condition c is true
// } else {
//     // code that will execute if all above conditions are false
// }