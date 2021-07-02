import Axios from 'axios';

const axios = Axios.create({
    baseURL: "https://json-server-mocker-kartik.herokuapp.com"
});

export const getData = (page = 1, limit = 5)=>{
    const config = {
        url: "/userDetail",
        method: "get",
        params: {
            _page: page,
            _limit: limit
        }
    };
    return axios (config);
}

export const postData = (payload)=>{

    const config = {
        url: "/userDetail",
        method: "post",
        data: payload,
        headers: {
            "X-API-KEY" : "ABCDEF"
        }
    }

    return axios(config);
}

export const deleteData = (id)=>{
    const config = {
        url: `/userDetail/${id}`,
        method: "delete"
    }
    return axios(config);
}