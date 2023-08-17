let isLoginPage = true;

// const switchButton = document.getElementById('switchButton');
// const loginButton = document.getElementById('loginButton');
// const emailField = document.getElementById('username');
// const passwordField = document.getElementById('password');
// const error = document.getElementById('error');

const ref = {
    switchButton: document.getElementById('switchButton'),
    loginButton: document.getElementById('loginButton'),
    emailField: document.getElementById('username'),
    passwordField: document.getElementById('password'),
    error: document.getElementById('error'),
};

ref.switchButton.addEventListener('click', function() {
    const headerTitleElement = document.getElementById('headerTitle');
    const forgotPasswordButton = document.getElementById('forgotPassword');

    if (isLoginPage) {
        headerTitleElement.innerHTML = 'Create new account';
        // forgotPasswordButton.style.display = 'none';
        forgotPasswordButton.style.visibility = 'hidden';
        loginButton.value = 'Sign up';
        this.innerHTML = 'Switch to login page';
    } else {
        headerTitleElement.innerHTML = 'Login';
        // forgotPasswordButton.style.display = 'inline';
        forgotPasswordButton.style.visibility = 'visible';
        loginButton.value = 'Login';
        this.innerHTML = 'Switch to create account page';
    }
    isLoginPage = !isLoginPage;
});

ref.loginButton.addEventListener('click', function(event) {
    event.preventDefault();
});

const validatePassword = (value) => {
    return value.length > 3; // returneaza true sau false
};
  
const validateEmail = (email, regex) => {
    console.log(email.match(regex));
    return !!email.match(regex); // converteste la o valoare booleana
};
const showError = (message) => {
    ref.error.style.display = "block";
    ref.error.innerHTML = message;
    ref.error.style.color = "red";
};
  
const clearInputs = () => {
    ref.emailField.value = "";
    ref.passwordField.value = "";
};

loginButton.addEventListener('click', function(event) {
    event.preventDefault();

    const emailValue = ref.emailField.value;
    const passwordValue = ref.passwordField.value;
    const regexEmailPattern = /\D{4,}\@\D{4,}\.\D{2,}/g;

    if (emailValue === '' || passwordValue === '') {
        showError('All fields are required and must contain a value');
    } else {
        error.style.display = 'none';
        if(validatePassword(passwordValue) && validateEmail(emailValue, regexEmailPattern)) {
            if (isLoginPage) {
                login(emailValue, passwordValue).then(data => {
                    //redirect catre aplicatie
                    window.open('pages/index.html', '_self'); //deschide o pagina in acelasi tab
                });
            } else {
                createAccount(emailValue, passwordValue).then(data => {
                    console.log(data);
                })
            }
            clearInputs();
        } else {
            alert('Try again');
            showError('Incorrect email or password');
            clearInputs();
        }
    }
});

async function login(emailValue, passwordValue) {
    const loginUrl = 'https://reqres.in/api/login';
    let loginData = {
        email: emailValue,
        password: passwordValue
    }

    loginData = {
        "email": "eve.holt@reqres.in",
        "password": "cityslicka"
    }

    const loginConfig = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginData)
    };

    const response = await fetch(loginUrl, loginConfig);
    return response.json();
}


async function createAccount(emailValue, passwordValue) {
    const createAccountUrl = 'https://reqres.in/api/register';
    emailValue = "eve.holt@reqres.in";
    passwordValue = "pistol";

    const registerData = {
        email: emailValue,
        password: passwordValue
    }

    const registerConfig = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(registerData)
    };

    const response = await fetch(createAccountUrl, registerConfig);
    return response.json();
};
