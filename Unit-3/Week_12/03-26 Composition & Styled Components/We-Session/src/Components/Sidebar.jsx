import React from 'react'

export const Sidebar = ({children, width = 150}) => {
    return (
        <div style = {{width: "150px", border: "1px solid black"}}>
            {children}
        </div>
    )
}
