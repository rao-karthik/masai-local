var xhrbtn = document.getElementById("xhrbtn");
xhrbtn.addEventListener("click", getData);

function getData(){
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://reqres.in/api/users/2");

    xhr.send();

    xhr.onload = function(){
        var res = xhr.response;
        res = JSON.parse(res);
        console.log(res.data);
    }
}