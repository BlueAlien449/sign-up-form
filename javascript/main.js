let password = document.querySelector('#password');
let password2 = document.querySelector('#password-confirm');
let passContainer = document.querySelector('.passBlock');
let button = document.querySelector('.submitButton');

password.addEventListener('input', checkPassword);
password2.addEventListener('input', checkPassword);

function checkPassword(){
    if(password.value !== password2.value){
        password.classList.add('error');
        passContainer.classList.add('pass');
        password2.classList.add('error');
        button.disabled = true;
        
    } else {
        password.classList.remove('error');
        passContainer.classList.remove('pass');
        password2.classList.remove('error');
        button.disabled = false;
    }
}