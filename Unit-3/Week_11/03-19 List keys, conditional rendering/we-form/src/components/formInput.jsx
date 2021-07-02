import React from 'react';

export function FormInput({name, handleSubmit, handleChange}){
    return (
        <div>
            <h1>Form</h1>
            <form onSubmit = {handleSubmit}>
                <input type="text" placeholder="name" name="name" onChange={handleChange} />
                <input type="text" placeholder="skills" name="skills" onChange={handleChange} />
                <input type="submit" value="Submit"/>
            </form>
        </div>
    )
}