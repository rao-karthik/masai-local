var btn = document.getElementById("search");
btn.addEventListener("click", getData);

async function getData(){
    var country = document.getElementById("inp").value;

    var data = await fetch("https://covid2019-api.herokuapp.com/v2/current");
    var response = await data.json()
    // console.log(response.data)
    var data = response.data;
    
    var search = data.find((el)=>{
        return el.location == country;
    });
    console.log(search)

    var dataDiv = document.getElementById("dataDiv")
    // console.log(dataDiv)
    dataDiv.innerHTML = ""

    // var ele = document.createElement("p")
    // ele.innerHTML ="Location- " + search.location + " | Confirmed- " + search.confirmed + " | Deaths- " +  search.deaths +  " | Recovered- " + search.recovered+ " | Active- " + search.active

    // dataDiv.append(ele)

    for(key in search){
        let ele = document.createElement("p");
        ele.innerHTML = `${key}- ${search[key]}`

        dataDiv.appendChild(ele)
    }
}