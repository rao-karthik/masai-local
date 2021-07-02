var fetchbtn = document.getElementById("fetchbtn");
fetchbtn.addEventListener("click", getData);

function getData(){
    var url = "https://reqres.in/api/users/2";

    fetch(url)
    .then(function(response){
        var res = response.json();
        // console.log(res)
        return res;
    })
    .then(function(response){
        console.log(response.data);
    })
}