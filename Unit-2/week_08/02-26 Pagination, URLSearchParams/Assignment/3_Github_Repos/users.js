let query = window.location.search;
var url = new URLSearchParams(query);

let user_name = url.get("user_name");

if (query == null){
    query = "";
}

var getData = async ()=>{
    var data = fetch("https://api.github.com/users/" + user_name)

    var response = await data

    var recData = await response.json();
    return recData;
}

var recData = getData()
// console.log(recData)
.then((response)=>{
    let data = response;
    console.log(data)
    
    var datadiv = document.getElementById("data");

    var url = document.createElement("p");
    url.innerHTML= "URL - " + data.url;

    var login = document.createElement("p");
    login.innerHTML= "Login - " + data.login;

    var id = document.createElement("p");
    id.innerHTML= "ID - " + data.id;
    
    var node_id = document.createElement("p");
    node_id.innerHTML= "Node ID - " + data.node_id;

    var created_at = document.createElement("p");
    created_at.innerHTML= "Created at - " + data.created_at;

    var followers = document.createElement("p");
    followers.innerHTML= "Followers - " + data.followers;

    var avatar = document.createElement("p");
    avatar.innerHTML= "Avatar - " + data.avatar_url;

    datadiv.append(url, login, id, node_id, created_at, followers, avatar)
})
