//Event Propogation

// child to parent- Event Bubbling
// parent to child- Event Capturing

function showAlert(){
    alert('You clicked ' +  this.tagName)
    console.log(this.id)
    event.stopPropagation();
}


var elements = document.querySelectorAll("div, p, a");

for(let el of elements){
    el.addEventListener("click", showAlert)
}