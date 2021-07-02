import Axios from 'axios';

const axios = Axios.create({
    baseURL: "https://json-server-mocker-kartik.herokuapp.com/"
})

export const getData = ()=>{
    const config = {
        method: "get",
        url: "/items"
    }
    return axios(config);
}

export const toggleQuant = (id, count)=>{
    const config = {
        method: "patch",
        url: `/items/${id}`,
        data: {
            quantity: count
        }
    }
    return axios(config);
}

export const incQuant = (id, count)=>{
    const config = {
        method: "patch",
        url: `/items/${id}`,
        data: {
            quantity: count+1
        }
    }
    return axios(config);
}

export const decQuant = (id, count)=>{
    const config = {
        method: "patch",
        url: `/items/${id}`,
        data: {
            quantity: count-1
        }
    }
    return axios(config);
}