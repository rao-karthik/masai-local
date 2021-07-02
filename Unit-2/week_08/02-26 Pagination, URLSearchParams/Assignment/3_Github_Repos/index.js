var formbtn = document.querySelector("form");
formbtn.addEventListener("submit", submitData);

async function submitData(event){
    event.preventDefault();
    var form = new FormData(event.target)
    var inp = form.get("input");
    // console.log(inp)

    let url = `users.html?user_name=${inp}`
    location.assign(url);
}