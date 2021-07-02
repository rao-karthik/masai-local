var photobtn = document.getElementById("getPhotos");
photobtn.addEventListener("click", photos);

async function photos(){
    let data = fetch ("http://jsonplaceholder.typicode.com/photos/1");

    var newData = await data;
    // console.log(newData);

    var received = await newData.json();
    received = JSON.stringify(received);
    localStorage.setItem("Photos", received);
    // console.log(received);

    var getData = localStorage.getItem("Photos");
    getData = JSON.parse(getData);
    console.log(getData)

    var element = document.createElement("p");
    element.innerHTML = getData.title + " | " + getData.url + " | " + getData.thumbnailUrl;

    var div = document.querySelector("div");
    div.append(element);
}