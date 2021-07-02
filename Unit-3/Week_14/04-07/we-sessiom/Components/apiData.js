import Axios from 'axios';

const axios = Axios.create({
  baseURL: 'https://json-server-mocker-kartik.herokuapp.com/'
});

export const getData = ()=>{
  const config = {
    url: '/todos',
    method: 'get'
  };
  return axios(config);
};