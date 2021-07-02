var postbtn = document.getElementById("getposts");
postbtn.addEventListener("click", getPosts);

function getPosts(){
    var url = "http://jsonplaceholder.typicode.com/posts";

    fetch(url)
    .then(function(response){
        // console.log(response.json());
        return response.json();
    })
    .then(function(response){
        console.log(response)
    })
}