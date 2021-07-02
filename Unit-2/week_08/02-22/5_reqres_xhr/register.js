var registerBtn = document.querySelector("form");
registerBtn.addEventListener("submit", registerMe);

var emailId = document.getElementById("email");
var pass = document.getElementById("password");

function registerMe(event){
    event.preventDefault();

    var xhr = new XMLHttpRequest();

    xhr.open("POST", "https://reqres.in/api/register");

    xhr.setRequestHeader('Content-Type', 'application/json;charset=utf-8');

    var body = {
        email: email.value,
        password: pass.value
    }

    body = JSON.stringify(body);

    xhr.send(body);

    xhr.onload = function(){
        console.log(xhr.response)
    }
}