async function getData(){
    var data = fetch("http://jsonplaceholder.typicode.com/todos");

    let response = await data;

    var allData = await response.json();
    return allData;
}

var data = getData()
.then((response)=>{
    let dataRec = response;
    // console.log(dataRec)
    var data = dataRec.length;
    var buttons = dataRec.length/10;

    for(var i = 1; i <= buttons; i++){
        var btndiv = document.getElementById("buttons");
        var bttn = document.createElement("button");
        bttn.innerHTML = i;
        btndiv.append(bttn);
        bttn.setAttribute("id", `button${i}`);
        bttn.onclick = showData;
    }
    
    function showData(){
        var datadiv = document.getElementById("datadiv"); 
        datadiv.innerHTML = "";

        console.log(event.target.id);
        var currentBtn = event.target.id;

        var start = 0;
        var end = -1;
        var str = [];
        var arr = [];
        for(var i = 0; i < buttons; i++){
            if(currentBtn == `button${[i+1]}`){
                start = i + "0";
                start = Number(start);
                end = i + "9";
                end = Number(end)
            }
        }
        console.log(start)
        console.log(end)

        // if (currentBtn=="button1"){
        //     start = 0;
        //     end = 9;
        // }
        // else if (currentBtn=="button2"){
        //     start = 10;
        //     end = 19;
        // }
        // else if (currentBtn=="button3"){
        //     start = 20;
        //     end = 29;
        // }
        // else if (currentBtn=="button4"){
        //     start = 30;
        //     end = 39;
        // }
        // else if (currentBtn=="button5"){
        //     start = 40;
        //     end = 49;
        // }
        // else if (currentBtn=="button6"){
        //     start = 50;
        //     end = 59;
        // }
        // else if (currentBtn=="button7"){
        //     start = 60;
        //     end = 69;
        // }
        // else if (currentBtn=="button8"){
        //     start = 70;
        //     end = 79;
        // }
        // else if (currentBtn=="button9"){
        //     start = 80;
        //     end = 89;
        // }
        // else if (currentBtn=="button10"){
        //     start = 90;
        //     end = 99;
        // }

        for(var i = start; i <= end; i++){
            var node = document.createElement("p");
            node.innerText = i+1 + ". " + dataRec[i].title
    
            datadiv.append(node)
        }
    }
})

