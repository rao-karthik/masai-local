import Axios from 'axios';

const axios = Axios.create({
    baseURL: 'https://json-server-mocker-kartik.herokuapp.com/'
})

export const getData = (page)=>{
    const config = {
        url: '/product',
        method: "get",
        params: {
            _page: page
        }
    }
    return axios(config);
}

export const postData = (payload)=>{
    const config = {
        url: '/product',
        method: postData,
        params: {
            data: payload,
            headers: {
                "X-API-KEY" : "ABCDEF"
            }
        }
    }
    return axios(config)
}