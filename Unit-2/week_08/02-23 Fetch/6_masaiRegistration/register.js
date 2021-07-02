var registerbtn = document.getElementById("registerForm");
registerbtn.addEventListener("submit", registerMe);

var myname = document.getElementById("name");
var email = document.getElementById("email");
var password = document.getElementById("password");
var username = document.getElementById("username");
var mobile = document.getElementById("mobile");
var description = document.getElementById("description");

function registerMe(e){
    e.preventDefault();
    var userData ={
        name: myname.value,
        email: email.value,
        password: password.value,
        username: username.value,
        mobile: mobile.value,
        description: description.value
    }
    
    userData = JSON.stringify(userData);
    console.log(userData)

    fetch("https://masai-api-mocker.herokuapp.com/auth/register",{
        method: "POST",
        body: userData,
        headers: {
            "Content-Type": "application/json"
        }
    }) //initialize and send
    .then(function(response){
        
        return response.json()
    })
    .then(function(response){
        console.log(response)
    })
    .catch(function(){
        
    })
}