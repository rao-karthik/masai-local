var todobtn = document.getElementById("getTodos");
todobtn.addEventListener("click", todos);

async function todos(){
    let data = fetch ("http://jsonplaceholder.typicode.com/todos/1");

    var newData = await data;
    // console.log(newData);

    var received = await newData.json();
    received = JSON.stringify(received);
    localStorage.setItem("Todos", received);
    console.log(received);

    var getData = localStorage.getItem("Todos");
    getData = JSON.parse(getData);
    console.log(getData);

    var element = document.createElement("p");
    element.innerHTML = getData.title;

    var div = document.querySelector("div");
    div.append(element);
}