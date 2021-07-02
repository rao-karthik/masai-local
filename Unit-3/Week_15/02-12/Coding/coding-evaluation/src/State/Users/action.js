import { GET_POSTS_FAILURE, GET_POSTS_REQUEST, GET_POSTS_SUCCESS, GET_USERS_FAILURE, GET_USERS_REQUEST, GET_USERS_SUCCESS } from './actionType';
import Axios from 'axios';

const axios  = Axios.create({
    baseURL: 'https://json-server-mocker-kartik.herokuapp.com/'
})

const getPostsRequest =()=>{
    return {
        type: GET_POSTS_REQUEST
    }
}
const getPostsSuccess =(payload)=>{
    return {
        type: GET_POSTS_SUCCESS,
        payload
    }
}
const getPostsFailure =()=>{
    return {
        type: GET_POSTS_FAILURE
    }
}

const getUsersRequest =()=>{
    return {
        type: GET_USERS_REQUEST
    }
}
const getUsersSuccess =(payload)=>{
    return {
        type: GET_USERS_SUCCESS,
        payload
    }
}
const getUsersFailure =()=>{
    return {
        type: GET_USERS_FAILURE
    }
}

const handlePostsReq = ()=>dispatch=>{
    dispatch(getPostsRequest())
    
    const config = {
        method: 'get',
        url: '/posts'
    }
    axios(config)
    .then(res=>{
        // console.log(res.data);
        dispatch(getPostsSuccess(res.data))
    })
    .catch(err=>{
        dispatch(getPostsFailure(err))
    })
}

const handleUsers = ()=>dispatch=>{
    dispatch(getUsersRequest())
    
    const config = {
        method: 'get',
        url: '/users'
    }
    axios(config)
    .then(res=>{
        // console.log(res.data);
        dispatch(getUsersSuccess(res.data))
    })
    .catch(err=>{
        dispatch(getUsersFailure(err))
    })
  }

export { handlePostsReq, handleUsers }