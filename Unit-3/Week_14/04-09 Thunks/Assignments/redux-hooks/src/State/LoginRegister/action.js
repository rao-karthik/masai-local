import { LOGIN_FAILURE, 
         LOGIN_REQUEST, 
         LOGIN_SUCCESS, 

         REGISTER_FAILURE, 
         REGISTER_REQUEST, 
         REGISTER_SUCCESS,
         LOGOUT_REQUEST
} from "./actionType";

import Axios from 'axios';

const userAxios = Axios.create({
    baseURL: 'https://masai-api-mocker.herokuapp.com/'
})

const registerRequest = (payload) => {
    return {
        type: REGISTER_REQUEST
    };
};
const registerSuccess = (token) => {
    return {
        type: REGISTER_SUCCESS
    };
};
const registerFailure = (payload) => {
    return {
        type: REGISTER_FAILURE
    };
};

const loginRequest = (payload) => {
    return {
        type: LOGIN_REQUEST
    };
};
const loginSuccess = (token) => {
return {
        type: LOGIN_SUCCESS,
        payload: token
    };
};
const loginFailure = (payload) => {
    return {
        type: LOGIN_FAILURE
    };
};

const logoutRequest = ()=>{
    return {
        type: LOGOUT_REQUEST
    }
}

const registerUser = (payload) =>dispatch=> {
    dispatch(registerRequest())

    const config = {
        url: '/auth/register',
        method: 'post',
        data: payload
    }
    userAxios(config)
    .then(res=>{
        dispatch(registerSuccess(res));
        })
    .catch(err=>{
        dispatch(registerFailure(err));
    })
};

const loginUser = (payload)=>dispatch=>{
    dispatch(loginRequest());

    const config = {
            url: '/auth/login',
        method: 'post',
        data: payload
    }
    userAxios(config)
    .then(res=>{
        console.log(res)
        dispatch(loginSuccess(res.data.token));
    })
    .catch(err=>{
        dispatch(loginFailure(err));
    })
}

export {registerUser,
        loginUser,
        logoutRequest }
    