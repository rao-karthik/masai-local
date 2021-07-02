var postbtn = document.getElementById("getPosts");
postbtn.addEventListener("click", posts);

async function posts(){
    let data = fetch ("http://jsonplaceholder.typicode.com/posts/1");

    var newData = await data;
    // console.log(newData);

    var received = await newData.json();
    received = JSON.stringify(received);
    // console.log(received)
    localStorage.setItem("Posts", received);

    var getData = localStorage.getItem("Posts");
    getData = JSON.parse(getData);
    console.log(getData)

    var element = document.createElement("p");
    element.innerHTML = getData.body;

    var div = document.querySelector("div");
    div.append(element);
}