document.getElementById('login-btn').addEventListener('click', function(){

    // User Email Field
    const emailField = document.getElementById('email-field');
    const userEmail = emailField.value;
    // console.log(userEmail);

    // User Password Field
    const passwordField = document.getElementById('password-field');
    const userPassword = passwordField.value;
    // console.log(userPassword);

    if(userEmail == 'admin@mail.com' && userPassword == '123'){
        window.location.href = 'bank-dashboard.html'
    }
    else {
        alert('Please enter your Email or Password');
    }
})