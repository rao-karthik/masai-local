fetch("https://reqres.in/api/users?page=2")
.then((response)=>{
    var res = response.json();
    return res;
})
.then((response)=>{
    console.log(response.data);
    var data = response.data;
    var div = document.querySelector("div");
    for(var i = 0; i < data.length; i++){
        var ele = document.createElement("p");
        ele.innerHTML = response.data[i].email + " | " + response.data[i].first_name + " | " + response.data[i].last_name + " | " + response.data[i].avatar
        div.append(ele)
    }
})