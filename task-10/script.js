const registrationForm = document.getElementById('registrationForm');
const loginInput = document.getElementById('login');
const emailInput = document.getElementById('email');
const ageInput = document.getElementById('age');
const passwordInput = document.getElementById('password');
const repeatPasswordInput = document.getElementById('repeatPassword');
const registerButton = document.getElementById('registerButton');
const successMessage = document.getElementById('successMessage');

registerButton.addEventListener('click', () => {
    // Clear previous error messages and styles
    clearErrors();

    // Get input values
    const login = loginInput.value;
    const email = emailInput.value;
    const age = ageInput.value;
    const password = passwordInput.value;
    const repeatPassword = repeatPasswordInput.value;

    let isValid = true;

    // Validation for login
    if (login.length < 4 || login.length > 20 || /[._\/\\|,]/.test(login)) {
        showError('loginError', 'Invalid login.');
        isValid = false;
    }

    // Validation for email
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!email.match(emailRegex)) {
        showError('emailError', 'Invalid email format.');
        isValid = false;
    }

    // Validation for age
    if (!age.match(/^\d+$/) || age < 0) {
        showError('ageError', 'Invalid age.');
        isValid = false;
    }

    // Validation for password
    if (password.length < 6 || !/[A-Z]/.test(password) || !/\d/.test(password)) {
        showError('passwordError', 'Invalid password.');
        isValid = false;
    }

    // Validation for repeated password
    if (password !== repeatPassword) {
        showError('passwordError', 'Passwords do not match.');
        isValid = false;
    }

    // If all validations pass, show success message and clear fields
    if (isValid) {
        successMessage.style.display = 'block';
        registrationForm.reset();
    }
});

function showError(elementId, errorMessage) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = errorMessage;
    errorElement.style.display = 'block';
    document.getElementById(elementId.replace('Error', '')).style.borderColor = 'red';
}

function clearErrors() {
    const errorElements = document.querySelectorAll('.error');
    errorElements.forEach((element) => {
        element.textContent = '';
        element.style.display = 'none';
    });

    const inputElements = document.querySelectorAll('input');
    inputElements.forEach((element) => {
        element.style.borderColor = '';
    });

    successMessage.style.display = 'none';
}