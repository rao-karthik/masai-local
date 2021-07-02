var loginbtn = document.getElementById("loginbtn");
loginbtn.addEventListener("click", Login);

function Login(){
    var formData ={
        password:document.getElementById("passwordLogin").value,
        username:document.getElementById("usernameLogin").value,
    }
    formData = JSON.stringify(formData);

    fetch("https://masai-api-mocker.herokuapp.com/auth/login",{
        method: "POST",
        body: formData,
        headers: {
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
    fetch("https://masai-api-mocker.herokuapp.com/user/qwertgb",{
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