import Axios from 'axios';

const axios = Axios.create({
    baseURL: process.env.REACT_APP_BASE_URL
})

export const getData = ()=>{
    const config ={
        url: "/masaiUser",
        method: 'get'
    }
    return axios(config);
}

export const postData = (payload)=>{
    const config ={
        url: "/masaiUser",
        method: 'post',
        body: payload
    }
}