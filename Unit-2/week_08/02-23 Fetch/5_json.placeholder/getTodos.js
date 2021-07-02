var todosbtn = document.getElementById("gettodos");
todosbtn.addEventListener("click", getTodos);

function getTodos(){
    var url = "http://jsonplaceholder.typicode.com/todos";

    fetch(url)
    .then(function(response){
        // console.log(response.json());
        return response.json();
    })
    .then(function(response){
        console.log(response)
    })
}