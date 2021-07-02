export const getData = ()=>{
    return fetch ("https://json-server-mocker-kartik.herokuapp.com/todos", {
        method: "GET",
        headers: {
            "Content-Type":"application/json"
        }
    })
    .then ((response)=>{
        let data = response.json();
        return data;
    })
}

export const addData = (payload)=>{
    return fetch ("https://json-server-mocker-kartik.herokuapp.com/todos", {
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(payload)
    })
    .then ((response)=>{
        let data = response.json();
        return data;
    })
}

export const toggleData = (id, status) => {
    return fetch (`https://json-server-mocker-kartik.herokuapp.com/todos/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            status: !status
        })
    })
    .then ((response)=>{
        let data = response.json();
        return data;
    })
}