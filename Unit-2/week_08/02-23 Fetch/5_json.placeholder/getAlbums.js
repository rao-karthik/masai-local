var albumbtn = document.getElementById("getalbums");
albumbtn.addEventListener("click", getAlbums);

function getAlbums(){
    var url = "http://jsonplaceholder.typicode.com/albums";

    fetch(url)
    .then(function(response){
        // console.log(response.json());
        return response.json();
    })
    .then(function(response){
        console.log(response)
    })
}