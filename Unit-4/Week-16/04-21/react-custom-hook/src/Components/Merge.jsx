import React, { useState } from 'react'
import { useMergeState } from '../CustomHooks/useMergeState';
import { v4 as uuid } from 'uuid';

const initState = {
    username: '',
    email: '',
    password: ''
}

export const Merge = () => {
    
    const [ state, handleState ] = useMergeState(initState);

    // const [ input, setInput ] = useState(initState);
    // const [ data, setData ] = useState([]);

    // const [ showEdit, setShowEdit ] = useState(false);

    // const handleChange = (e)=>{
    //     const { name, value } = e.target;
    //     const updated = {
    //         ...input,
    //         [name] : value
    //     };
    //     setInput(updated);
    // };
    
    // const handleEdit = ()=>{
    //     setShowEdit(!showEdit);
    // }

    // const handleAdd = ()=>{
    //     const payload = [
    //         ...data,
    //         {
    //             ...input,
    //             id: uuid()
    //         }
    //     ];
    //     setData(payload);
    //     setInput(initState)
    // };
    
    return (
        <>
            <div>
                <input type="text" value={state.username} name="username" placeholder="username" onChange={handleState} />
                <input type="email" value={state.email} name="email" placeholder="email" onChange={handleState} />
                <input type="password" value={state.password} name="password" placeholder="password" onChange={handleState} />
                <button>Add</button>
            </div>
            <div>
                <h3>{state.username}</h3>
                <p>{state.email}</p>
                <p>{state.password}</p>
            </div>
            {/* <div>
                {
                    data.map(item=>(
                        <div key={item.id} style={{border:"1px solid black", margin:"10px"}} >
                            <p>Username: {item.username} <span style={{fontSize:"12px", cursor:"pointer"}} class="material-icons-round">edit</span></p>
                            {!showEdit? <p>Email: {item.email} <span style={{fontSize:"12px", cursor:"pointer"}} class="material-icons-round" onClick={handleEdit}>edit</span></p> : 
                            <>
                                <input value={item.email} type="text" />
                                <button>Edit</button>
                            </> }
                            <p>password: {item.password} <span style={{fontSize:"12px", cursor:"pointer"}} class="material-icons-round">edit</span></p>
                        </div>
                    ))
                }
            </div> */}
        </>
    )
}
