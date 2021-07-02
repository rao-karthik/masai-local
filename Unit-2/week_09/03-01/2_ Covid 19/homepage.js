window.onload = ()=>{
    var allbtn = document.getElementById("all");
    var singlebtn = document.getElementById("single");

    allbtn.addEventListener("click", allCountry);
    singlebtn.addEventListener("click", singleCountry)
}

fetch("https://coronavirus-19-api.herokuapp.com/all")
.then((response)=>{
    var data = response.json()
    // console.log(data)
    return data;
})
.then((response)=>{
    var data = response;
    // console.log(data);

    var cases = document.getElementById("cases");
    cases.innerHTML = data.cases;

    var deaths = document.getElementById("deaths");
    deaths.innerHTML = data.deaths;

    var recovered = document.getElementById("recovered");
    recovered.innerHTML = data.recovered;

})


var allCountry = ()=>{
    location.href = `allCountry.html`
}
var singleCountry = ()=>{
    var country = document.getElementById("nameCountry").value
    location.href = `seacrhCountry.html?c=${country}`
}