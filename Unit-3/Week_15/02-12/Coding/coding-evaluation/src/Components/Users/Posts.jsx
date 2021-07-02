import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { handlePostsReq, handleUsers } from '../../State/Users/action';
import { userReducer } from '../../State/Users/userReducer';
import { IndUserPosts } from './IndUserPost'

export const Posts = () => { 
    
    const dispatch = useDispatch();
    const users = useSelector(state=> state.userRed.users)
    // console.log(posts)

    useEffect(()=>{
        dispatch(handlePostsReq())
        dispatch(handleUsers())
    },[])
    
    return (
        <div>
            {
                // users.map(post=> <div><Link to:''>{}</Link>
                // </div>)
            }
            <IndUserPosts />
        </div>
    )
}
