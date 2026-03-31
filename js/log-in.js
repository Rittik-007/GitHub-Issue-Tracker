
document.getElementById('btn-signIn').addEventListener("click", () => {
    const userInput = document.getElementById('username-input');
    const userValue = userInput.value;
    // console.log(userValue);
    const passwordInput = document.getElementById('password-input');
    const passwordValue = passwordInput.value;
    // console.log(passwordValue);

    if(userValue == 'admin' && passwordValue == '1234'){
        alert('Log in successful');

        window.location.assign("home.html");
    }
    else{
        alert('Log in failed!');
        return;
    }
})