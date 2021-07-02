var total = document.getElementById("total");
total.addEventListener("click", getTotal);

var currentStatus = document.getElementById("currentStatus");
currentStatus.addEventListener("click", currentData);

var affectedCountries = document.getElementById("affectedCountries");
affectedCountries.addEventListener("click", affectedData);

var dataDiv = document.getElementById("dataDiv");

function getTotal(){
    dataDiv.innerHTML = null;

    fetch("https://covid2019-api.herokuapp.com/v2/total")
    .then((response)=>{
        let data = response.json();
        // console.log(data);
        return data;
    })
    .then((response)=>{
        // console.log(response.data)
        let recData = response.data;

        for(key in recData){
            let ele = document.createElement("p");
            ele.innerHTML = `${key}- ${recData[key]}`;
    
            dataDiv.append(ele)
        }
    })
}

async function currentData(){
    dataDiv.innerHTML = null;

    let data = await fetch("https://covid2019-api.herokuapp.com/current");

    let response = await data.json();
    console.log(response);

    for(let key in response){
        let div = document.createElement("div");
        let coun = document.createElement("h4");
        coun.innerHTML = `${key}`;
        div.append(coun);
        for(data in response[key]){
            let ele = document.createElement("p");
            ele.innerHTML = `${data}- ${response[key][data]}`
            div.append(ele);
        }
        dataDiv.append(div)
    }
}

async function affectedData(){
    dataDiv.innerHTML = null;

    let data = await fetch("https://covid2019-api.herokuapp.com/countries");

    let response = await data.json();
    // console.log(response)
    let recData = response.countries
    // console.log(recData)

    for(let key in recData){
        let ele = document.createElement("p");
        ele.innerHTML = `${+key + 1}- ${recData[key]}`;

        dataDiv.append(ele)
    }
}