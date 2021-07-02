var getBtn = document.getElementById("get");
getBtn.addEventListener("click", getData);

function getData(){
    var xhr = new XMLHttpRequest(); //creating XML Http request

    xhr.open('GET', "https://reqres.in/api/users/1"); // initializing xhr

    xhr.send(); // sending data to server

    xhr.onload = function(){
        // console.log(xhr.status)
        // console.log(xhr.response);
        var data = xhr.response; // storing the data sent by server
        data = JSON.parse(data); // converting JSON data to object
        var objData = data.data;
        console.log(objData)
    }
}