import React from 'react'
import {FormDisp} from './formDisp'
import {FormInput} from './formInput'

let initState = {
    name: "",
    skills: ""
}

function Form(){

    const [state, setState] = React.useState(initState);

    const handleChange = e =>{
        const {name, value} = e.target;
        setState ({
            ...state,
            [name]: value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        console.log(state)
    }

    return (
        <div>
            <FormInput handleSumbit = {handleSubmit} handleChange = {handleChange} />
        </div>
    )
}

export {Form}