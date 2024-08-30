const name=document.getElementById('name');
const email=document.getElementById('email');
const number=document.getElementById('number');
const password=document.getElementById('password');
const confirmpassword=document.getElementById('confirmpassword');
const form =document.getElementById('form');
const name_error=document.getElementById('name_error');
const email_error=document.getElementById('email_error');
const number_error=document.getElementById('number_error');
const password_error=document.getElementById('password_error');
const confirmpassword_error=document.getElementById('confirmpassword_error');


form.addEventListener('submit', (e) => {
    var email_check = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    var number_check = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    var password_check = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/;

    let isValid = true;

    if (!name.value || !email.value || !number.value || !password.value || !confirmpassword.value) {
        e.preventDefault();
        alert('All fields are required. Please fill out every field.');
        isValid = false;
    }

    if (name.value.length <= 6) {
        e.preventDefault();
        name_error.innerHTML = 'At least 5 characters are required.';
        isValid = false;
    } else {
        name_error.innerHTML = '';
    }

    if (!email.value.match(email_check)) {
        e.preventDefault();
        email_error.innerHTML = 'Valid email is needed.';
        isValid = false;
    } else {
        email_error.innerHTML = '';
    }

    if (!number.value.match(number_check)) {
        e.preventDefault();
        number_error.innerHTML = 'Valid phone number is needed.';
        isValid = false;
    } else {
        number_error.innerHTML = '';
    }

    if (password.value.length <= 9) {
        e.preventDefault();
        password_error.innerHTML = 'At least 8 characters should be included.';
        isValid = false;
    } else if (!password.value.match(password_check)) {
        e.preventDefault();
        password_error.innerHTML = 'Password must include uppercase, lowercase, number, and special character.';
        isValid = false;
    } else {
        password_error.innerHTML = '';
    }

    if (confirmpassword.value !== password.value) {
        e.preventDefault();
        confirmpassword_error.innerHTML = 'Passwords do not match.';
        isValid = false;
    } else {
        confirmpassword_error.innerHTML = '';
    }

    if (isValid) {
        form.submit();
    }
});
