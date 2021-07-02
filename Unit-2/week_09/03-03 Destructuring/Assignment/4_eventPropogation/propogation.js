var elements = document.querySelectorAll("div, p, a");

for(let el of elements){
    el.addEventListener("click", showdata)
}

function showdata(){
    var h1 = document.querySelector("h1");
    h1.innerHTML = this.id + " is clicked";
    event.stopPropagation()
}