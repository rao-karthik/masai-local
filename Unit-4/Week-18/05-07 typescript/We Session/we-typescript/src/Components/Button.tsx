import React from 'react';

interface IButtonProps {
    label: string;
    handleClick: ()=>void
}

export const Button = ({label, handleClick}: IButtonProps) => {
    return (
        <button onClick={handleClick}>
            {label}
        </button>
    )
}
