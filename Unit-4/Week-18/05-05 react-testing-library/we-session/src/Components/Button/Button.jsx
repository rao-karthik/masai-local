import React from 'react'

export const Button = ({ label, onClick, color }) => {

    const style = { backgroundColor: color }
    
    return (
        <button data-testid="button-form" style={style} onClick={onClick}>
            {label}
        </button>
    )
}
