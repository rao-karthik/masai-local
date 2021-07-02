var loginbtn = document.getElementById("loginForm");
loginbtn.addEventListener("submit", loginMe);

var password = document.getElementById("passwordLogin");
var username = document.getElementById("usernameLogin");

function loginMe(e){
    e.preventDefault();
    var userData = {
        password: password.value,
        username: username.value,
    }

    // console.log(userData)
    userData = JSON.stringify(userData);

    var url = "https://masai-api-mocker.herokuapp.com/auth/login";

    fetch(url, {
        method : "POST",
        body : userData,
        headers : {
            "Content-Type": "application/json"
        }
    })
    .then(function(response){
        return response.json();
    })
    .then(function(response){
        console.log(response)
        getMyData(response.token)
    })    
}

function getMyData(token){
    var url = "https://masai-api-mocker.herokuapp.com/user/" + username.value;
    fetch(url,{
        headers:{
            'Authorization': `Bearer ${token}`
        }
    })
    .then(function(response){
        return response.json()
    })
    .then(function(response){
        console.log(response);
    })
}