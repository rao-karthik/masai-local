import React from 'react';

interface IHeadeerProps {
    label: string
}

export const Header = ({label}: IHeadeerProps) => {
    return (
        <div>
            { label }
        </div>
    )
}
