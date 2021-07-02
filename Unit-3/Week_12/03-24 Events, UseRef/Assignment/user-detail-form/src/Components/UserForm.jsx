import React from 'react'

const dept = [
    {
        name : "HR",
        value: "HR"
    },
    {
        name : "Accounts",
        value: "accounts"
    },
    {
        name : "Engineering",
        value: "engineering"
    },
    {
        name : "IT",
        value: "IT"
    },
]

export const UserForm = ({name, age, address, department, salary, maritalStatus, handleSubmit, handleChange}) => {
    return (
        <div>
            <form onSubmit = {handleSubmit} >
                <label>
                    Name: 
                    <input type="text" value = {name} name = "name" onChange = {handleChange} placeholder = "Enter Name" />
                </label><br/>
                <label>
                    Age: 
                    <input type="number" value = {age} name = "age" onChange = {handleChange} placeholder = "Enter Age" />
                </label><br/>
                <label>
                    Address: 
                    <input type="text" value = {address} name = "address" onChange = {handleChange} placeholder = "Enter Address" />
                </label><br/>
                <label>
                    Department: 
                    <select name="department" value = {department} onChange = {handleChange} >
                        {
                            dept.map(dep => <option value= {dep.value}>{dep.name}</option>)
                        }
                    </select>
                </label><br/>
                <label>
                    Salary: 
                    <input type="text" value = {salary} name = "salary" onChange = {handleChange} placeholder = "Enter Salary" />
                </label><br/>
                <label>
                    Marital Status: 
                    <input type="checkbox" value = {maritalStatus} name = "maritalStatus" onChange = {handleChange} />
                </label><br/>
                <input type="Submit" value = "Submit" />
            </form>
        </div>
    )
}
