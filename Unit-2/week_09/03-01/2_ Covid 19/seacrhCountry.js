var query = window.location.search;
// console.log(query);
var params = new URLSearchParams(query);
var countryy = params.get("c");
// console.log(countryy);

var getData = async ()=>{
    var data = await fetch(`https://coronavirus-19-api.herokuapp.com/countries/${countryy}`);

    var h1 = document.querySelector("h1");
    h1.innerHTML = countryy

    var response = await data.json()
    // console.log(response)

    var tr = document.createElement("tr");

    var country = document.createElement("td");
    country.innerHTML = response.country;
    tr.append(country);
    
    var cases = document.createElement("td");
    cases.innerHTML = response.cases;
    tr.append(cases);
    
    var todayCases = document.createElement("td");
    todayCases.innerHTML = response.todayCases;
    tr.append(todayCases);
    
    var deaths = document.createElement("td");
    deaths.innerHTML = response.deaths;
    tr.append(deaths);
    
    var todayDeaths = document.createElement("td");
    todayDeaths.innerHTML = response.todayDeaths;
    tr.append(todayDeaths);

    var table = document.querySelector("table");
    table.append(tr)
    
}
getData();