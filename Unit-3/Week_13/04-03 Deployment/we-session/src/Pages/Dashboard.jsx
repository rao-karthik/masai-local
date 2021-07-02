import React from 'react'
import { Link } from 'react-router-dom'

export const Dashboard = () => {
    return (
        <div>
            <h3>Welcome to Dashboard</h3>
            <Link to='/dashboard/settings'>Settings</Link>
        </div>
    )
}
