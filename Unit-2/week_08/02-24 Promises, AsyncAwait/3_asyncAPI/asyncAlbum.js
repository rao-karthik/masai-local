var albumbtn = document.getElementById("getAlbums");
albumbtn.addEventListener("click", albums);

async function albums(){
    let data = fetch ("http://jsonplaceholder.typicode.com/albums/1");

    var newData = await data;
    // console.log(newData);

    var received = await newData.json();
    received = JSON.stringify(received);
    localStorage.setItem("Albums", received);
    console.log(received);

    var getData = localStorage.getItem("Albums");
    getData = JSON.parse(getData);
    console.log(getData);

    var element = document.createElement("p");
    element.innerHTML = getData.title;

    var div = document.querySelector("div");
    div.append(element);
}