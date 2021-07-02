window.onload = function() {
    var form = document.querySelector("form");
    form.addEventListener("submit", personData);

    x = setInterval(()=>{
        counter++;
        timer.innerHTML = counter;
    }, 1000)
}
var counter = 0;
var x;
var timer = document.getElementById("timer");

function data(name, age, number, hobby, favMov, favSpo, favHolDest){
    https://api.github.com/users//repos`  this.name = name;
    this.age = age;
    this.number = number;
    this.hobby = hobby;
    this.favouriteMovie = favMov;
    this.favouriteSports = favSpo;
    this.favouriteHolidayDestination = favHolDest;
}

function personData(event){
    event.preventDefault();
    var form = new FormData(event.target);
    var myname = form.get("name")
    var age = form.get("age")
    var number = form.get("number")
    var hobby = form.get("hobby")
    var favMov = form.get("favMov")
    var favSpo = form.get("favSpo")
    var favHolDest = form.get("favHolDest")

    var person = new  data(myname, age, number, hobby, favMov, favSpo, favHolDest)
    // console.log(person);

    var personD = [];
    personD.push(person);
    // console.log(personD)

    if(counter < 15){
        var output = document.querySelector("#output");
        output.innerHTML = "CONGRATULATIONS";

        var tr = document.createElement("tr")

        var nam = document.createElement("td");
        nam.innerHTML = person.name;

        var ag = document.createElement("td");
        ag.innerHTML = person.age;

        var num = document.createElement("td");
        num.innerHTML = person.number;
        
        var hob = document.createElement("td");
        hob.innerHTML = person.hobby;

        var favM = document.createElement("td");
        favM.innerHTML = person.favouriteMovie;
        
        var favS = document.createElement("td");
        favS.innerHTML = person.favouriteSports;

        var favH = document.createElement("td");
        favH.innerHTML = person.favouriteHolidayDestination;

        var table = document.querySelector("table")
        tr.append(nam, ag, num, hob, favM, favS, favH);
        table.append(tr)
    }
    else if (counter > 15) {
        alert("You Lost");
        
        var newData = JSON.stringify(personD);
        localStorage.setItem("Form Data", newData)
    }
    clearInterval(x);
} 