var putBtn = document.getElementById("put");
putBtn.addEventListener("click", putData);

function putData(){
    var xhr = new XMLHttpRequest(); //creating XML Http request

    xhr.open('PUT', "https://reqres.in/api/users/2"); // initializing xhr

    var body = { // creating body in which data will be entered
        name: "morpheus",
        job: "zion resident"
    }

    body = JSON.stringify(body); //coverting data in body to JSON

    xhr.send(body); // sending data to server

    xhr.onload = function(){
        console.log(xhr.response); //getting response from server
        console.log(xhr.status)
    }
}