import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { handleLoginReq } from "../../State/Auth/action";
import Axios from 'axios';

const axios = Axios.create({
    baseURL: 'https://json-server-mocker-kartik.herokuapp.com/'
})

const initData = {
  email : '',
  password: ''
}

export const Login = ()=>{

  const [ loginInp, setLoginInp ] = useState(initData);
  const userData = useSelector(state=> state.logRed.userData);
  console.log(userData)

  const dispatch = useDispatch();

  const handleChange = (e)=>{
    const { name, value } = e.target;
    const updated = {
      ...loginInp,
      [name] : value
    };
    setLoginInp(updated);
  }

  const handleLogin = ()=>{
    dispatch(handleLoginReq(loginInp))
  }

  // useEffect(()=>{
  //   dispatch(handleLoginReq())
  //   // loginReq()
  // },[])
  
  return (
    <div>
      <input type="text" name="username" value={loginInp.username} placeholder="Enter Username" onChange={handleChange} />
      <input type="text" name="password" value={loginInp.password} placeholder="Enter Passwprd" onChange={handleChange} />
      <button onClick={handleLogin} >Sign In</button>
    </div>
  )
}