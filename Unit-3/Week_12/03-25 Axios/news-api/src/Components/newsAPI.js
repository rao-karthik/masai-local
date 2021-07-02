import Axios from 'axios';
import {apiKey} from './key'

const axios = Axios.create({
    baseURL: "https://newsapi.org"
})

export const getData = (input, page = 1, perPage = 20)=>{
    const config = {
        url: "/v2/everything",
        params: {
            q: input,
            page: page,
            perPage: perPage
        },
        headers: {
            "X-Api-Key" : apiKey()
        }
    };
    return axios(config);
}