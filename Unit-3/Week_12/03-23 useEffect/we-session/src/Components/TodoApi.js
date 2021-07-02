export const getTodo = ()=> {
    return fetch ("https://json-server-mocker-masai.herokuapp.com/tasks", {
        method: "GET",
        headers: {
            "Contetnt-Type" : "application/json"
        }
    })
    .then((res)=> res.json());
}

