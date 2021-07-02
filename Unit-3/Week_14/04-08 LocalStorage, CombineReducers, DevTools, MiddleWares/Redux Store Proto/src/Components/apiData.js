import Axios from 'axios';

const axios = Axios.create({
    baseURL: 'https://json-server-mocker-kartik.herokuapp.com/'
})

const loginAxios = Axios.create({
    baseURL: "https://reqres.in/"
})

export const getData = ()=>{
    const config = {
        method: 'get',
        url: '/todos',
    }
    return axios(config);
}

export const postData = (title, status)=>{
    const config ={
        method: 'post',
        url: '/todos',
        data: {
            title,
            status
        }
    }
    return axios(config);
}

export const indTodoData = (id)=>{
    const config = {
        method: 'get',
        url: `/todos/${id}`,
    }
    return axios(config);
}

export const toggleStatus = (id, status)=>{
    const config ={
        method: 'patch',
        url: `/todos/${id}`,
        data: {
           status: !status
        }
    }
    return axios(config);
}

export const deleteData = (id)=>{
    const config = {
        method: 'delete',
        url: `/todos/${id}`
    }
    return axios(config);
}

export const editTitle = (id, updatedTitle)=>{
    const config ={
        method: 'patch',
        url: `/todos/${id}`,
        data: {
           title: updatedTitle
        }
    }
    return axios(config);
}

export const loginData = (email, password)=>{
    const config ={
        method: 'post',
        url: '/api/login',
        data: {
            email,
            password
        }
    }
    return loginAxios(config);
}