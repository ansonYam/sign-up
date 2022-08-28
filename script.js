const pw1 = document.querySelector('#password');
const pw2 = document.querySelector('#confirmPassword');
const error_text = document.querySelector('.error-text');
const create_button = document.querySelector('#create-account');

create_button.onclick = function() {
    if (pw1.value != pw2.value) {
        error_text.style.display = 'block';
        error_text.classList.remove('match');
        error_text.textContent = '* Passwords do not match';
        return false;
    } else {
        error_text.style.display = 'block';
        error_text.classList.add('match');
        error_text.textContent = '';
        return false;
    }
}