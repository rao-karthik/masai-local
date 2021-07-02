import Axios from 'axios';

const axios = Axios.create({
    baseURL: "https://api.github.com/"
})

export const getData = (input)=>{
    const config = {
        url: "/search/users",
        method: "get",
        params: {
        q: input
        }
    }
    return axios(config)
}