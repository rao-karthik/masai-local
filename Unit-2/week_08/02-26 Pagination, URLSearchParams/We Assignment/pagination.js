var btn = document.getElementById("btn");
btn.addEventListener("click", showButtons)

function showButtons(){
    var btndiv = document.querySelector("#btndiv"); // also we can use ""
    btndiv.innerHTML = null;
    
    var selec = document.getElementById("items").value
    // console.log(val)

    let buttons = selec/25

    for (var i = 1; i <= buttons; i++){
        var bttn = document.createElement("button")
        bttn.innerHTML = i;
        btndiv.append(bttn);
        bttn.setAttribute("id", `button${i}`) // adding id to buttons
        bttn.onclick = showData; // adding onclick functionality to bttn
    }
} 

async function showData(){
    var datadiv = document.getElementById("datadiv"); 
    datadiv.innerHTML = "";

    var currentBtn = event.target.id;

    let data = fetch ("http://jsonplaceholder.typicode.com/posts");

    let response = await data;

    let allData = await response.json();
    console.log(allData)

    var start;
    var end;
    if (currentBtn=="button1"){
        start = 0;
        end = 24;
    }
    else if (currentBtn=="button2"){
        start = 25;
        end = 49;
    }
    else if (currentBtn=="button3"){
        start = 50;
        end = 74;
    }
    else if (currentBtn=="button4"){
        start = 75;
        end = 99;
    }
    // console.log(currentBtn, start, end);

    for(var i = start; i <= end; i++){
        var node = document.createElement("p");
        node.innerText = i+1 + ". " + allData[i].title

        datadiv.append(node)
    }
}