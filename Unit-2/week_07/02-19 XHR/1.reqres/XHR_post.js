var postBtn = document.getElementById("post");
postBtn.addEventListener("click", postData)

function postData(){
    var xhr = new XMLHttpRequest(); //creating XML Http request

    xhr.open('POST', "https://reqres.in/api/users"); // initializing xhr

    var body = { //adding data in object form
        name: "morpheus",
        job: "leader"
    }

    body = JSON.stringify(body);
    console.log("body") //converting data in JSON format

    // xhr.send(body); // sending data to server

    // xhr.onload = function(){
    //     console.log(xhr.response); //getting response from server
    // }
}
