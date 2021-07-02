var delBtn = document.getElementById("delete");
delBtn.addEventListener("click", delData);

function delData(){
    var xhr = new XMLHttpRequest(); //creating XML Http request

    xhr.open('DELETE', "https://reqres.in/api/users/2"); // initializing xhr

    xhr.send(); // sending data to server

    xhr.onload = function(){
        console.log(xhr.response); //getting response from server
        console.log(xhr.status);
    }
}