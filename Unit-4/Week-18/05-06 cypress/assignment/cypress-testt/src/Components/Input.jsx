import React, { useState } from 'react'

export const Input = ({ value, onChange, handleSubmit }) => {
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    autoFocus 
                    type="text" 
                    name="input" 
                    value={value}
                    onChange={(e)=>onChange(e.target.value)} 
                    className='input-form' />
            </form>
        </div>
    )
}