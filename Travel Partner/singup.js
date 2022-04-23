//pass toggle
const togglePass = document.querySelector('#showPass');
const password = document.querySelector("#password");
var hide = document.getElementById("showPass");

togglePass.addEventListener('click', function (e) {
    //toggling type attribute of the input
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password'; //ternary
    password.setAttribute('type', type);
    //toggling the content
    if (hide.innerText === "Show") {
        hide.innerText = "Hide";
    }
    else if (hide.innerText === "Hide") {
        hide.innerText = "Show";
    }
    else {
        hide.innerText = "Show";
    }
});
