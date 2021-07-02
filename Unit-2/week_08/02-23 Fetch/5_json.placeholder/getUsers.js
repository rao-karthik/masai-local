var userbtn = document.getElementById("getusers");
userbtn.addEventListener("click", getUsers);

function getUsers(){
    var url = "http://jsonplaceholder.typicode.com/users";

    fetch(url)
    .then(function(response){
        var res = response.json();
        console.log(res)
        // console.log(response.json());
        return res;
    })
    .then(function(response){
        console.log(response)
    })
}