import { useState, useEffect } from "react";
import { GithubInput } from "./GithubInput";
import { getData } from './githubAPI';
import { GithubDisp } from "./GithubDisp";

export const Github = () => {
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isErr, setIsErr] = useState(false);
    const [users, setUsers] = useState([]);
    
    const handleChange = (e) => {
        const { value } = e.target;
        setInput(value);
    };

    const handleGetData = ()=>{
        setIsLoading(true);
        setIsErr(false);
        getData(input)
        .then(res=>{
        const data = res.data.items;
        setUsers(data);
        console.log(data)
        })
        .catch (err=>{
        setIsErr(true);
        })
        .finally (()=>{
        setIsLoading(false);
        })
    }
    
    const handleSearch = ()=>{
        handleGetData();
    }

    // useEffect(()=>{
    //     handleGetData()  
    // }, [])

    return (
        <div>
            <GithubInput handleChange={handleChange} handleSearch = {handleSearch} isLoading = {isLoading} />

            {isErr ? "Please fill in text" : null}

            <GithubDisp data = {users} />
        </div>
    );
};
