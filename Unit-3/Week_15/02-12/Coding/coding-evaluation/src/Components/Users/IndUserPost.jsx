import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handlePostsReq } from '../../State/Users/action';
import { userReducer } from '../../State/Users/userReducer';

export const IndUserPosts = () => { 
    
    const dispatch = useDispatch();
    const posts = useSelector(state=> state.userRed.posts)
    console.log(posts)

    useEffect(()=>{
        dispatch(handlePostsReq())
    },[])
    
    return (
        <div>
            {
                posts.map(post=> <div>
                    <p>Title: {post.post_title}</p>
                    <p>Body: {post.post_body}</p>
                    <p>Author Id: {post.author_id}</p>
                    <p>Author Username: { post.author_username }</p>
                </div>)
            }
        </div>
    )
}
