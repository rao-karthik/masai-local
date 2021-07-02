import React from 'react'

let initData = {
    name: '',
    age: '',
    gender: '',
    married: ''
}
export const Form = () => {

    const [formData, setFormData] = React.useState(initData);
    let {name, age, gender, location, married} = formData;

    const handleChange = ()=> {
        
    }


    return (
        <div>
            <div>
                <label>
                    Name:
                    <input type="text" name = {name} />
                </label>
            </div>
            <div>
                <label>
                    Age:
                    <input type="number" name = {age} />
                </label>
            </div>
            <div>
                <select name="gender" >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other"></option>
                </select>
            </div>
            <div>
                <label>
                    Married:
                    <input type="checkbox" name = {married} checked= {married} />
                </label>
            </div>
        </div>
    )
}
