import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_FAILURE, LOGOUT_REQUEST, LOGOUT_SUCCESS } from "./actionType";
import Axios from 'axios';

const axios = Axios.create({
  baseURL: "https://reqres.in/"
})

const loginRequest = ()=>{
  return {
    type: LOGIN_REQUEST
  }
}
const loginSuccess = (payload)=>{
  return {
    type: LOGIN_SUCCESS,
    payload
  }
}
const loginFailure = ()=>{
  return {
    type: LOGIN_FAILURE
  }
}
const logoutSuccess = ()=>{
  return {
    type: LOGOUT_SUCCESS
  }
}

const handleLoginReq = (payload)=>dispatch=>{
  dispatch(loginRequest())

  const { email, password } = payload;
  
  const config ={
    method: 'post',
    url: '/api/login',
    data: {
        email,
        password
    }
}
  axios(config)
  .then(res=>{
      dispatch(loginSuccess(res.data))
  })
  .catch(err=>{
      dispatch(loginFailure(err))
  })
}

export { handleLoginReq, logoutSuccess }