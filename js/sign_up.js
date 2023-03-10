let password = document.querySelector(".password");
let confirmPassword = document.querySelector(".conf_pass");
let submit = document.querySelector("input[type=submit]");

let form = document.querySelector("form");

let error = document.querySelector(".error");

submit.addEventListener("click", () => {
    if (password.value != confirmPassword.value) {
        error.innerHTML = "Passwords doesn't match";
    }
})

function mySubmitFunction(e) {
    if (password.value != confirmPassword.value) {
        e.preventDefault();
        someBug();
        return false;
    }

}

