var btnLogin = document.querySelector(".btn-login");
var form = document.querySelector("form");

btnLogin.addEventListener("click", (event) => {
    event.preventDefault();
    form.classList.add("form-hide")
});