var loginBtn = document.querySelector("form");
loginBtn.addEventListener("submit", loginMe);

var emailId = document.getElementById("email");
var pass = document.getElementById("password");

function loginMe(event){
    event.preventDefault();

    var xhr = new XMLHttpRequest();

    xhr.open("POST", "https://reqres.in/api/login");

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