let query = window.location;
console.log(query)

// var newurl = new URL(query)

var url = new URLSearchParams(query.search);
// console.log(url)

let number = url.get("no");
// console.log(number)

if (query == null){
    query = "";
}

var print = document.getElementById("print");

var url = document.createElement("p")
url.innerHTML =  "URL - " + query.href;

var numb = document.createElement("p")
numb.innerHTML =  "no - " + number;

print.append(url, numb);