var buttons = document.querySelectorAll("button");
for(var i = 0; i < buttons.length; i++){
    // console.log(buttons[i].innerHTML)
    buttons[i].addEventListener("click", takeMe)
}

function takeMe(){

    // let url = `entity.html?no=${1}`
    // location.assign(url)

    var num = event.target.innerHTML

    console.log(num)
    var params = new URLSearchParams();
    params.append("no", num)
    console.log(params.toString())
    var url = "entity.html";
    window.location.assign(url+ "?" + params.toString())
}