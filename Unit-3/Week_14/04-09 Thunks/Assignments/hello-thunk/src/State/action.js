import { LOGIN_FAILURE, 
	 	 LOGIN_REQUEST, 
		 LOGIN_SUCCESS, 

		 REGISTER_FAILURE, 
		 REGISTER_REQUEST, 
		 REGISTER_SUCCESS,

		 USER_REGISTERED_DETAILS_REQUEST,
         USER_REGISTERED_DETAILS_SUCCESS,
         USER_REGISTERED_DETAILS_FAILURE,

		 GITHUB_SEARCH_REQUEST,
		 GITHUB_SEARCH_SUCCESS,
		 GITHUB_SEARCH_FAILURE } from "./actionType";

import Axios from 'axios';

const searchAxios = Axios.create({
	baseURL: 'https://api.github.com/'
})

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

const userRegisteredDetailsRequest = (payload) => {
	return {
		type: USER_REGISTERED_DETAILS_REQUEST
	};
};
const userRegisteredDetailsSuccess = (token) => {
	return {
		type: USER_REGISTERED_DETAILS_SUCCESS,
		payload: token
	};
};
const userRegisteredDetailsFailure = (payload) => {
	return {
		type: USER_REGISTERED_DETAILS_FAILURE
	};
};

const githubSearchRequest = (payload) => {
	return {
		type: GITHUB_SEARCH_REQUEST
	};
};
const githubSearchSuccess = (payload) => {
	return {
		type: GITHUB_SEARCH_SUCCESS,
		payload
	};
};
const githubSearchFailure = (payload) => {
	return {
		type: GITHUB_SEARCH_FAILURE
	};
};

const githubUserSearch = ({page, searchInp})=>dispatch=>{
	dispatch(githubSearchRequest());

	const config = {
		url: "search/users",
		method: "get",
		params: {
		q: searchInp,
		page: page,
		per_page: 10
		}
	}
	searchAxios(config)
	.then(res=>{
		dispatch(githubSearchSuccess(res.data.items))
	})
	.catch(err=>{
		console.log(err)
		dispatch(githubSearchFailure(err))
	})
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

const getRegisteredUserDetails = ({ username, token })=>dispatch=>{
	dispatch(userRegisteredDetailsRequest());

	const config = {
		url: `/user/${username}`,
		method: 'get',
		headers: {
			'Authorization': `Bearer 543df68a7e142cedd07cb9d5b29ff339`
		}
	}
	userAxios(config)
	.then(res=>{
		console.log(res)
		dispatch(userRegisteredDetailsSuccess(res.data));
	})
	.catch(err=>{
		dispatch(userRegisteredDetailsFailure(err));
	})
}

export {registerRequest,
		registerSuccess,
		registerFailure,
	
		loginRequest,
		loginSuccess,
		loginFailure,

		userRegisteredDetailsRequest,
		userRegisteredDetailsSuccess,
		userRegisteredDetailsFailure,
	
		githubSearchRequest,
		githubSearchSuccess,
		githubSearchFailure,
	
		githubUserSearch,
		registerUser,
		loginUser,
		getRegisteredUserDetails }
