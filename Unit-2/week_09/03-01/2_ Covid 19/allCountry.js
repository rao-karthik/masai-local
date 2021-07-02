var getData = async ()=>{
    let data = await fetch("https://coronavirus-19-api.herokuapp.com/countries");
    // console.log(data)

    let response = await data.json()
    console.log(response)

    for(var i = 0; i < response.length; i++){
        var tr = document.createElement("tr");

        var country = document.createElement("td");
        country.innerHTML = response[i].country;
        tr.append(country);
        
        var cases = document.createElement("td");
        cases.innerHTML = response[i].cases;
        tr.append(cases);
        
        var todayCases = document.createElement("td");
        todayCases.innerHTML = response[i].todayCases;
        tr.append(todayCases);
        
        var deaths = document.createElement("td");
        deaths.innerHTML = response[i].deaths;
        tr.append(deaths);
        
        var todayDeaths = document.createElement("td");
        todayDeaths.innerHTML = response[i].todayDeaths;
        tr.append(todayDeaths);

        var table = document.querySelector("table");
        table.append(tr)
    }
}
getData()