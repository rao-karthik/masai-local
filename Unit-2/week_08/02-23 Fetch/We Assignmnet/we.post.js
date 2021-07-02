var btn = document.getElementById("registerbtn");
btn.addEventListener("click", Register)

function Register(){
    var formData ={
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
        username: document.getElementById("username").value,
        mobile: document.getElementById("mobile").value,
        description: document.getElementById("description").value
    }
    
    formData = JSON.stringify(formData);
    console.log(formData)

    fetch("https://masai-api-mocker.herokuapp.com/auth/register",{
        method: "POST",
        body: formData,
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
}
