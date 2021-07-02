import Axios from 'axios';

const axios  = Axios.create({
    baseURL: process.env.REACT_APP_BASE_URL
})

export const getData = (input)=>{
    const config = {
        url: "/json/v1/1/search.php",
        method: "get",
        params: {
            s: input
        }
    };
    return axios(config);
}

export const specificData = (id)=>{
    const config = {
        url: `/json/v1/1/lookup.php/`,
        method: "get",
        params: {
            i: id
        }
    };
    return axios(config);
}