let password = document.querySelector(".password");
let confirmPassword = document.querySelector(".conf_pass");
let submit = document.querySelector("input[type=submit]");

let inputs = document.querySelectorAll("input");

let error = document.querySelector(".error");

submit.addEventListener("click", () => {
    if(password != confirmPassword) {
        error.innerHTML = "Passwords doesn't match";
    }
})

