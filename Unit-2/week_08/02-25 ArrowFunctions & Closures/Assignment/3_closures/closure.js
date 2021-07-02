function findAvg(){
    function Avg(class7){
        return (class8)=>{
            return (class9)=>{
                return(class10)=>{
                    var average = (class7 + class8 + class9 + class10) / 4;
                    return average;
                }
            }
        }
    }

    var class7 = document.getElementById("class7").value;
    class7 = Number(class7);
    var class8 = document.getElementById("class8").value;
    class8 = Number(class8);
    var class9 = document.getElementById("class9").value;
    class9 = Number(class9);
    var class10 = document.getElementById("class10").value;
    class10 = Number(class10);

    var c7 = Avg(class7);
    var c8 = c7(class8);
    var c9 = c8(class9);
    var c10 = c9(class10);
    console.log(c10)
    
    var div = document.querySelector("div");
    var ele = document.createElement("h1");
    ele.innerHTML = c10 + "%";
    div.append(ele);
}

var btn = document.querySelector("button");
btn.addEventListener("click", findAvg);