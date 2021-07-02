import React from 'react';
import { UserForm } from './UserForm';
import {v4 as uuid} from 'uuid';
import { UserOutput } from './UserOutput';
import {getData, postData, deleteData} from './userApi';

const initDetails = {
    name: '',
    age: '',
    address: '',
    department: 'HR',
    salary: '',
    maritalStatus: false,
}

export const UserDetails = () => {

    const [userDetail, setUserDetail] = React.useState(initDetails);
    const [allUserDetail, setAllUserDetail] = React.useState([]);

    const {name, age, address, department, salary, maritalStatus} = userDetail;

    const [page, setPage] = React.useState(1);
    const limit = 5;

    const handleChange = (e)=>{
        const {name, value, type, checked} = e.target;

        const val = type === "checkbox" ? checked : value;

        setUserDetail({
            ...userDetail,
            [name] : val
        })
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        const payload = {
            id: uuid(),
            name,
            age,
            address,
            department,
            salary,
            maritalStatus
        }
        postData(payload)
        .then (response => {
            handleFetch()
        })
    }


    const handleDelete = (id)=>{
        deleteData(id);
        handleFetch();
    }

    const handleFetch = ()=>{
        getData(page, limit)
        .then (response => {
            const recData = response.data;
            console.log(recData)
            setAllUserDetail(recData)
        })
    }

    React.useEffect(()=>{
        handleFetch()
    }, [page])

    return (
        <div style={{textAlign: 'center'}}>
            <UserForm {...userDetail} handleChange = {handleChange} handleSubmit = {handleSubmit} />
            {
                allUserDetail && allUserDetail.map(item => <UserOutput key = {item.id} {...item} handleDelete = {handleDelete} /> )
            }
                <div>
                    <button onClick={()=>setPage(page-1)} >Prev</button>
                    <button onClick={()=>setPage(page+1)} >Next</button>
                </div>
        </div>
    )
}
