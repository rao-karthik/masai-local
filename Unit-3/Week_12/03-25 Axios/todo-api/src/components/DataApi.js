import Axios from 'axios'

const axios = Axios.create({
    baseURL: "https://json-server-mocker-kartik.herokuapp.com"
});

export const getData = ({page = 1, limit = 5})=>{
    return axios.get("/todos", {
        params: {
            _page: page,
            _limit: limit
        }
    })
    .then(res=>{
        return {
            data: res.data,
            link: res.headers.link
        }
    })
}

export const addData = ({title, status})=>{
    const config = {
        url: "/todos",
        method: "post",
        data: {
            title,
            status
        },
        headers: {
            "X-API-KEY" : "ABCDEF"
        }
    };

    return axios(config)    
}

export const toggleData = (id, status) => {

    const config = {
        url: `/todos/${id}`,
        method: "patch",
        data: {
            status: !status
        }
    }
    return axios(config)
}

export const deleData = (id)=>{
    return fetch (`https://json-server-mocker-kartik.herokuapp.com/userDetail/${id}`, {
        method: "DELETE"
    })
    .then ((response) => {
        return response.json();
    })
}