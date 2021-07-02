import Axios from 'axios';

const axios = Axios.create({
    baseURL: "https://reqres.in/"
})

export const getData = ()=>{
    const config = {
        url: "/api/login",
        method: "post",
        data: {
            email: "eve.holt@reqres.in",
            password: "cityslicka"
        },
        headers: {
            "X-API-KEY" : "ABCDEF"
        }
    }
    return axios(config)
}